const common = require('../utils/common')
const app = getApp()
const commonMixin = {
  data: {
    host: app.globalData.config.host,
    api: app.globalData.config.api,
    appName: app.globalData.config.appName
  },
  onLoad: function(options) {
    const userInfo = this.getStorageSync('userInfo') || ''
    const wechatUserInfo = this.getStorageSync('wechatUserInfo') || ''
    const openid = this.getStorageSync('openid') || ''
    this.getSystemInfo().then(res => {
      const { platform } = res
      this.setData({
        platform,
        userInfo,
        wechatUserInfo,
        openid
      })
    })
    console.log('commonMixin onLoad ')
  },
  setHeaderWhite: function() {
    // 设置背景色
    this.setBackgroundColor({
      backgroundColor: '#ffffff',
      backgroundColorTop: '#ffffff',
      backgroundColorBottom: '#ffffff'
    })
    // 设置导航栏颜色
    this.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff'
    })
  },
  setHeaderRed: function() {
    // 设置背景色
    this.setBackgroundColor({
      backgroundColor: '#459bfb',
      backgroundColorTop: '#459bfb',
      backgroundColorBottom: '#ffffff'
    })
    // 设置导航栏颜色
    this.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#459bfb'
    })
  },
  simulateAjax: function(type, data) {
    const p = new Promise((resolve, reject) => {
      setTimeout(function() {
        if (type === 'success') {
          resolve(data)
          return false
        }
        if (type === 'fail') {
          reject(data)
          return false
        }
      }, 1000)
    })
    return p
  }
}
Object.keys(common).map(function(item, index) {
  commonMixin[item] = common[item]
})
module.exports = commonMixin
