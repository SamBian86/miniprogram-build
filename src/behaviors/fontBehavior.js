const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {},
  data: {
    fontIndex: 2
  },
  methods: {
    touchStart: function(e) {
      // console.log('touchStart')
      // const touches = e.touches[0]
    },
    touchMove: function(e) {
      const { fontIndex } = this.data
      const windowWidth = this.getSystemInfoSync().windowWidth
      const touches = e.changedTouches[0]
      const endPageX = touches['pageX']
      const minWidth = (60 * windowWidth) / 375
      const perWidth = (windowWidth - 2 * minWidth) / 5
      const _fontIndex = Math.round(endPageX / perWidth) - 1
      if (fontIndex !== _fontIndex) {
        this.triggerEvent('fontlisten', {
          fontIndex: _fontIndex
        })
        this.setData({
          fontIndex: _fontIndex
        })
      }
    },
    touchEnd: function(e) {}
  }
})
