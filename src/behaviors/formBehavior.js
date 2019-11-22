const form = require('../utils/form')

const formBehavior = {
  behaviors: [],
  properties: {
    dName: {
      type: String,
      value: ''
    },
    dValue: {
      type: String,
      value: ''
    }
  },
  data: {},
  lifetimes: {
    attached: function() {
      // console.log('attached')
      if (typeof this.init === 'undefined') {
        console.log('请定义form表单组件相关init方法')
      } else {
        this.init()
      }
    },
    moved: function() {
      // console.log('moved')
    },
    detached: function() {
      // console.log('detached')
    }
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  methods: {}
}
Object.keys(form).map(function(item, index) {
  formBehavior.methods[item] = form[item]
})
module.exports = Behavior(formBehavior)
