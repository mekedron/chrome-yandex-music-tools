import proxy from './proxy'
import randomString from './random-string'

export default async (source, ...args) => {
  const eventCode = 'yaTools.' + randomString(5)

  return new Promise(resolve => {
    document.addEventListener(eventCode, function (event) {
      resolve(event.detail)
    }, {
      once: true,
    })

    source = '(function () {' +
      'var result = (' + source.toString() + ')' +
      '(' + (args ? ('"' + args.join('","') + '"') : '') + ');' +
      'document.dispatchEvent(' +
      'new CustomEvent("' + eventCode + '", { "detail": result })' +
      ')' +
      '})();';

    proxy(source)
  })
}
