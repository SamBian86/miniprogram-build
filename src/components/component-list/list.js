// components/component-list/list.js
const listBehavior = require('../../behaviors/listBehavior')
Component({
  behaviors: [listBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
