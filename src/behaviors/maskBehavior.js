const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    visiable: {
      type: Boolean,
      value: false
    },
    animateShow: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  lifetimes: {
    attached: function() {
      // console.log('attached')
    },
    moved: function() {
      // console.log('moved')
    },
    detached: function() {
      // console.log('detached')
    }
  },
  methods: {
    init: function() {},
    touchMove: function() {
      return false
    },
    show: function() {
      const that = this
      this.setData(
        {
          visiable: true
        },
        function() {
          setTimeout(function() {
            that.setData({
              animateShow: true
            })
          }, 10)
        }
      )
    },
    hide: function() {
      const that = this
      this.setData(
        {
          animateShow: false
        },
        function() {
          setTimeout(function() {
            that.setData({
              visiable: false
            })
          }, 500)
        }
      )
    }
  }
})
