var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  let res = md.replace(/@@([a-z<>\/]*)@@/g, "<blink>$1</blink>")
  return res
}