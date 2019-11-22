// components/component-mask/mask.js
const maskBehavior = require('../../behaviors/maskBehavior')
Component({
  behaviors: [maskBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
