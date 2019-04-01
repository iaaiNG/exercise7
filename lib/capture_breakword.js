module.exports = function (str) {
  // TODO
  let res = /\bx=(\d+)\b/.exec(str)
  return res ? res[1] : res
}