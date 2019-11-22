// components/component-tab/tab.js
const tabBehavior = require('../../behaviors/tabBehavior')
Component({
  behaviors: [tabBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
