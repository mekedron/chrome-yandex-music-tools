const md5 = require('md5')
const cleanString = require('./foreground/clean-string')
const proxy = require('./foreground/proxy');

const MAGIC_KEY = 'XGRlBW9FXlekgbPrRHuSiA'
const injectedDlBtns = {}
const authData = {}

const init = () => {
  loadAuthData()
  attachEvents()
  injectPlayerDlButton()

  // prevent extension worker from dying
  let pingId = Math.ceil(Math.random() * 100)
  setInterval(() => {
    console.debug(
      '#' + pingId + ' Ya.Music Helper Ping',
    )
  }, 1000)
}

const loadAuthData = () => {
  document.addEventListener(
    'yaMusicHelperAuthData',
    event => {
      Object.assign(authData, event.detail.authData)

      console.debug('YaMusicHelper: AuthData received: ', authData)
    },
    {
      once: true,
    },
  )
  proxy(function () {
    const authDataEvent = new CustomEvent('yaMusicHelperAuthData', {
      bubbles: false,
      cancelable: false,
      detail: {
        authData: jQuery.extend(true, {}, Mu.authData.user),
      },
    })

    document.dispatchEvent(authDataEvent)
  })
}

const attachEvents = () => {
  document.addEventListener('click', handleClick)
}

const handleClick = event => {
  const classList = event.target.classList

  if (classList.contains('d-context-menu__opener')) {
    onContextMenuClick(event)
  } else if (classList.contains('_track-download')) {
    onDlButtonClick(event)
  }
}

const onContextMenuClick = (event) => {
  const contextMenuBlock = event.target.parentElement
  const menuBlockId = contextMenuBlock.dataset.b
  const trackBlock = contextMenuBlock.closest('.d-track').
    querySelector('button[data-idx]')
  const trackId = trackBlock.dataset.idx
  injectDlButton(menuBlockId, trackId)
}

const injectDlButton = (menuBlockId, trackId) => {
  if (injectedDlBtns[menuBlockId]) {
    return
  }

  injectedDlBtns[menuBlockId] = true

  proxy(function (menuBlockId, trackId) {
    const target = document.querySelector(
      '.d-context-menu[data-b="' + menuBlockId + '"]')
    const $button = jQuery(
      '<li class="d-context-menu__item deco-popup-menu__item d-context-menu__item_download _track-download" data-track-id="' +
      trackId + '">' +
      '<span class="d-context-menu__item-icon _track-download">' +
      '<span class="d-icon deco-icon d-icon_download _track-download"></span>' +
      '</span>' +
      '<span class="d-context-menu__item-title _track-download">Скачать</span>' +
      '</li>',
    )
    Mu.blocks.forElem(target).
      $popup.
      find('.d-context-menu__tab_main .d-context-menu__item_share').
      after($button)
  }, menuBlockId, trackId)
}

const onDlButtonClick = (event) => {
  const trackId = event.target.closest(
    '._track-download[data-track-id]').dataset.trackId
  requestMeta(trackId, meta => {
    if (!authData || !authData.isPremium) {
      downloadTrack(meta)
    } else {
      downloadHqTrack(meta)
    }
  })
}

const requestMeta = (trackId, callback) => {
  const url = 'https://music.yandex.ru/handlers/track.jsx?track=' + trackId +
    '&lang=ru&external-domain=music.yandex.ru'

  const request = new XMLHttpRequest
  request.open('GET', url, true)
  request.dataType = 'text'
  request.onerror = () => {
    log('Something went during requesting meta ', arguments)
  }
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(request.responseText))
    }
  }
  request.send()
}

const downloadTrack = (meta) => {
  if (!meta || !meta.track || !meta.track.storageDir) {
    log('Wrong meta has been received')
    return
  }

  const storageDir = meta.track.storageDir
  const infoUrl = 'https://storage.mds.yandex.net/download-info/' +
    storageDir + '/2'
  const name = buildName(meta)

  downloadByInfoUrl(infoUrl, name)
}

