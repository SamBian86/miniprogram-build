const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    type: {
      type: String,
      value: 'normal'
    },
    items: {
      type: Array,
      value: []
    },
    selected: {
      type: Number,
      value: -1
    },
    focusColor: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    init: function(selected) {
      this.setData({
        selected: selected
      })
    },
    // 触发点击事件
    tapEvent: function(e) {
      const old_selected = this.data.selected
      const selected = this.getCurrentTarget(e, 'dataset')['selected']

      if (old_selected !== selected) {
        this.setData({
          selected: selected
        })
        this.triggerEvent('tapevent', e)
      }
    }
  }
})
