module.exports = function proxy (source, ...args) {
  if (typeof source === 'function') {
    source = '(' + source.toString() + ')("' + args.join('","') + '");'
  }
  const j = document.createElement('script'),
    f = document.getElementsByTagName('script')[0]
  j.textContent = source
  f.parentNode.insertBefore(j, f)
  f.parentNode.removeChild(j)

  return true;
}
