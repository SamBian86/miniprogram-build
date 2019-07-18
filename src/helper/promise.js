// 使微信小程序api支持promise, 在微信wx对象下使用"wx.p.request"即为promise封装过后的方法，只要在下面wxApi中配置以后就能这样使用

const utils = require('../utils/promise')
const wxApiName = [
  'request',
  'showToast',
  'showModal',
  'navigateTo',
  'navigateBack',
  'switchTab'
]

wx.p = {}
wxApiName.map(name => {
  const native = wx[name]
  wx.p[name] = (...opts) => {
    return utils.promise.apply(this, [native, ...opts])
  }
})
