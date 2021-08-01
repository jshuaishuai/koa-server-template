/* 环境变量 */

const ENV = process.env.NODE_EN || ''

const envConfig = {
    ENV,
    isPrd: ENV === 'production',
    isDev: ENV === 'development',
    isTest: ENV.indexOf('test') === 0,
    isTestLocal: ENV === 'test_local',
    isTestRemote: ENV === 'test_remote',
}
module.exports = envConfig
