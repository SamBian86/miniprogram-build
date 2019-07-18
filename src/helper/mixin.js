// 使微信小程序生命周期支持mixins

const nativePage = Page
Page = options => {
  const mixins = options.mixins
  if (Array.isArray(mixins)) {
    Reflect.deleteProperty(options, 'mixins')
    merge(mixins, options)
  }
  nativePage(options)
}

// 页面生命周期
const properties = [
  'data',
  'onLoad',
  'onReady',
  'onShow',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onPageScroll',
  'onTabItemTap'
]

// 合并mixins属性到Page的options中
function merge(mixins, options) {
  mixins.reverse().forEach((mixin, index) => {
    if (Object.prototype.toString.call(mixin).slice(8, -1) === 'Object') {
      // debugger
      for (let [key, value] of Object.entries(mixin)) {
        if (key === 'data') {
          options.data = Object.assign({}, value, options.data)
        } else if (properties.includes(key)) {
          let native = options[key]
          options[key] = function(...args) {
            value.call(this, ...args)
            return native && native.call(this, ...args)
          }
        } else {
          let native = options[key]
          if (!native) {
            options[key] = value
          } else {
            options[key] = function(...args) {
              value.call(this, ...args)
              return native && native.call(this, ...args)
            }
          }
        }
      }
    }
  })
}
