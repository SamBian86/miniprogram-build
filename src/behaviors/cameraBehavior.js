const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    visiable: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 9
    }
  },
  data: {},
  methods: {
    init: function() {
      console.log(this.data.count)
    },
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
    // 打开相册
    openAlbum: function() {
      this.closePanel()
      wx.p
        .chooseImage({
          count: this.data.count,
          sizeType: ['original', 'compressed'],
          sourceType: ['album']
        })
        .then(res => {
          this.triggerEvent('cameraevent', res)
        })
    },
    // 打开相机
    openCamera: function() {
      this.closePanel()
      wx.p
        .chooseImage({
          sourceType: ['camera']
        })
        .then(res => {
          this.triggerEvent('cameraevent', res)
        })
    }
  }
})
