const colors = {
  failed: `\x1b[31m%s\x1b[39m`, // 失败
  success: `\x1b[32m%s\x1b[39m`, // 成功
  warning: `\x1b[33m%s\x1b[39m`, // 警告
  system: `\x1b[31;7m%s\x1b[39;0m` // 提醒
}

function console_failed(text) {
  console.log(colors.failed, `>>>>>【 ${text} 】<<<<<`)
}

function console_success(text) {
  console.log(colors.success, `> ${text} <`)
}

function console_warning(text) {
  console.log(colors.warning, `>>> ${text} <<<`)
}

function console_system(text) {
  console.log(colors.system, ` ${text} `)
}

module.exports = {
  console: {
    failed: console_failed,
    success: console_success,
    warning: console_warning,
    system: console_system
  },
  appType: {
    wechat: '微信小程序',
    dingTalk: '钉钉小程序',
    alipay: '支付宝小程序'
  }
}