// components/component-score/score.js
const scoreBehavior = require('../../behaviors/scoreBehavior')
Component({
  behaviors: [scoreBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
