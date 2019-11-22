// components/component-camera/camera.js
const cameraBehavior = require('../../behaviors/cameraBehavior')
const formBehavior = require('../../behaviors/formBehavior')
Component({
  behaviors: [formBehavior, cameraBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
