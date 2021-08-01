module.exports = {
    // mysql 链接配置
    mysqlConf: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'koa2_weibo_db',
    },
    // redis 链接配置
    redisConf: {
        port: '6379',
        host: 'localhost',
    },
    // mongodb 连接配置
    mongodbConf: {
        host: 'localhost',
        port: '27017',
        dbName: 'testdb',
    },
    // cors origin
    corsOrigin: '*',
}
