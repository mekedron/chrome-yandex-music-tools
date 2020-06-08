import getCurrentUID from '../resolvers/current-uid'

export default async (url, params = null, cors = true) => {
  const currentUID = await getCurrentUID()

  return new Promise((resolve, reject) => {
    const acceptHeader = 'application/json; q=1.0, text/*; q=0.8, */*; q=0.1'
    const href = document.location.href
    const request = new XMLHttpRequest
    request.dataType = 'text'

    if (cors) {
      request.withCredentials = true
      request.crossDomain = true
    }

    request.timeout = 10000
    request.responseType = 'json'

    if (params !== null) {
      url += url.indexOf('?') < 0 ? '?' : '&'
      url += new URLSearchParams(params).toString()
    }

    request.open('GET', url, true)

    if (cors) {
      request.setRequestHeader('X-Retpath-Y', encodeURIComponent(href))
      request.setRequestHeader('Accept', acceptHeader)
      request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      if (currentUID) {
        request.setRequestHeader('X-Current-UID', currentUID)
      }
    }

    request.onerror = (e) => {
      reject(
        'Ya.Music Helper: JSON request has triggered en error: ' +
        e.target.status,
      )
    }

    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return
      }

      if (request.status === 200 && request.response) {
        resolve(request.response)
      } else {
        reject(
          'Ya.Music Helper: Status code is not 200 during requesting JSON.',
        )
      }
    }
    request.send()
  })
}
