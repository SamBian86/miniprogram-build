// components/auth-group/auth-register/auth-register.js
const inputBehavior = require('../../../behaviors/inputBehavior')
Component({
  behaviors: [inputBehavior],
  /**
   * 组件的方法列表
   */
  methods: {
    goBack: function() {
      this.navigateBack({
        delta: 1
      })
    },
    tapEvent: function() {
      const mobile = this.data.form.mobile
      const password = this.data.form.password
      // const repassword = this.data.form.repassword
      const vCode = this.data.form.vcode

      if (mobile.length !== 11) {
        this.showToast({
          title: '请输入正确手机号',
          icon: 'none',
          duration: 1000
        })
        return false
      }

      if (vCode === '') {
        this.showToast({
          title: '请输入验证码',
          icon: 'none',
          duration: 1000
        })
        return false
      }

      if (password === '') {
        this.showToast({
          title: '请输入密码',
          icon: 'none',
          duration: 1000
        })
        return false
      }

      // if (password !== repassword) {
      //   this.showToast({
      //     title: '密码不一致',
      //     icon: 'none',
      //     duration: 1000
      //   })
      //   return false
      // }
      this.httpPostJson({
        url: this.data.api.register,
        data: {
          phoneNumber: mobile,
          vCode,
          password
        }
      })
        .then(res => {
          // console.log(res)
          this.showToast({
            title: '注册成功',
            icon: 'none',
            duration: 1000
          })
          setTimeout(() => {
            this.navigateBack({
              delta: 1
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
    togglePassType() {
      this.setData({
        passType: !this.data.passType
      })
    },
    goPrivacy: function() {
      this.navigateTo({ url: '/pages/privacy/index' })
    }
  }
})
