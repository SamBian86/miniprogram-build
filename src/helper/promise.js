// 使微信小程序api支持promise, 在微信wx对象下使用"wx.p.request"即为promise封装过后的方法，只要在下面wxApi中配置以后就能这样使用

const utils = require('../utils/promise')
const wxApiName = [
  'getLaunchOptionsSync',
  'getUserInfo',
  'request',
  'login',
  'uploadFile',
  'getSystemInfo',
  'showToast',
  'hideToast',
  'showModal',
  'showLoading',
  'hideLoading',
  'navigateTo',
  'navigateBack',
  'switchTab',
  'chooseImage',
  'chooseVideo',
  'setBackgroundColor',
  'setNavigationBarColor',
  'stopPullDownRefresh',
  'pageScrollTo',
  'makePhoneCall',
  'setStorage',
  'getStorage',
  'requestPayment',
  'openLocation',
  'showShareMenu',
  'updateShareMenu',
  'hideShareMenu',
  'getShareInfo',
  'navigateToMiniProgram',
  'scanCode'
]

wx.p = {}
wxApiName.map(name => {
  const native = wx[name]
  if (name === 'request' || name === 'uploadFile') {
    wx.p[name] = (...opts) => {
      return utils.ajax_promise.apply(this, [native, ...opts])
    }
  } else {
    wx.p[name] = (...opts) => {
      return utils.promise.apply(this, [native, ...opts])
    }
  }
})
