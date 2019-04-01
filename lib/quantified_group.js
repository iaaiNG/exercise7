module.exports = function (str) {
  // TODO
  return /^(0x[A-F\d]{2}\s*){8}$/i.test(str)
}