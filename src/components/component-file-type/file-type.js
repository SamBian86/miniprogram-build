// components/component-file-type/file-type.js
const fileTypeBehavior = require('../../behaviors/fileTypeBehavior')
const formBehavior = require('../../behaviors/formBehavior')
Component({
  behaviors: [formBehavior, fileTypeBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
