const common = require('../utils/common')
const app = getApp()
const commonBehavior = {
  behaviors: [],
  properties: {},
  data: {
    api: app.globalData.config.api,
    version: app.globalData.config.version
  },
  lifetimes: {
    attached: function() {
      // console.log('attached')
    },
    moved: function() {
      // console.log('moved')
    },
    detached: function() {
      // console.log('detached')
    }
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  methods: {}
}
Object.keys(common).map(function(item, index) {
  commonBehavior.methods[item] = common[item]
})
module.exports = Behavior(commonBehavior)
