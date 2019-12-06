const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    value: {
      type: String,
      value: ''
    },
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 100
    },
    step: {
      type: Number,
      value: 1
    }
  },
  data: {
    c_value: 1
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
    // input子组件input方法
    inputEvent: function(e) {
      const { min, max } = this.data
      const value = this.getEventDetail(e, 'value')
      let _value
      if (value === '') {
        _value = ''
      } else {
        if (value >= max) {
          _value = max
        } else if (value <= min) {
          _value = min
        } else {
          _value = value
        }
      }
      this.setData(
        {
          c_value: _value
        },
        () => {
          const { c_value } = this.data
          this.triggerEvent('keyinputnumber', e)
          this.triggerEvent('afterinputnumber', {
            value: c_value !== '' ? parseInt(c_value) : 0
          })
        }
      )
      // console.log('bindKeyInput')
    },
    inputAddEvent: function(e) {
      const { c_value, min, max, step } = this.data
      const _c_value = c_value !== '' ? parseInt(c_value) : 0
      const _min = parseInt(min)
      const _max = parseInt(max)
      const _step = parseInt(step)
      this.setData(
        {
          c_value: _c_value + _step > _max ? _max : _c_value + _step
        },
        () => {
          const { c_value } = this.data
          this.triggerEvent('afterinputnumber', {
            value: c_value
          })
        }
      )
    },
    inputReduceEvent: function(e) {
      const { c_value, min, max, step } = this.data
      const _c_value = c_value !== '' ? parseInt(c_value) : 0
      const _min = parseInt(min)
      const _max = parseInt(max)
      const _step = parseInt(step)
      this.setData(
        {
          c_value: _c_value - _step < _min ? _min : _c_value - _step
        },
        () => {
          const { c_value } = this.data
          this.triggerEvent('afterinputnumber', {
            value: c_value
          })
        }
      )
    }
  }
})
