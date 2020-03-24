(function () {
  //
  const MAGIC_KEY = 'XGRlBW9FXlekgbPrRHuSiA'
  const injectedDlBtns = []

  const init = () => {
    attachEvents()
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
    const trackBlock = contextMenuBlock.closest('.d-track').querySelector('button[data-idx]')
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
    const trackId = event.target.closest('.d-context-menu__item_download').dataset.trackId
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
      name = track.artists[0] ? track.artists[0].name : track.title
    }

    name += ' - ' + track.title + '.mp3'

    return name
  }

  const log = (message, ...args) => {
    console.error(message, args)
    alert('Что-то пошло не так :0')
  }

  init()
})()
