const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    // 选择图片最大个数
    max: {
      type: Number,
      value: 10
    },
    // 路径键名
    imgKey: {
      type: String,
      value: 'src'
    }
  },
  data: {
    photolists: []
  },
  methods: {
    init: function() {
      // console.log('bindInitData')
      const key = this.data.dName.split('_')[0]
      const type = this.data.dName.split('_')[1]
      const value = this.getValueByType(type, this.data.dValue)
      this.setData({
        photolists: value
      })
      this.triggerEvent('initdata', {
        key: key,
        value: value
      })
    }
  }
})
