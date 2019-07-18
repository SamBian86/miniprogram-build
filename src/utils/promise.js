// promise封装
const promise = (fn, opts = {}) => {
  const p = new Promise((resolve, reject) => {
    opts.success = function(res) {
      resolve(res)
    }
    opts.fail = function(res) {
      reject(res)
    }
    fn(opts)
  })
  return p
}

module.exports = {
  promise
}
