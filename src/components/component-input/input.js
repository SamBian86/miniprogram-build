// components/component-input/input.js
const inputBehavior = require('../../behaviors/inputBehavior')
Component({
  behaviors: [inputBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
