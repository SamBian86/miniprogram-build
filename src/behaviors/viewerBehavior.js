const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    visiable: {
      type: Boolean,
      value: false
    },
    items: {
      type: Array,
      value: []
    },
    indicatorDots: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: false
    },
    interval: {
      type: Number,
      value: 5000
    },
    duration: {
      type: Number,
      value: 500
    },
    cssStyle: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    closePanel: function() {
      const mask = this.selectComponent('#mask')
      // 关闭遮罩
      mask.hide()
      this.setData({
        visiable: false
      })
    },
    openPanel: function() {
      const that = this
      const mask = this.selectComponent('#mask')
      // 显示遮罩
      mask.show()
      setTimeout(function() {
        that.setData({
          visiable: true
        })
      }, 20)
    },
    viewerChange(e) {
      const { items } = this.data
      const source = this.getEventDetail(e)['source']
      const current = this.getEventDetail(e)['current']
      if (source === 'touch') {
        items.map(item => {
          if (item.type === 'video') {
            const video = wx.createVideoContext('video' + item.id)
            video.stop()
          }
        })
      }
    },
    catchEvent() {}
  }
})
