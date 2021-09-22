// const moment = require('moment')
// moment.locale('zh-cn')
// const time = new Date()

// const res = moment(time).format('MMMM Do YYYY, h:mm:ss a')
// console.log(res)


let username = 'admin'
let password = 'admin'
const mysql = require('mysql')
// 链接数据库
// const db = mysql.createConnection({ // 偏向于单次使用 ->连接 操作 关闭
//     host: 'localhost',   // 数据库地址
//     port: 3306,          // 数据库端口
//     user: 'root',        // 数据库用户名
//     password: 'root',    // 数据库密码
//     database: 'gp20'     // 数据库库名
// })
const db = mysql.createPool({ // 偏向于连接池 ->连接 操作 操作
    host: 'localhost',   // 数据库地址
    port: 3306,          // 数据库端口
    user: 'root',        // 数据库用户名
    password: 'root',    // 数据库密码
    database: 'gp20'     // 数据库库名
})

// 操作数据库的语句
// db.query(`SELECT * FROM \`user\` WhERE \`username\`="${username}" AND \`password\`="${password}"`, (err, info) => {
//     if (err) return console.log(err)
//     console.log(info)
// })
// db.query('SELECT * FROM `user` WhERE `username`=? AND `password`=?',[username,password], (err, info) => {
//     if (err) return console.log(err)
//     console.log(info)
// })