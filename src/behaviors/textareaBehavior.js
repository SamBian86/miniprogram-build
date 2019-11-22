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
    cssStyle: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    placeholderClass: {
      type: String,
      value: 'textarea_placeholder'
    },
    noPad: {
      type: Boolean,
      value: false
    },
    disabled: {
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
    // textarea子组件input方法
    textareaEvent: function(e) {
      // console.log('bindKeyInput')
      this.triggerEvent('keyinput', e)
    }
  }
})
