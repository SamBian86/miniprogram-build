const form = require('../utils/form')

const formMixin = {
  data: {},
  submitWait: false, // true代码表单已经提交
  onLoad: function(options) {
    console.log('formMixin onLoad ')
  },
  submitSafe(fn) {
    const p = new Promise((resolve, reject) => {
      if (this.submitWait) {
        reject('请不要重复提交')
      } else {
        this.submitSafeReset()
        resolve(fn)
      }
    })
    return p
  },
  submitSafeReset() {
    this.submitWait = !this.submitWait
  }
}
Object.keys(form).map(function(item, index) {
  formMixin[item] = form[item]
})
module.exports = formMixin
