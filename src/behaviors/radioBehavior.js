const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    items: {
      type: Array,
      value: []
    },
    color: {
      type: String,
      value: '#20DCCF'
    }
  },
  data: {
    checked: null
  },
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
    // radio子组件change方法
    changeEvent: function(e) {
      this.triggerEvent('radiochange', e)
    }
  }
})
