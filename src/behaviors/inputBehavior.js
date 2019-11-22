const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    containerClassName: {
      type: String,
      value: ''
    },
    className: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    placeholderClass: {
      type: String,
      value: 'input_placeholder'
    },
    noPad: {
      type: Boolean,
      value: false
    },
    last: {
      type: Boolean,
      value: false
    },
    cssStyle: {
      type: String,
      value: ''
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
    // input子组件input方法
    inputEvent: function(e) {
      // console.log('bindKeyInput')
      this.triggerEvent('keyinput', e)
      this.triggerEvent('afterkeyinput', e)
    }
  }
})
