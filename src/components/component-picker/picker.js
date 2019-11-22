// components/component-picker/picker.js
const pickerBehavior = require('../../behaviors/pickerBehavior')
Component({
  behaviors: [pickerBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
