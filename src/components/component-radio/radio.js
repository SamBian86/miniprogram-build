// components/component-radio/radio.js
const radioBehavior = require('../../behaviors/radioBehavior')
Component({
  behaviors: [radioBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
