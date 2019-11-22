// components/auth-group/auth-wechat/auth-wechat.js
const inputBehavior = require('../../../behaviors/inputBehavior')
Component({
  behaviors: [inputBehavior],
  /**
   * 组件的方法列表
   */
  methods: {
    tapEvent: function() {
      const { mobile, vcode } = this.data.form
      const wechatUserInfo = this.getStorageSync('wechatUserInfo') || ''
      const openId = this.getStorageSync('openid') || ''
      let headPhoto, name
      if (wechatUserInfo !== '') {
        name = wechatUserInfo.nickName
        headPhoto = wechatUserInfo.avatarUrl
      }
      if (mobile.length !== 11) {
        this.showToast({
          title: '请输入正确手机号',
          icon: 'none',
          duration: 1000
        })
        return false
      }

      if (vcode === '') {
        this.showToast({
          title: '请输入验证码',
          icon: 'none',
          duration: 1000
        })
        return false
      }

      this.httpPostJson({
        url: this.data.api.bindWechat,
        data: {
          mobile,
          vcode,
          openId,
          name,
          headPhoto
        }
      })
        .then(res => {
          console.log(res)
          this.setStorageSync('userInfo', res.data.results)
          this.setStorageSync('token', res.data.results.token)
          this.showToast({
            title: '绑定成功',
            icon: 'none',
            duration: 1000
          })
          setTimeout(() => {
            this.navigateBack({
              delta: 2
            })
          }, 1000)
        })
        .catch(res => {
          this.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000
          })
        })
    },
    goPrivacy: function() {
      this.navigateTo({ url: '/pages/privacy/index' })
    }
  }
})
