const { Sequelize } = require('sequelize')
const { isProd, isTest } = require('../../utils/env')
const { mysqlConf } = require('../../config')

const conf = {
    host: 'localhost',
    dialect: 'mysql',
}

const { database, user, password } = mysqlConf
const sequelize = new Sequelize(database, user, password, conf)
if (isTest) {
    conf.logging = () => {}
}

// 线上环境，使用连接池
if (isProd) {
    conf.pool = {
        max: 5, // 连接池中最大的连接数量
        min: 0, // 最小
        idle: 10000, // 如果一个连接池 10 s 之内没有被使用，则释放
    }
}

// 测试链接

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log("ok");
//     })
//     .catch(() => {
//         console.log("error");
//     });

module.exports = sequelize
