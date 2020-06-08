import requestJSON from '../utils/request-json'

export default async (trackId) => {
  const hostname = window.location.hostname

  const params = {
    'track': trackId,
    'lang': 'ru',
    'external-domain': hostname
  }

  const url = `https://${hostname}/handlers/track.jsx`

  return await requestJSON(url, params, '', false)
}
