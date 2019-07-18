const common = require('../utils/common')

const commonBehavior = {
  behaviors: [],
  properties: {},
  data: {},
  attached: function() {},
  methods: {}
}
Object.keys(common).map(function(item, index) {
  commonBehavior.methods[item] = common[item]
})
module.exports = Behavior(commonBehavior)
