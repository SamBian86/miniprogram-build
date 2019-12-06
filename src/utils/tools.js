// testSize
// const testSize = size => {
//   return /(small|big)/g.test(size)
// }

module.exports = {
  // testSize
  dateFormat: function(fmt) {
    // 'yyyy-MM-dd HH:mm:ss'
    const date = new Date()
    var o = {
      'y+': date.getFullYear(),
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'H+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds() //秒
    }
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    return fmt
  },
  getRandom: function() {
    const t = new Date().getTime()
    return `store_${t}`
  }
}
