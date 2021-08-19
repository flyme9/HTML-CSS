function getTimeDifference(time1, time2) {
    var remainTime = Math.round(Math.abs(time1.getTime() - time2.getTime())) / 1000;
    var day = parseInt(remainTime / (60 * 60 * 24));
    var hours = parseInt(remainTime % (60 * 60 * 24) / (60 * 60));
    var min = parseInt(remainTime % (60 * 60) / 60);
    var sec = parseInt(remainTime % 60);
    return {
        day: day,
        hours: hours,
        min: min,
        sec: sec
    }
}
var nowTime = new Date();
var endTime = new Date(2021, 7, 18, 00, 00, 00, 00);
var res = getTimeDifference(nowTime, endTime);
console.log(`距离结束还有 ${res['day']} 天 ${res['hours']} 时 ${res['min']} 分 ${res['sec']} 秒`);


function randomNum(start, end) {
    var arr = [];
    var max = Math.max(start, end);
    var min = Math.min(start, end);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var arr = []
for (var i = 0; i < 1000; i++) {
    arr[arr.length] = randomNum(1, 10)
}
console.log(arr);

function randomColor(type) {
    if (!type) {
        var colorRGB = `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`
        return colorRGB;
    }
    var str = '#'
    for (var j = 0; j < 3; j++) {
        var color = randomNum(0, 255).toString(16);
        if (color.length === 1) {
            color = '0' + color;
        }
        str += color;
    }
    return str;
}
console.log(randomColor(1));

//模拟广告弹窗
setTimeout(function () {
    box.style.display = 'block'
}, 1000 * randomNum(1, 3))
function btn() {
    box.style.display = 'none'
    setTimeout(function () {
        box.style.display = 'block'
    }, 1000 * randomNum(1, 10))
}

function countDown() {
    var cur = new Date();
    var diff = getTimeDifference(cur, target);
    if (diff.day < 10) diff.day = '0' + diff.day
    if (diff.hours < 10) diff.hours = '0' + diff.hours
    if (diff.min < 10) diff.min = '0' + diff.min
    if (diff.sec < 10) diff.sec = '0' + diff.sec
    daybox.innerText = diff.day;
    hoursbox.innerText = diff.hours;
    minbox.innerText = diff.min;
    secbox.innerText = diff.sec;
}
var target = new Date(2021, 7, 16, 12, 05, 00, 00)
var time = setInterval(countDown, 0);


var obj={name:'123'}
var str=JSON.stringify(obj)
console.log(str);
var num=3.00;
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

var number=10;
console.log(number.toString(16));
console.log(number.toString(8));
console.log(number.toString(2));

console.log(parseInt(number.toString(16),16));
console.log(parseInt(number.toString(8),8));
console.log(parseInt(number.toString(2),2));

var time = new Date()
console.log(time)
console.log(time.setHours(5))