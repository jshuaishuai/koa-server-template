const redis = require('redis')
const { redisConf } = require('../config')

const { port, host, password } = redisConf

const opt = {}

if (password) {
    opt.password = password // prd 环境需要密码
}
const redisClient = redis.createClient(port, host, opt)

redisClient.on('error', function (error) {
    console.error('redis connect error', error)
})

module.exports = redisClient
