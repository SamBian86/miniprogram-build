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

const ajax_promise = (fn, opts = {}) => {
  const p = new Promise((resolve, reject) => {
    opts.success = function(res) {
      let _res = {}
      if (typeof res.data === 'string') {
        _res.data = JSON.parse(res.data)
      } else {
        _res = res
      }
      if (_res.data.code === 0) {
        resolve(_res)
      } else if (_res.data.code === 40019 || _res.data.code === 40125) {
        // wx.p.showToast({
        //   title: '请登录',
        //   icon: 'none',
        //   duration: 1000
        // })
        reject(_res)
      } else {
        reject(_res)
      }
    }
    opts.fail = function(res) {
      reject(res)
    }
    fn(opts)
  })
  return p
}

module.exports = {
  promise,
  ajax_promise
}
