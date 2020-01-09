// components/component-viewer/viewer.js
const viewerBehavior = require('../../behaviors/viewerBehavior')
Component({
  behaviors: [viewerBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {}
})
