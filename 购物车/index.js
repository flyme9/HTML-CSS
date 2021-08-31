//模拟数据
var list = [
    {
    cartNumber: 1,
    list_id: 1,
    list_name: `商品`,
    list_price: 100 ,
    list_url: 'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/194722/8/2466/52319/609a4a21E2b5ea967/bc8dee8c1dab550e.jpg.webp',
    isSelect: false,
    number: 10
    },
    {
    cartNumber: 1,
    list_id: 2,
    list_name: `商品`,
    list_price: 100 ,
    list_url: 'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/194722/8/2466/52319/609a4a21E2b5ea967/bc8dee8c1dab550e.jpg.webp',
    isSelect: false,
    number: 10
    },
    {
    cartNumber: 1,
    list_id: 3,
    list_name: `商品`,
    list_price: 100 ,
    list_url: 'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/194722/8/2466/52319/609a4a21E2b5ea967/bc8dee8c1dab550e.jpg.webp',
    isSelect: false,
    number: 10
    },
]


/* 获取缓存数据 */
// var list = JSON.parse(window.localStorage.getItem('cart')) || []
console.log(list)
//获取元素
var box = document.querySelector('.box')
var total = 0; //总件数
var totalPrice = 0; //总价
//渲染页面的函数
bindHtml()

function bindHtml() {
    total = 0; //总件数
    totalPrice = 0; //总价
    //计算总价与总件数
    list.forEach(function (item) {
        if (item.isSelect === true) {
            total += item.cartNumber;
            totalPrice += item.cartNumber * item.list_price;

        }
    })
    //判断全选按钮是否选中
    var selectAll = list.every(function (item) {
        return item.isSelect
    })

    //使用 template 方法进行渲染页面
    box.innerHTML = template('tmp', {
        list: list,
        total: total,
        totalPrice: totalPrice,
        selectAll: selectAll
    })
    window.localStorage.setItem('list', JSON.stringify(list))
}

//判断点击了哪一个按钮按钮
box.addEventListener('click', function (e) {
    //事件兼容处理
    e = e || window.event;
    //事件兼容处理
    var target = e.target || e.srcElement


    //判断选中按钮
    if (target.className === 'select-item') {
        var id = target.dataset.list_id - 0;
        var goods = list.find(function (item) {
            return item.list_id === id
        })
        goods.isSelect = !goods.isSelect
        bindHtml()
    }
    //减按钮
    if (target.className === 'sub') {
        var id = target.dataset.list_id - 0;
        var goods = list.find(function (item) {
            return item.list_id === id
        })
        if (goods.cartNumber === 1) return
        goods.cartNumber--
        bindHtml()
    }
    //加按钮
    if (target.className === 'add') {
        var id = target.dataset.list_id - 0;
        var goods = list.find(function (item) {
            return item.list_id === id
        })
        if (goods.cartNumber === goods.number) return
        goods.cartNumber++
        bindHtml()
    }
    //删除按钮
    if (target.className === 'del') {
        var id = target.dataset.list_id - 0
        //方法1：
        // var index = list.findIndex(function (item) {
        //     return item.list_id === id
        // })
        // list.splice(index, 1)
        // 方法2：
        list = list.filter(function (item) {
            return item.list_id !== id
        })
        bindHtml()
    }
    //全选按钮
    if (target.className === 'selectAll') {
        list.forEach(function (item) {
            item.isSelect = target.checked
        })
        bindHtml()
    }
    //计算总价
    if (target.className === 'pay') {
        window.location.href = './pay.html?p=' + totalPrice
    }
    //清空购物车
    if (target.className === 'clearAll') {
        list = []
        bindHtml()
    }

})