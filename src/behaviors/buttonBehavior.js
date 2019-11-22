const commonBehavior = require('./commonBehavior')
const formBehavior = require('./formBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior, formBehavior],
  properties: {
    type: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: 'big'
    },
    hoverClass: {
      type: String,
      value: 'button_hover_class'
    },
    cssStyle: {
      type: String,
      value: ''
    },
    addressText: {
      type: String,
      value: ''
    },
    mobile: {
      type: String,
      value: ''
    },
    smsType: {
      type: Number,
      value: 1
    }
  },
  data: {},
  methods: {
    // 触发点击事件
    tapEvent: function() {
      this.triggerEvent('tapevent')
    },
    init: function() {
      const type = this.data.type
      if (type === 'code') {
        // 如果是验证码类型
        this.setData(
          {
            max: 60,
            count: 60,
            timing: false,
            normalText: '获取验证码',
            timingText: '60秒后重发'
          },
          () => {
            console.log('初始化 验证码 button')
          }
        )
      }
    },
    timer: null,
    timerStart: function() {
      this.setData(
        {
          timing: true
        },
        () => {
          this.timerWorking()
        }
      )
    },
    timerWorking: function() {
      this.timer = setTimeout(() => {
        let count = this.data.count
        const max = this.data.max
        let timing = true
        let timingText
        count--
        if (count <= 0) {
          count = max
          timing = false
          timingText = `${max}秒后重发`
          this.timerCancel()
          this.setData({
            count: count,
            timing: timing,
            timingText: timingText
          })
        } else {
          timingText = `${count}秒后重发`
          this.setData(
            {
              count: count,
              timing: timing,
              timingText: timingText
            },
            () => {
              this.timerWorking()
            }
          )
        }
      }, 1000)
    },
    timerCancel: function() {
      clearTimeout(this.timer)
    }
  }
})
