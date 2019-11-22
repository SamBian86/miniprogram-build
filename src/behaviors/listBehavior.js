const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    url: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    arrow: {
      type: Boolean,
      value: false
    },
    last: {
      type: Boolean,
      value: false
    },
    noMar: {
      type: Boolean,
      value: false
    },
    noPad: {
      type: Boolean,
      value: false
    },
    noBord: {
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
    tapEvent: function(e) {
      // console.log(e)
      const url = this.getCurrentTarget(e, 'dataset')['url']
      this.triggerEvent('tapevent', {
        url: url
      })
    }
  }
})
