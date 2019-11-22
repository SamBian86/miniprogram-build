// components/component-touch/touch.js
const touchBehavior = require('../../behaviors/touchBehavior')
Component({
  behaviors: [touchBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
