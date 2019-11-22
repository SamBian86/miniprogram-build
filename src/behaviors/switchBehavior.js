const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    containerClassName: {
      type: String,
      value: ''
    },
    value: {
      type: Boolean,
      value: false
    },
    noPad: {
      type: Boolean,
      value: false
    },
    last: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    // 子组件初始化后初始化父组件data
    init: function() {
      // console.log('bindInitData')
      const key = this.data.dName.split('_')[0]
      const type = this.data.dName.split('_')[1]
      const value = this.getValueByType(type, this.data.dValue)
      this.triggerEvent('initdata', {
        key: key,
        value: value
      })
    },
    // switch子组件change方法
    changeEvent: function(e) {
      // console.log('switchchange')
      this.triggerEvent('switchchange', e)
    }
  }
})
