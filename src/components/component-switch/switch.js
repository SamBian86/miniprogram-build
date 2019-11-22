// components/component-switch/switch.js
const switchBehavior = require('../../behaviors/switchBehavior')
Component({
  behaviors: [switchBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
