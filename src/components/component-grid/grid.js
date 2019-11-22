// components/component-grid/grid.js
const gridBehavior = require('../../behaviors/gridBehavior')
Component({
  behaviors: [gridBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
