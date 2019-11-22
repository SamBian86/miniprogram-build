const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    type: {
      type: String,
      value: 'normal'
    },
    pullStatus: {
      type: Object,
      value: {}
    },
    finishText: {
      type: String,
      value: '没有更多数据'
    },
    moreText: {
      type: String,
      value: '上拉加载更多'
    },
    emptyText: {
      type: String,
      value: '暂无数据'
    },
    loadingText: {
      type: String,
      value: '数据获取中...'
    },
    cssContainerStyle: {
      type: String,
      value: ''
    },
    cssLoadingStyle: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {}
})
