module.exports = function (str) {
  // TODO
  let res = /x=(\d+)/.exec(str)
  return res ? res[1] : res
}