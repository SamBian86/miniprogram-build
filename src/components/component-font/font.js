// components/component-font/font.js
const fontBehavior = require('../../behaviors/fontBehavior')
Component({
  behaviors: [fontBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
