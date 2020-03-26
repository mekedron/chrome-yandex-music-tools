(function () {
  const MAGIC_KEY = 'XGRlBW9FXlekgbPrRHuSiA'
  const injectedDlBtns = []

  const init = () => {
    attachEvents()
    injectPlayerDlButton()
  }

  const attachEvents = () => {
    let secondsBeforeTheDeath = 0;
    let deathTimerId = Math.ceil(Math.random() * 100)
    setInterval(() => {
      secondsBeforeTheDeath++
      console.debug(
        deathTimerId + ' - Seconds before the death: ', secondsBeforeTheDeath
      )
    }, 1000)

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
    const trackBlock = contextMenuBlock
      .closest('.d-track')
      .querySelector('button[data-idx]')
    const trackId = trackBlock.dataset.idx
    injectDlButton(menuBlockId, trackId)
  }

  const injectDlButton = (menuBlockId, trackId) => {
    if (injectedDlBtns[menuBlockId]) {
      return
    }

    injectedDlBtns[menuBlockId] = true

    proxy(function (menuBlockId, trackId) {
      const target = document.querySelector('.d-context-menu[data-b="' + menuBlockId + '"]')
      const $button = jQuery(
        '<li class="d-context-menu__item deco-popup-menu__item d-context-menu__item_download _track-download" data-track-id="' + trackId + '">' +
        '<span class="d-context-menu__item-icon _track-download">' +
        '<span class="d-icon deco-icon d-icon_download _track-download"></span>' +
        '</span>' +
        '<span class="d-context-menu__item-title _track-download">Скачать</span>' +
        '</li>'
      )
      Mu.blocks.forElem(target).$popup
      .find('.d-context-menu__tab_main .d-context-menu__item_share')
      .after($button)
    }, menuBlockId, trackId)
  }

  const onDlButtonClick = (event) => {
    const trackId = event.target.closest('._track-download[data-track-id]').dataset.trackId
    requestMeta(trackId, downloadTrack)
  }

  const requestMeta = (trackId, callback) => {
    const url = 'https://music.yandex.ru/handlers/track.jsx?track=' + trackId + '&lang=ru&external-domain=music.yandex.ru'

    const request = new XMLHttpRequest
    request.open('GET', url, true)
    request.dataType = 'text'
    request.onerror = () => {
      log('Something went during requesting meta ', arguments)
    }
    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE) {
        callback(JSON.parse(request.responseText))
      }
    }
    request.send()
  }

  const downloadTrack = (meta) => {
    if (!meta || !meta.track || !meta.track.storageDir) {
      console.error('Wrong meta has been received')
      return
    }

    const storageDir = meta.track.storageDir
    const infoUrl = 'https://storage.mds.yandex.net/download-info/' + storageDir + '/2?format=json'

    const request = new XMLHttpRequest
    request.open('GET', infoUrl, true)
    request.dataType = 'text'
    request.onerror = () => {
      log('Something went during downloading the track ', arguments)
    }
    request.onreadystatechange = () => {
      if(request.readyState !== XMLHttpRequest.DONE) {
        return
      }

      const parts = JSON.parse(request.responseText)

      if (!parts || !parts.s) {
        log('Can\'t parse download-info.', parts)
        return
      }

      const hash = md5(MAGIC_KEY + parts.path.substr(1) + parts.s)
      const url = 'https://' + parts.host + '/get-mp3/' + hash + '/' + parts.ts + parts.path
      const name = buildName(meta)

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

    if (track.artists[1]) {
      for (var i = 0; i < track.artists.length; i++) {
        name += ', ' + track.artists[i].name
      }
      name = name.substring(2)
    } else {
      name = track.artists[0]
        ? track.artists[0].name + ' - ' + track.title
        : track.title
    }

    name = cleanString(name)

    name += '.mp3'

    return name
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
        '</span>'
      )
      const mutationObserver = new MutationObserver(mutations => {
        for(let mutation of mutations) {
          for(let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) {
              continue
            }
            if (node.matches('.player-controls__track-controls')) {
              setTrackId(node)
            }
            for(let elem of node.querySelectorAll('.player-controls__track-controls')) {
              setTrackId(node)
            }
          }
        }
      })

      mutationObserver.observe(
        document.querySelector('.player-controls__track-container'),
        {childList: true, subtree: true}
      )

      const setTrackId = function (container) {
        const playerBlock = container.querySelector('.track')
        const controlsBlock = container.querySelector('.player-controls__track-controls')
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
})()
