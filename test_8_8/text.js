// 分支语句
var num = 3;
if (num % 2 == 0) {
    console.log("偶数");
}
else {
    console.log("奇数");
}

var x = 5, y = null;
if (x < 1) {
    y = x;
    console.log(y);
}
else if (x >= 1 && x < 10) {
    y = 2 * x + 1;
    console.log(y);
}
else {
    y = 5 * x - 17;
    console.log(y);
}

var score = 95;
if (score > 85) {
    console.log("优秀");
    if (score > 95 && score <= 100) {
        alert("获得 1000 奖学金");
    }
    else if (score > 90 && score <= 95) {
        alert("获得 650 奖学金");
    }
    else {
        alert("获得 300 奖学金");
    }
}
else if (score >= 75 && score <= 85) {
    console.log("良好");
}
else if (score >= 60 && score < 75) {
    console.log("及格");
}
else {
    console.log("不及格" );
}


var grade = "A";
switch (grade) {
    case "A":
        alert("80-100");
        break;
    case "B":
        alert("70~79");
        break;
    case "C":
        alert("60~69");
        break;
    case "D":
        alert("<60");
        break;
    default:
        alert("不符合规范");
        break;
}


var month = 4, year = 2004;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("31天");
        break;
    case 2:
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            alert("29天");
        }
        else {
            alert("28天");
        }
    default:
        alert("30天");
}

// 循环语句
var i = 10;
while (i--) {
    document.write("hello<br>");
}
for (var i = 0; i < 10; i++) {
    document.write("hello<br>");
}

var sum = 0, x = 1;
while (x <= 100) {
    sum += x;
    x++;
}
console.log(sum);

var i = 1;
var sum = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        sum -= 1 / i;
    }
    else (
        sum += 1 / i
    )
    i++;
}
document.write(sum + "<br>");

var year = 1000;
var cont = 0;
while(year <= 2000){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        document.write("闰年：" + year +"&nbsp;&nbsp;");
        cont++;
        if(cont == 4){
            document.write("<br>");
            cont=0;
        }
    }
    year++;
}

var year = 1000;
var cont = 0;
do{
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        document.write("闰年：" + year +"&nbsp;&nbsp;");
        cont++;
        if(cont == 4){
            document.write("<br>");
            cont=0;
        }
    }
    year++;
}while(year <= 2000);

cont = 0;
for(var year = 1000; year <= 2000; year++){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        document.write("闰年：" + year +"&nbsp;&nbsp;");
        cont++;
        if(cont == 4){
            document.write("<br>");
            cont=0;
        }
    }
}


for (var x = 1; x <= 5; x++) {
    for (var y = 1; y <= x; y++) {
        document.write("⚪")
    }
    document.write("<br>")
}


for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(j + "*" + i + "=" + (i * j) + "&nbsp;");
    }
    document.write("<br>")
}

for (var i = 1; i <= 5; i++) {
    for (var x = 1; x <= 5 - i; x++) {
        document.write("😊");
    }
    for (var y = 1; y <= i; y++) {
        document.write("⚪");
    }
    document.write("<br>");
}

var water = 15;
var count = 0;
while (water < 50) {
    water += 5;
    count++;
}
document.write(count + "<br>");

var num = 7;
var isYes = false;
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isYes = true;
        break;
    }
}
if (isYes) {
    document.write(num + "是一个合数<br>");
}
else {
    document.write(num + "是一个质数<br>");
}

var num = 1, sum = 0;
for (var i = 0; i < 64; i++) {
    sum += num;
    num *= 2;
}
document.write(sum + "<br>");

for (var i = 100; i < 1000; i++) {
    var a = i % 10;
    var b = parseInt(i / 10) % 10;
    var c = parseInt(i / 100);

    var sum = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    if (sum == i) {
        document.write(i + "<br>");
    }
}

var num_1 = 13, num_2 = 6;
var min = num_1 > num_2 ? num_2 : num_1;
var max = num_1 > num_2 ? num_1 : num_2;
while (1) {
    if (num_1 % min == 0 && num_2 % min == 0) {
        break;
    }
    min--;
}
while (1) {
    if (max % num_1 == 0 && max % num_2 == 0) {
        break;
    }
    max++;
}
document.write("最大公约数为：" + min + "<br>" + "最小公倍数为：" + max + "<br>");

var n = 3, a = 3, tmp = a, sum = 0;
for (var i = 0; i < n; i++) {
    sum += tmp;
    tmp = tmp * 10 + a;
}
document.write(sum + "<br>");

var count = 0;
for (var i = 10000; i < 100000; i++) {
    var a = i % 10;
    var b = parseInt(i / 10) % 10;
    var c = parseInt(i / 1000) % 10;
    var d = parseInt(i / 10000);
    if (a == d && b == c) {
        document.write(i + "&nbsp");
        count++;
    }
    if (count == 4) {
        document.write("<br>");
        count = 0;
    }
}

var year = 2004, month = 2, date = 8, sum = 0;
switch (month) {
    case 12:
        sum += 31;
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 30;
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            sum += 1;
        }
    case 2:
        sum += 30;
    case 1:
        sum += date;
        break;
    default:
        alert("erro");
}
var week = Math.ceil(sum / 7);
//向上取整，当后面有小数点时，自动+1

document.write("当前为：" + year + "年，第" + sum + "天，第" + week + "周")