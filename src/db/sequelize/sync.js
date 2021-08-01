const path = require('path')
const simpleGit = require('simple-git')
const sequelize = require('./seq')
const { isDev } = require('../../utils/env')

require('require-all')({
    dirname: path.resolve('src', 'models'),
    filter: /\.js$/,
    excludeDirs: /^\.(git|svg)$/,
    recursive: true, // 递归
})

async function syncDb() {
    let needToSyncDb = true
    // 只适用于开发环境
    if (isDev) {
        const git = simpleGit()
        // TODO 获取git status 修改的文件， modified 格式如 【.gitignore package.json】
        const { modified, not_added: nodeAdded, created, deleted, renamed } = await git.status()
        const fileChanged = modified
            .concat(nodeAdded)
            .concat(created)
            .concat(deleted)
            .concat(renamed)

        if (fileChanged.length) {
            // 到此说明git status 有改动

            // 是否改动了 db 相关的文件
            const changeDbFiles = fileChanged.some(f => {
                if (f.indexOf('src/models') === 0) {
                    return true
                }
                if (f.indexOf('src/db/sequelize/seq')) {
                    return true
                }
                return false
            })
            // 没改动db 文件，则不需要同步
            if (!changeDbFiles) {
                needToSyncDb = false
            }
        }
    }

    if (needToSyncDb) {
        await sequelize.sync({ alter: true })
    }
}

module.exports = syncDb
