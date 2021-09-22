const nodemailer=require('nodemailer')

// 创建发送器
const transport = nodemailer.createTransport({
    "host":"smtp.qq.com",
    "port":465,
    "secure":true,

    auth:{  // 发件人邮箱账号密码
        user:'2016754638@qq.com',
        pass:'krotbjnxduuleagj'
    }
})

// 使用发送器发送邮件
transport.sendMail({
    from:'2016754638@qq.com',                       // 发件人
    to:['2765806955@qq.com,3196243779@qq.com'],                       // 收件人
    subject:'验证码',                                // 邮件标题
    html:`                                           
        <a href="http://5gckar.xyz/"> 日本萝莉 </a>
        `,                                           // 超文本内容
    //text:'',                                        // 普通文本内容
},function(err,data){                                  // 回调函数
    if(err) return console.log(err)
    console.log('邮件发送成功',data)
})