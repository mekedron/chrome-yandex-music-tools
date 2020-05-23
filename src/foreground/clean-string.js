module.exports = function cleanString (str) {
  str = str.replace(/\'/gi, '')
  str = str.replace(/\<em\>/gi, '')
  str = str.replace(/\<\/em\>/gi, '')
  str = str.replace(/[^a-z,0-9,A-Z,а-я, А-Я, ,\-,(,),.,\,,\—,\–]/gi, '')
  str = str.replace(/[ .\-\_\.\—]{2,100}/gi, '')
  str = str.replace(/\./gi, '')
  return str
}
