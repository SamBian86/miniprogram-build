const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    type: {
      type: String,
      value: 'columns'
    },
    menus: {
      type: Array,
      value: []
    },
    columns: {
      type: String,
      value: 'three'
    }
  },
  data: {},
  methods: {
    tapEvent: function(e) {
      const url = this.getCurrentTarget(e, 'dataset')['url']
      this.triggerEvent('tapevent', {
        url: url
      })
    }
  }
})
