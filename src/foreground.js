import cleanString from './foreground/utils/clean-string'
import proxy from './foreground/utils/proxy'
import getUser from './foreground/resolvers/user'
import getMp3Url from './foreground/resolvers/mp3-url'
import getTrackMeta from './foreground/resolvers/track-meta'

const injectedDlBtns = {}

const init = () => {
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

  getTrackMeta(trackId).then(async (meta) => {
    const authData = await getUser()
    return downloadTrack(meta, authData && authData.isPremium)
  })
}

const downloadTrack = async (meta, isHQRequested) => {
  if (!meta || !meta.track || !meta.track.storageDir) {
    log('Wrong meta has been received')
    return
  }

  const albumId = meta.track.albumId || meta.track.albums &&
    meta.track.albums[0] && meta.track.albums[0].id
  const trackId = meta.track.id
  const name = buildName(meta)

  const url = await getMp3Url(trackId, albumId, isHQRequested)

  chrome.runtime.sendMessage({
    url: url,
    filename: name,
    type: 'download',
  })
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
