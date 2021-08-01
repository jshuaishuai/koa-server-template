const router = require('koa-router')()
const envConfig = require('../utils/env')
const packageInfo = require('../../package.json')
const testMysqlConnection = require('../db/mysql2')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
    })
})

router.get('/api/db-check', async ctx => {
    const mysqlRes = await testMysqlConnection()

    ctx.body = {
        errno: 0,
        data: {
            name: 'koa server',
            version: packageInfo.version,
            ENV: envConfig.ENV,
            mysqlConn: mysqlRes,
        },
    }
})

module.exports = router
