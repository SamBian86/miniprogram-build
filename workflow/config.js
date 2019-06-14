const commonConfig = {
  gulpRoot: './', // gulp构建根目录
  markdownWatch: './src/**/*.js', // markdown监听js改动生成
  dist: './dist', // 打包目录
  distCss: './dist/**/*.css', // 打包目录中的css文件
  json: './src/**/{*,*.*}.json', // json文件
  style: './src/**/*.wxss', // 样式文件
  script: './src/**/*.js', // javscript文件
  image: './src/**/*.{png,jpg,svg,gif}'
}

const wechatConfig = {
  template: './src/**/*.wxml', // 匹配页面文件
  templateName: 'wxml', // 页面格式
  style: './src/**/*.wxss', // 样式文件
  cssName: '.wxss'
}

const dingTalkConfig = {
}

const alipayConfig = {
}

const mergeObj = [commonConfig, wechatConfig, alipayConfig];
mergeObj.map(item => {
  Object.assign(item, commonConfig);
})

module.exports = {
  wechat: wechatConfig,
  dingTalk: dingTalkConfig,
  alipay: alipayConfig
}