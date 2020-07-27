const commonConfig = {
  gulpRoot: './', // gulp构建根目录
  markdownWatch: './src/**/*.js', // markdown监听js改动生成
  dist: './dist', // 打包目录
  distCss: './dist/**/*.css', // 打包目录中的css文件
  json: './src/**/*.json', // json文件
  script: './src/**/*.js', // javscript文件
  image: './src/**/*.{png,jpg,svg,gif}'
}

const wechatConfig = {
  template: './src/**/*.wxml', // 匹配页面文件
  templateName: 'wxml', // 页面格式
  removeBuildCss: ['./dist/**/*.scss.wxss'], // dist目录中对应目录只会有一个与目录名同名的样式，其他样式只是用作使用sass特性
  style: './src/**/*.wxss', // 样式文件
  sss: './src/**/*.wxs', // 小程序特有js文件
  cssName: '.wxss'
}

const dingTalkConfig = {
  template: './src/**/*.axml', // 匹配页面文件
  templateName: 'axml', // 页面格式
  removeBuildCss: ['./dist/**/*.scss.acss'], // dist目录中对应目录只会有一个与目录名同名的样式，其他样式只是用作使用sass特性
  style: './src/**/*.acss', // 样式文件
  sss: './src/**/*.sjs', // 小程序特有js文件
  cssName: '.acss'
}

const alipayConfig = {}

const mergeObj = [wechatConfig, dingTalkConfig, alipayConfig]
mergeObj.map((item) => {
  Object.assign(item, commonConfig)
})

module.exports = {
  wechat: wechatConfig,
  dingTalk: dingTalkConfig,
  alipay: alipayConfig
}
