const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    dValueKey: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'date'
    },
    value: {
      type: String,
      value: ''
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
    fields: {
      type: String,
      value: 'day'
    },
    placeholder: {
      type: String,
      value: '请选择'
    },
    rangeKey: {
      type: String,
      value: 'name'
    },
    range: {
      type: Array,
      value: []
    }
  },
  data: {},
  methods: {
    // 子组件初始化后初始化父组件data
    init: function() {
      const key = this.data.dName.split('_')[0]
      const type = this.data.dName.split('_')[1]
      const value = this.getValueByType(type, this.data.dValue)
      this.triggerEvent('initdata', {
        key: key,
        value: value
      })
    },
    // picker组件change方法
    changeEvent: function(e) {
      this.triggerEvent('pickerchange', e)
    }
  }
})
