// components/component-textarea/textarea.js
const textareaBehavior = require('../../behaviors/textareaBehavior')
Component({
  behaviors: [textareaBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
