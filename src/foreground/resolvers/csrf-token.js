import proxyEventized from '../utils/proxy-eventized'

export default async function () {
  return proxyEventized(function () {
    return ya.music.user.getCSRF()
  })
}
