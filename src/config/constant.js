/* 
常量配置
*/

module.exports = {
    // 密码加密 秘钥
    PASSWORD_SECRET: 'jasonlys',
    // jwt 秘钥
    JWT_SECRET: 'secret_for-json#web$token',
    // jwt 可忽略的 path ： 全部忽略即可，需要登录验证的，自己用loginCheck
    JWT_IGNORE_PATH: [/\//],
    // 查询表，默认分页配置
    DEFAULT_PAGE_SIZE: 8,
}
