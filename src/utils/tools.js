// testSize
// const testSize = size => {
//   return /(small|big)/g.test(size)
// }

module.exports = {
  // testSize
  dateFormat: function(fmt, time) {
    // 'yyyy-MM-dd HH:mm:ss'
    let date
    if (typeof time === 'undefined') {
      date = new Date()
    } else if (typeof time === 'object') {
      date = time
    } else {
      if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
        time = parseInt(time)
      }
      if (typeof time === 'number' && time.toString().length === 10) {
        time = time * 1000
      }
      date = new Date(time)
    }

    var o = {
      'y+': date.getFullYear(),
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'H+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      a: date.getDay() // 星期
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
  futureTime: function(time, dayNum) {
    const date = new Date(this.dateFormat('yyyy/MM/dd', time))
    date.setDate(date.getDate() + dayNum)
    return date
  },
  getRandom: function() {
    const t = new Date().getTime()
    return `store_${t}`
  },
  stringReplaceByReg: function(str, substr, replacement) {
    const reg = new RegExp(substr, 'g')
    return str.replace(reg, replacement)
  },
  transIDCard15to18: function(code) {
    const lastNumArr = '10X98765432'
    const co = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const num17 = code.substring(0, 6) + '19' + code.substring(6)
    const num17_arr = num17.split('')
    let total = 0
    num17_arr.forEach((item, index) => {
      total += num17_arr[index] * co[index]
    })
    const lastNum = lastNumArr[total % 11]
    num17_arr.push(lastNum)
    const num18 = code.length === 15 ? num17_arr.join('') : code
    const year = num18.substring(6, 10)
    const month = num18.substring(10, 12)
    const day = num18.substring(12, 14)
    const sex = num18.substring(16, 17) % 2
    const sexName = num18.substring(16, 17) % 2 === 1 ? '男' : '女'
    return {
      num18,
      year,
      month,
      day,
      sex,
      sexName
    }
  }
}
