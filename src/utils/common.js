const config = require('../config/index')

module.exports = {
  getLaunchOptionsSync: function() {
    return wx.getLaunchOptionsSync()
  },
  getCurrentTarget: function(e, type) {
    return type ? e['currentTarget'][type] : e['currentTarget']
  },
  getTarget: function(e, type) {
    return type ? e['target'][type] : e['target']
  },
  getEventDetail: function(e, type) {
    return type ? e['detail'][type] : e['detail']
  },
  getUserInfo: function(obj) {
    return wx.p.getUserInfo(obj)
  },
  showToast: function(obj) {
    return wx.p.showToast(obj)
  },
  showModel: function(obj) {
    return wx.p.showModel(obj)
  },
  hideToast: function(obj) {
    return wx.p.hideToast(obj)
  },
  showModal: function(obj) {
    return wx.p.showModal(obj)
  },
  showLoading: function(obj) {
    return wx.p.showLoading(obj)
  },
  hideLoading: function(obj) {
    return wx.showLoading(obj)
  },
  navigateTo: function(obj) {
    return wx.p.navigateTo(obj)
  },
  navigateBack: function(obj) {
    return wx.p.navigateBack(obj)
  },
  switchTab: function(obj) {
    return wx.p.switchTab(obj)
  },
  chooseImage: function(obj) {
    return wx.p.chooseImage(obj)
  },
  chooseVideo: function(obj) {
    return wx.p.chooseVideo(obj)
  },
  setBackgroundColor: function(obj) {
    return wx.p.setBackgroundColor(obj)
  },
  setNavigationBarColor: function(obj) {
    return wx.p.setNavigationBarColor(obj)
  },
  setNavigationBarTitle: function(obj) {
    return wx.setNavigationBarTitle(obj)
  },
  stopPullDownRefresh: function(obj) {
    return wx.p.stopPullDownRefresh(obj)
  },
  pageScrollTo: function(obj) {
    return wx.pageScrollTo(obj)
  },
  makePhoneCall: function(obj) {
    return wx.p.makePhoneCall(obj)
  },
  request: function(obj) {
    return wx.p.request(obj)
  },
  login: function(obj) {
    return wx.p.login(obj)
  },
  checkSession: function(obj) {
    return wx.p.checkSession(obj)
  },
  uploadFile: function(obj) {
    return wx.p.uploadFile(obj)
  },
  setStorage: function(obj) {
    return wx.p.setStorage(obj)
  },
  setStorageSync: function(key, value) {
    return wx.setStorageSync(key, value)
  },
  getStorage: function(obj) {
    return wx.p.getStorage(obj)
  },
  getStorageSync: function(key) {
    return wx.getStorageSync(key)
  },
  requestPayment: function(obj) {
    return wx.p.requestPayment(obj)
  },
  openLocation: function(obj) {
    return wx.p.openLocation(obj)
  },
  getSystemInfo: function(obj) {
    return wx.p.getSystemInfo(obj)
  },
  getSystemInfoSync: function() {
    return wx.getSystemInfoSync()
  },
  showShareMenu: function(obj) {
    return wx.p.showShareMenu(obj)
  },
  updateShareMenu: function(obj) {
    return wx.p.updateShareMenu(obj)
  },
  hideShareMenu: function(obj) {
    return wx.p.hideShareMenu(obj)
  },
  getShareInfo: function(obj) {
    return wx.p.getShareInfo(obj)
  },
  navigateToMiniProgram: function(obj) {
    return wx.p.navigateToMiniProgram(obj)
  },
  scanCode: function(obj) {
    return wx.p.scanCode(obj)
  },
  setStore: function(key, value) {
    this.setStorageSync(key, value)
  },
  getStore: function(key) {
    try {
      const value = this.getStorageSync(key)
      if (value) {
        return value
      }
    } catch (e) {}
  },
  goTo: function(e) {
    const url = this.getEventDetail(e, 'url')
    this.navigateTo({
      url: url
    })
  },
  initAuth: function() {
    try {
      const openid = this.getStorageSync('openid')
      if (!openid) {
        this.setStorageSync('openid', '')
        this.setStorageSync('userInfo', '')
      }
    } catch (e) {}
  },
  checkUserInfo: function() {
    try {
      const openid = this.getStorageSync('openid')
      if (openid) {
        return this.getStorageSync('userInfo')
      } else {
        return false
      }
    } catch (e) {}
  },
  getHeader: function() {
    let openid = this.getStorageSync('openid') || ''
    return Promise.resolve({
      openid
    })
  },
  makeOpenIdExpire() {
    this.setStorageSync('openid', '')
    this.setStorageSync('userInfo', '')
    this.setStorageSync('wechatUserInfo', '')
  },
  httpGet: function(obj) {
    let header = {}
    return this.getHeader().then(res => {
      header = res
      const options = {
        url: '',
        data: {},
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text'
      }
      Object.assign(options.header, header, obj.header)
      delete obj.header
      Object.assign(options, obj)
      return this.request(options)
    })
  },
  httpPostParams: function(obj) {
    let header = {}
    return this.getHeader().then(res => {
      header = res
      const options = {
        url: '',
        data: {},
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text'
      }
      Object.assign(options.header, header, obj.header)
      delete obj.header
      Object.assign(options, obj)
      return this.request(options)
    })
  },
  httpPostJson: function(obj) {
    let header = {}
    return this.getHeader().then(res => {
      header = res
      const options = {
        url: '',
        data: {},
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text'
      }
      Object.assign(options.header, header, obj.header)
      delete obj.header
      Object.assign(options, obj)
      return this.request(options)
    })
  },
  httpUpload: function(obj) {
    let header = {}
    return this.getHeader().then(res => {
      header = res
      const options = {
        url: '',
        header: {
          'content-type': 'multipart/form-data'
        },
        filePath: '',
        formData: {},
        name: '',
        method: 'POST',
        dataType: 'json',
        responseType: 'text'
      }
      Object.assign(options.header, header, obj.header)
      delete obj.header
      Object.assign(options, obj)
      return this.uploadFile(options)
    })
  }
}
