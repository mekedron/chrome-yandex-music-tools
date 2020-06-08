import proxyEventized from '../utils/proxy-eventized'

let user = null

export default async () => {
  if (user) {
    return user
  }

  user = await proxyEventized(() => {
    return jQuery.extend(true, {}, Mu.authData.user)
  })

  return user
}
