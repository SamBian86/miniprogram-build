// components/component-pull/pull.js
const pullBehavior = require('../../behaviors/pullBehavior')
Component({
  behaviors: [pullBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
