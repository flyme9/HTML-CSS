// 导入 http 模块
const http=require('http')
// 导入 fs 模块
const fs=require('fs')

// 创建服务
const server =http.createServer(function(req,res){
    // 获取到 req 中的url信息
    const {url}=req
    // console.log(url)

    // 条件判断页面 url 
    // if(url.endsWith('.html')){
    //     fs.readFile('./views'+url,(err,data)=>{
    //         // 出错
    //         if(err) return console.log(err)
    //         // 返回页面
    //         res.end(data)
    //     })
    // }
    // if(url.endsWith('.js')){
    //     fs.readFile('./js'+url,(err,data)=>{
    //         // 出错
    //         if(err) return console.log(err)
    //         // 返回页面
    //         res.end(data)
    //     })
    // }

    const reg = /^\/\w+\.(html|css|js)$/
    const result=reg.exec(url)
    if(result){
        // console.log(result)
        fs.readFile('./'+result[1]+result[0],(err,data)=>{
            if(err) return console.log(err)
            res.end(data)
        })
    }else{
        res.end(
            `
                <h1>404</h1>
                <p>网页走丢啦</p>
            `
        )
    }
})

// 监听端口
server.listen(8080,()=>console.log('server running at port 8080 ! ^_^ '))