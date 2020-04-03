const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {},
  data: {},
  methods: {
    touchStart: function(e) {
      const touches = e.touches[0]
      this.startPageX = touches['pageX']
      this.startPageY = touches['pageY']
    },
    touchMove: function(e) {},
    touchEnd: function(e) {
      const touches = e.changedTouches[0]
      this.endPageX = touches['pageX']
      this.endPageY = touches['pageY']
      const moveY = Math.abs(this.endPageY - this.startPageY)
      const moveX = Math.abs(this.endPageX - this.startPageX)
      // console.log(this.endPageX - this.startPageX)
      // console.log(moveY)
      if (this.endPageX - this.startPageX > 100 && moveY < 50) {
        this.triggerEvent('touchlisten', {
          horizontal: 'right'
        })
      }

      if (this.endPageX - this.startPageX < -100 && moveY < 50) {
        this.triggerEvent('touchlisten', {
          horizontal: 'left'
        })
      }

      if (this.endPageY - this.startPageY > 30 && moveX < 50) {
        this.triggerEvent('touchlisten', {
          vertical: 'down'
        })
      }

      if (this.endPageY - this.startPageY < -30 && moveX < 50) {
        this.triggerEvent('touchlisten', {
          vertical: 'up'
        })
      }
    }
  }
})
