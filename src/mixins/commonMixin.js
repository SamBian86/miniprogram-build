const common = require('../utils/common')
const app = getApp()
const commonMixin = {
  data: {
    api: {}
  },
  onLoad: function(options) {
    console.log('commonMixin onLoad ')
    this.setData({
      api: app.globalData.config.api
    })
  }
}
Object.keys(common).map(function(item, index) {
  commonMixin[item] = common[item]
})
module.exports = commonMixin