// todo refactor
const downloadHqTrack = (meta) => {
  if (!meta || !meta.track || !meta.track.storageDir) {
    log('Wrong meta has been received')
    return
  }

  const albumId = meta.track.albumId || meta.track.albums &&
    meta.track.albums[0] && meta.track.albums[0].id
  const trackId = meta.track.id + (albumId ? ':' + albumId : '')
  const name = buildName(meta)

  document.addEventListener(
    'yaMusicHelperHqInfoEvent',
    event => {
      const response = event.detail.response

      if (response && response.error) {
        log(response.message)
      } else {
        downloadByInfoUrl(response.src, name)
      }
    },
    {
      once: true,
    },
  )

  proxy(function (trackId) {
    const timestamp = Date.now()
    const metaUrl = 'https://music.yandex.ru/api/v2.1/handlers/track/' +
      trackId +
      '/web-artist_tracks-track-track-main/download/m?hq=1&external-domain=music.yandex.ru&overembed=no&__t=' +
      timestamp
    const data = {
      'timestamp': timestamp,
      'sign': window.ya.music.user.getCSRF(),
      'data': {},
      'external-domain': 'music.yandex.ru',
      'overembed': 'no',
    }

    const hqInfoEvent = new CustomEvent('yaMusicHelperHqInfoEvent', {
      bubbles: false,
      cancelable: false,
      detail: {
        response: {},
      },
    })

    const returnError = err => {
      hqInfoEvent.detail.response = {
        error: true,
        message: err,
      }
      document.dispatchEvent(hqInfoEvent)
    }

    const returnSuccess = data => {
      hqInfoEvent.detail.response = jQuery.extend(true, {}, data)
      document.dispatchEvent(hqInfoEvent)
    }

    const request = new XMLHttpRequest
    request.dataType = 'text'
    request.withCredentials = true
    request.crossDomain = false
    request.timeout = 10000
    request.responseType = 'json'
    request.open('GET', metaUrl, true)
    request.setRequestHeader('X-Retpath-Y',
      encodeURIComponent(document.location.href))
    request.setRequestHeader('X-Current-UID', ya.music.user.getCurrentUID())
    request.setRequestHeader('Accept',
      'application/json; q=1.0, text/*; q=0.8, */*; q=0.1')
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    request.onerror = (e) => {
      returnError(
        'Ya.Music Helper: HQ Info request has triggered on error: ' +
        e.target.status)
    }
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return
      }

      if (request.status === 200 &&
        request.response &&
        request.response.src
      ) {
        returnSuccess(request.response)
      } else {
        returnError(
          'Ya.Music Helper: Status code is not 200 during resolving HQ info data or SRC is not in response')
      }
    }
    request.send()
  }, trackId)
}

const downloadByInfoUrl = (infoUrl, name) => {
  const request = new XMLHttpRequest
  infoUrl += infoUrl.indexOf('?') > -1
    ? '&format=json'
    : '?format=json'
  request.open('GET', infoUrl, true)
  request.dataType = 'text'
  request.onerror = () => {
    log('Something went during downloading the track ', arguments)
  }
  request.onreadystatechange = () => {
    if (request.readyState !== XMLHttpRequest.DONE) {
      return
    }

    const parts = JSON.parse(request.responseText)

    if (!parts || !parts.s) {
      log('Can\'t parse download-info.', parts)
      return
    }

    const hash = md5(MAGIC_KEY + parts.path.substr(1) + parts.s)
    const url = 'https://' + parts.host + '/get-mp3/' + hash + '/' +
      parts.ts + parts.path

    chrome.runtime.sendMessage({
      url: url,
      filename: name,
      type: 'download',
    })
  }
  request.send()
}

const buildName = (meta) => {
  const track = meta.track
  let name = ''

  if (track.artists.length) {
    for (var i = 0; i < track.artists.length; i++) {
      name += ', ' + cleanString(track.artists[i].name)
    }
    name = name.substring(2) + ' - ' + cleanString(track.title)
  } else {
    name = cleanString(track.title)
  }

  name += '.mp3'

  return name
}

const requestCSRF = callback => {
  document.addEventListener(
    'yaMusicHelperCsfrEvent',
    event => {
      callback(event.detail.csrf)
    },
    {
      once: true,
    },
  )
  proxy(function () {
    const csrfEvent = new CustomEvent('yaMusicHelperCsfrEvent', {
      bubbles: false,
      cancelable: false,
      detail: {
        csrf: window.ya.music.user.getCSRF(),
      },
    })

    document.dispatchEvent(csrfEvent)
  })
}

const log = (message, ...args) => {
  console.error(message, args)
  alert('Что-то пошло не так :0')
}

const injectPlayerDlButton = () => {
  proxy(function () {
    const $button = jQuery(
      '<span  class="player-controls__btn deco-player-controls__button _track-download" data-track-id="" style="margin-right: -40px;">' +
      '<span class="d-icon d-icon_download _track-download" title="Скачать" style="margin: 9px;width: 22px;height: 22px;"></span>' +
      '</span>' +
      '</span>',
    )
    const mutationObserver = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) {
            continue
          }
          if (node.matches('.player-controls__track-controls')) {
            setTrackId(node)
          }
          for (let elem of node.querySelectorAll(
            '.player-controls__track-controls')) {
            setTrackId(node)
          }
        }
      }
    })

    mutationObserver.observe(
      document.querySelector('.player-controls__track-container'),
      { childList: true, subtree: true },
    )

    const setTrackId = function (container) {
      const playerBlock = container.querySelector('.track')
      const controlsBlock = container.querySelector(
        '.player-controls__track-controls')
      const playerBlockInst = Mu.blocks.forElem(playerBlock)

      if (!playerBlockInst) {
        return
      }

      const trackId = playerBlockInst.data.track
        ? playerBlockInst.data.track.id
        : playerBlockInst.data.id
      $button.attr('data-track-id', trackId)

      const dlButton = controlsBlock.querySelector('._track-download')
      if (!dlButton) {
        jQuery(controlsBlock).append($button)
      }
    }
  })
}

init()
