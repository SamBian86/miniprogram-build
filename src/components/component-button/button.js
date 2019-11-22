// components/component-button/button.js
const buttonBehavior = require('../../behaviors/buttonBehavior')
Component({
  behaviors: [buttonBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取验证码
    getCode: function() {
      const type = this.data.smsType
      const mobile = this.data.mobile
      if (this.data.mobile.length !== 11) {
        this.showToast({
          title: '请输入正确手机号',
          icon: 'none',
          duration: 1000
        })
        return false
      }
      if (!this.data.timing) {
        this.httpGet({
          url: `${this.data.api.sms}/${type}/${mobile}`
        })
          .then(res => {
            this.timerStart()
            this.showLoading({
              title: '已发送验证码',
              duration: 1000
            })
          })
          .catch(res => {
            this.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1000
            })
          })
      } else {
        console.log('验证码尚未过期 无法重新发送')
      }
    }
  }
})
