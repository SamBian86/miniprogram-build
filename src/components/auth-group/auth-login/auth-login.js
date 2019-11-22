// components/auth-group/auth-login/auth-login.js
const inputBehavior = require('../../../behaviors/inputBehavior')
const app = getApp()
Component({
  behaviors: [inputBehavior],
  /**
   * 组件的方法列表
   */
  data: {
    appName: app.globalData.config.appName,
    showAuthBox: false
  },
  methods: {
    goRegister() {
      this.navigateTo({ url: '/pages/register/index' })
    },
    goForget() {
      this.navigateTo({ url: '/pages/forget/index' })
    },
    cancelAuth() {
      const { showAuthBox } = this.data
      if (showAuthBox) {
        this.setData({
          showAuthBox: !showAuthBox
        })
      }
    },
    handleGetUserInfo() {
      let loginSuccess = false
      this.login()
        .then(res => {
          const code = res.code
          if (code) {
            return this.httpGet({
              url: this.data.api.loginWechat,
              data: {
                code
              }
            })
          }
        })
        .then(res => {
          const { openid } = res.data.results
          return this.httpPostJson({
            url: this.data.api.validWechat,
            data: {
              openId: openid
            }
          })
        })
        .then(res => {
          loginSuccess = true
          this.setStorageSync('userInfo', res.data.results)
          this.setStorageSync('token', res.data.results.token)
          this.showToast({
            title: '登录成功',
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
          console.log('尚未绑定进行授权')
          this.getUserInfo()
            .then(res => {
              console.log('授权成功')
              const userInfo = res.userInfo
              if (!loginSuccess) {
                this.setStorageSync('wechatUserInfo', userInfo)
                this.navigateTo({ url: '/pages/wechat/index' })
              }
            })
            .catch(res => {
              console.log('拒绝授权')
            })
        })
    },
    goWechatLogin() {},
    tapEvent() {
      const { mobile, password, vcode } = this.data.form
      const { loginType } = this.data
      if (mobile.length !== 11) {
        this.showToast({
          title: '请输入正确手机号',
          icon: 'none',
          duration: 1000
        })
        return false
      }

      if (!loginType) {
        if (password === '') {
          this.showToast({
            title: '请输入密码',
            icon: 'none',
            duration: 1000
          })
          return false
        }
      } else {
        if (vcode === '') {
          this.showToast({
            title: '请输入验证码',
            icon: 'none',
            duration: 1000
          })
          return false
        }
      }

      if (!loginType) {
        this.httpPostJson({
          url: this.data.api.login,
          data: {
            mobile,
            password
            // deviceType: 3
          }
        })
          .then(res => {
            this.setStorageSync('userInfo', res.data.results)
            this.setStorageSync('token', res.data.results.token)
            this.showToast({
              title: '登录成功',
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
        // console.log('账号密码登录')
      } else {
        this.httpPostJson({
          url: this.data.api.vcodeLogin,
          data: {
            mobile,
            vcode
            // deviceType: 3
          }
        })
          .then(res => {
            this.setStorageSync('userInfo', res.data.results)
            this.setStorageSync('token', res.data.results.token)
            this.showToast({
              title: '登录成功',
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
        // console.log('验证码登录')
      }
    },
    watchMobile(e) {
      const mobile = this.getEventDetail(this.getEventDetail(e))['value']
      this.setData({
        mobileClean: mobile !== '' ? true : false
      })
    },
    cleanMobile() {
      this.setData({
        'form.mobile': '',
        mobileClean: false
      })
    },
    togglePassType() {
      this.setData({
        passType: !this.data.passType
      })
    },
    toggleLoginType() {
      this.setData({
        loginType: !this.data.loginType
      })
    }
  }
})
