const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
const tools = require('../utils/tools')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
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
    // 路径键名
    imgKey: {
      type: String,
      value: 'src'
    },
    // 视频最长时间
    maxDuration: {
      type: Number,
      value: 60
    },
    items: {
      type: Array,
      value: []
    },
    videoImage: {
      type: String,
      value: ''
    }
  },
  data: {
    filelists: []
  },
  methods: {
    init: function() {
      // console.log('bindInitData')
      const key = this.data.dName.split('_')[0]
      const type = this.data.dName.split('_')[1]
      const value = this.getValueByType(type, this.data.dValue)
      this.setData({
        filelists: value
      })
      this.triggerEvent('initdata', {
        key: key,
        value: value
      })
    }
  }
})
