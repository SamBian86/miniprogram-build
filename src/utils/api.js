// 组装api
const mergeHostApi = (host, api) => {
  const keys = Object.keys(api)
  keys.map((item, key) => {
    api[item] = `${host}${api[item]}`
  })
  return api
}

module.exports = {
  mergeHostApi
}
