// components/component-input-number/input-number.js
const inputNumberBehavior = require('../../behaviors/inputNumberBehavior')
Component({
  behaviors: [inputNumberBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
