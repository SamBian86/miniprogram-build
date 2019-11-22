const commonBehavior = require('./commonBehavior')
module.exports = Behavior({
  behaviors: [commonBehavior],
  properties: {
    type: {
      type: String,
      value: 'service'
    },
    items: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: ''
    },
    tips: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'aspectFill'
    },
    itemKey: {
      type: String,
      value: ''
    },
    lazyLoad: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    tapEvent: function(e) {
      const id = this.getCurrentTarget(e, 'dataset')['id']
      this.triggerEvent('tapevent', {
        id: id
      })
    }
  }
})
