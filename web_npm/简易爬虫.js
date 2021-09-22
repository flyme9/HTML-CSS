/*
    https://list.jd.com/list.html?cat=670%2C671%2C672&page=3&s=57&click=0
*/


// 导入 superagent
const superagent = require('superagent')
// 导入 cheerio
const cheerio = require('cheerio')
// 导入 mysql
const mysql=require('mysql')
// 导入 jquery
const jquery=require('jquery')

// 创建连接池
const db=mysql.createPool({
    host: 'localhost',   // 数据库地址
    port: 3306,          // 数据库端口
    user: 'root',        // 数据库用户名
    password: 'root',    // 数据库密码
    database: 'gp20'     // 数据库库名
})

// 使用 superagent 访问页面，获取数据
superagent.get('https://list.jd.com/list.html?cat=670%2C671%2C672&page=3&s=57&click=0', (err, data) => {
    if (err) return console.log(err)
    parsePage(data.text)
})

function parsePage(page) {
    // 使用 cheerio 解析page
    const $=cheerio.load(page)
    $('ul.gl-warp > li').each(function(index,item){
        // 获取内容
        const obj={
            goods_img:$(item).find('.p-img img').prop('src'),
            goods_price:$(item).find('.p-price i').text(),
            goods_title:$(item).find('.p-name em').text(),
            goods_name:$(item).find('.p-name i').text(),
            goods_commit_a:$(item).find('.p-commit a').text(),
            goods_commit_b:$(item).find('.p-commit strong').text(),
            goods_commit_c:$(item).find('.p-commit strong a').text(),
        }
        // 将数据存入数据库
        const sql='INSERT INTO `goods_list` VALUES(null,?,?,?,?,?,?,?)'
        const info=[obj.goods_img,obj.goods_price,obj.goods_title,obj.goods_name,obj.goods_commit_a,obj.goods_commit_b,obj.goods_commit_c]

        db.query(sql,info,(err,data)=>{
            if(err) return console.log(err)
        })
    })
}