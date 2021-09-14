(function(window){

    // 获取元素
    const uls=document.querySelectorAll('.content > ul')
    // 定时器返回值
    let timer=0
    // ul 到顶部的高度
    let ulOffsetTop =uls[0].offsetTop
    // 获取屏幕高度
    let windowHeight = document.documentElement.clientHeight
    // 节流开关
    let flag=true

    // 发送请求，获取数据
    let start=0 // 请求从第几条开始
    let isReq=true // 判断是否请求
    getList()
    function getList(){
        ajax({
            url:'/duitang',
            data:{
                include_fields: 'top_comments,is_root,source_link,item,buyable,root_id,status,like_count,sender,album,reply_count',
                filter_id: '手工DIY',
                start,
                _: '1631348262740'
            },
            dataType:'json',
            success(res){
                const {data:{next_start,object_list,more}}=res

                start=next_start
                if(!more) isReq=false

                // 渲染页面
                bindHtml(object_list)
            }
        })
    }
    // 渲染页面
    function bindHtml(list){
        list.forEach(item=>{
            // 使用模板生成html结构
            const itemStr=template('itemTmp',{info:item})
            // 把结构插入到最短的ul中
            minUl().innerHTML+=itemStr
        })
        flag=true
    }

    // 判断最短的ul
    function minUl(){
        let minHeight=uls[0].clientHeight
        let minUl=uls[0]

        uls.forEach(item=>{
            if(item.clientHeight<minHeight){
                minHeight=item.clientHeight
                minUl=it=item
            }
        })
        return minUl
    }
    // 浏览器滚动事件
    window.onscroll=function(){
        // 事件防抖
        clearTimeout(timer)
        timer=setTimeout(() => {
            const scrollTop=document.documentElement.scrollTop||document.body.scrollTop
            const ulHeight=minUl().clientHeight
            if(ulOffsetTop + ulHeight<=scrollTop+windowHeight){
                if(!isReq) return
                if(!flag) return
                flag=false
                getList()
            }
        }, 300);
    }

})(window)