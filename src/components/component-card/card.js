// components/component-card/card.js
const cardBehavior = require('../../behaviors/cardBehavior')
Component({
  behaviors: [cardBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {}
})
