const { Sequelize } = require('sequelize')
const sequelize = require('../db/sequelize/seq')

// 创建 User 模型 数据表的名字是 users

const User = sequelize.define('user', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nickName: {
        type: Sequelize.STRING,
    },
})

// 外键关联

// Blog.belongsTo(User, {
//     // 创建外键 Blog.userId --> User.id
//     foreignKey: 'userId',
// });

// User.hasMany(Blog, {
//     foreignKey: 'userId',
// });

module.export = User
