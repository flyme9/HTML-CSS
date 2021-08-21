var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hours = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var week = time.getDay();

var arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
function forgetYear(year) {
    var a = parseInt(year / 1000);
    var b = parseInt(year % 1000 / 100);
    var c = parseInt(year % 100 / 10);
    var d = parseInt(year % 10);
    return arr[a] + arr[b] + arr[c] + arr[d] + '年 '
}

function forgetNum(num) {
    var a = parseInt(num / 10);
    var b = num % 10;
    if (num <= 10) {
        return arr[num]
    }
    else if (num < 20) {
        return '十' + arr[b]
    }
    else if (num % 10 === 0) {
        return arr[a] + '十'
    }
    else {
        return arr[a] + '十' + arr[b]
    }
}

var str = forgetYear(year) + forgetNum(month + 1) + '月 ' + forgetNum(date) + '日 ' + forgetNum(hours) + '点 ' + forgetNum(min) + '分 ' + forgetNum(sec) + '秒 ' + '星期';
if (week !== 0) {
    str += (forgetNum(week))
} else {
    str += '日'
}
console.log(str);

// function btn() {
//     // window.location.href = 'https://www.baidu.com';
// }

var str=window.location.search;
console.log(parseQueryString(str))
//解析查询字符串
function parseQueryString(str) {
    var obj = {}
    if (str) {
        //将获取到的多个字符串进行分离
        var tmp = str.slice(1).split('&');
        tmp.forEach(function (item) {
            //将每个key 和 value进行分离
            var temp = item.split('=');
            //分离后存入对象中
            obj[temp[0]] = temp[1];
        })
    }
    return obj;
}
window.onload=function(){
    console.log('执行完毕')
}
