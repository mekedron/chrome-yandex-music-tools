import requestJSON from '../utils/request-json'
import getCurrentUID from './current-uid'
import md5 from 'md5'

const MAGIC_KEY = 'XGRlBW9FXlekgbPrRHuSiA'

const requestDownloadInfo = async (trackId, albumId, hq = false) => {
  const hostname = window.location.hostname
  const trackWithAlbum = trackId + (albumId ? (':' + albumId) : '')
  const downloadInfoUrl = `https://${hostname}/api/v2.1/handlers/track/${trackWithAlbum}/web-artist_tracks-track-track-main/download/m`
  const params = {
    'hq': hq ? 1 : 0,
    'external-domain': window.location.hostname,
    'overembed': 'no',
    '__t': Date.now(),
  }

  return await requestJSON(downloadInfoUrl, params, true)
}

export default async (trackId, albumId, hq = false) => {
  const downloadInfo = await requestDownloadInfo(trackId, albumId, hq)

  const params = {
    'format': 'json',
    'external-domain': window.location.hostname,
    'overembed': 'no',
    '__t': Date.now(),
  }

  const parts = await requestJSON(downloadInfo.src, params, false)
  const {host, s, ts, path} = parts
  const hash = md5(MAGIC_KEY + path.substr(1) + s)

  return `https://${host}/get-mp3/${hash}/${ts}${path}`
}
