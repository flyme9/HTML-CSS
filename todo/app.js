// var list = [
//     {
//         id: 1,
//         content: "吃饭",
//         isFinish: false,
//         isEdit: false,
//     },
//     {
//         id: 2,
//         content: "睡觉",
//         isFinish: false,
//         isEdit: false,
//     },
//     {
//         id: 3,
//         content: "打豆豆",
//         isFinish: false,
//         isEdit: false,
//     },
// ];
//判断当前状态
var type = "all";
//添加内容的区域
var container = document.querySelector(".todoapp");

var list = JSON.parse(window.localStorage.getItem('todos')) || []

// 页面渲染函数
function bidHtml() {
    //渲染数组
    var bindList = list;

    //根据 type 决定数组显示内容
    switch (type) {
        case "all":
            bindList = list;
            break;
        case "active":
            bindList = list.filter(function (t) {
                return !t.isFinish;
            });
            break;
        case "completed":
            bindList = list.filter(function (t) {
                return t.isFinish;
            });
            break;
    }

    //计算数据
    /*计算未选中的数量*/
    var activeNum = list.filter(function (t) {
        return !t.isFinish;
    }).length;
    //使用模板引擎
    container.innerHTML = template("tmp", {
        bindList: bindList,
        activeNum: activeNum,
        length: list.length,
        type: type,
    });
    window.localStorage.setItem('todos', JSON.stringify(list))
}
bidHtml();

// 改变显示状态
window.addEventListener("hashchange", function () {
    //获取 hash值
    type = window.location.hash.slice(2) || "all";
    bidHtml();
});
// 通过事件委托添加 todo
container.addEventListener("keydown", function (event) {
    //事件对象
    event = event || window.event;
    //事件目标
    var target = event.target || event.srcElement;
    //键盘编码
    var code = event.keyCode || event.which;
    //按下回车 添加一条数据
    if (target.className === "new-todo" && code === 13) {
        //添加todo
        //非空验证
        var text = target.value.trim();
        if (text === "") return;
        //添加到数组内
        list.push({
            id: list.length ? list.length + 1 : 1,
            content: text,
            isFinish: false,
            isEdit: false,
        });
        bidHtml();
    }
    //按下回车 确定编辑
    if (target.className === 'edit' && code === 13) {
        //获取文本框内容
        var text = target.value.trim()
        var id = target.dataset.id - 0
        if (!text) {
            //内容为空，删除
            list = list.filter(function (t) { return t.id !== id })
        }
        else {
            //内容不为空，修改
            var todo = list.find(function (t) {
                return t.id === id;
            });
            todo.content = text
            todo.isEdit = false
        }
        bidHtml();
    }
    //按下 esc 取消编辑
    if (target.className === 'edit' && code === 27) {
        var id = target.dataset.id - 0
        var todo = list.find(function (t) {
            return t.id === id;
        });
        todo.isEdit = false
        bidHtml();
    }
});


// 通过事件委托 出现点击事件
container.addEventListener("click", function (event) {
    //事件对象
    event = event || window.event;
    //事件目标
    var target = event.target || event.srcElement;

    //判断点击的是哪一个选项按钮
    if (target.className === "toggle") {
        var id = target.dataset.id - 0;
        var todo = list.find(function (t) {
            return t.id === id;
        });
        todo.isFinish = !todo.isFinish;
        bidHtml();
    }

    //删除一条数据
    if (target.className === 'destroy') {
        var id = target.dataset.id - 0;
        list = list.filter(function (t) { return t.id !== id })
        bidHtml();
    }
    //清除按钮
    if (target.className === 'clear-completed') {
        list = list.filter(function (t) { return !t.isFinish })
        bidHtml();
    }
    //全选按钮
    if (target.className === 'toggle-all') {
        list.forEach(function (t) { t.isFinish = target.checked })
        bidHtml();
    }
});

// 通过事件委托 出现点击事件
container.addEventListener('dblclick', function (event) {
    //事件对象
    event = event || window.event;
    //事件目标
    var target = event.target || event.srcElement;

    //判断双击的是 哪个 label 标签
    if (target.className === 'todo-item') {
        var id = target.dataset.id - 0;
        list.forEach(function (item) {
            item.isEdit = false
            if (item.id === id) {
                item.isEdit = true
            }
        })

    }
    bidHtml();
})