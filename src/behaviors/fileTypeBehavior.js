const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    visiable: {
      type: Boolean,
      value: false
    },
    video: {
      type: Number,
      value: 1
    },
    // 选择图片最大个数
    max: {
      type: Number,
      value: 9
    },
    // 视频最长时间
    maxDuration: {
      type: Number,
      value: 60
    },
    items: {
      type: Array,
      value: []
    }
  },
  data: {
    photoNum: 0,
    videoNum: 0
  },
  methods: {
    init: function() {},
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
    // 选择图片
    openPhoto: function() {
      this.closePanel()
      this.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera']
      }).then(res => {
        // console.log(res)
        res.currentFileType = 1
        this.triggerEvent('filetypeevent', res)
      })
    },
    // 选择视频
    openVideo: function(e) {
      this.closePanel()
      this.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: this.data.maxDuration
      }).then(res => {
        // console.log(res)
        res.currentFileType = 2
        this.triggerEvent('filetypeevent', res)
      })
    },
    countMedia() {
      let photoNum = 0
      let videoNum = 0
      this.data.items.forEach(item => {
        if (item.fileType === 1) {
          photoNum++
        }
        if (item.fileType === 2) {
          videoNum++
        }
      })
      // console.log(`photoNum: ${photoNum} videoNum: ${videoNum}`)
      this.setData({
        photoNum,
        videoNum
      })
    }
  }
})
