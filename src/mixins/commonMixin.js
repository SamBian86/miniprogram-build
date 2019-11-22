const common = require('../utils/common')
const app = getApp()
const commonMixin = {
  data: {
    api: app.globalData.config.api,
    version: app.globalData.config.version,
    platformType: app.globalData.config.platformType,
    appName: app.globalData.config.appName,
    appVersion: app.globalData.config.appVersion,
    apiVersion: app.globalData.config.apiVersion
  },
  onLoad: function(options) {
    this.getSystemInfo().then(res => {
      const { platform } = res
      this.setData({
        platform
      })
    })
    this.getStorage({
      key: 'token',
      complete: result => {
        this.setData({
          token: result && result.data ? result.data : ''
        })
      }
    })
    this.getStorage({
      key: 'userInfo',
      complete: result => {
        this.setData({
          userInfo: result && result.data ? result.data : ''
        })
      }
    })
    this.getStorage({
      key: 'wechatUserInfo',
      complete: result => {
        this.setData({
          wechatUserInfo: result && result.data ? result.data : ''
        })
      }
    })
    this.getStorage({
      key: 'openid',
      complete: result => {
        this.setData({
          openid: result && result.data ? result.data : ''
        })
      }
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
      backgroundColor: '#20DCCF',
      backgroundColorTop: '#20DCCF',
      backgroundColorBottom: '#ffffff'
    })
    // 设置导航栏颜色
    this.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#20DCCF'
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
