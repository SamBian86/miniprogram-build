const host = require('./host')
const api = require('./api')
const utils = require('./../utils/api')

const config = {}

// 组装api
config.api = utils.mergeHostApi(host, api)

module.exports = config
