function operation(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "erro";
    }
}
alert(operation(1, "+", 5));

function sum(n) {
    var res = 0;
    if (n % 2 == 0) {
        for (var i = 2; i <= n; i += 2) {
            res += 1 / i;
        }
    }
    else {
        for (var i = 1; i <= n; i += 2) {
            res += 1 / i;
        }
    }
    alert(arguments.length);
    return res;
}
alert(sum(3, 9));

console.log(typeof (1));
console.log(typeof ('1'));
console.log(typeof (true));
console.log(typeof (undefined));
console.log(typeof (null));


var n = 20;
if (n > 12) {
    console.log(1);
} else if (n > 15) {
    console.log(2);
} else {
    console.log(3);
}

function dayTheMonth(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('31天');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('30天');
            break;
        case 2:
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                console.log('29天');
                break;
            }
            console.log('28天');
            break;
        default:
            alert("输入月份错误，请输入‘1-12’的值");
    }
}
dayTheMonth(12, 2000);

function week(year, month, day) {
    var sum = 0;
    switch (month) {
        case 12:
            sum += 30;
        case 11:
            sum += 31;
        case 10:
            sum += 30;
        case 9:
            sum += 31;
        case 8:
            sum += 31;
        case 7:
            sum += 30;
        case 6:
            sum += 31;
        case 5:
            sum += 30;
        case 4:
            sum += 31;
        case 3:
            sum += 28;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                sum += 1;
            }
        case 2:
            sum += 31;
        case 1:
            sum += day;
    }
    var week = parseInt(sum / 7) + 1;
    alert('当前为第' + sum + '天，' + '第' + week + '周');
}
week(2000, 2, 29);

function factorial(n) {
    var sum = 1;
    while (n >= 1) {
        sum *= n;
        n--;
    }
    console.log(sum);
}
factorial(5);

function timeConversion(time) {
    var day = parseInt(time / (60 * 60 * 24));
    var hours = parseInt(time % (60 * 60 * 24) / (60 * 60));
    var min = parseInt(time % (60 * 60) / 60);
    var mec = time % 60;
    alert(day + '天' + hours + '小时' + min + '分钟' + mec + '秒')
}
timeConversion(1234657);

function narcissistic() {
    var onesPlace = 0;
    var tensPlace = 0;
    var hundredsPlace = 0;
    document.write('水仙花数有：');
    for (var i = 100; i < 1000; i++) {
        onesPlace = i % 10;
        tensPlace = parseInt((i % 100) / 10);
        hundredsPlace = parseInt(i / 100);

        if (onesPlace ** 3 + tensPlace ** 3 + hundredsPlace ** 3 === i) {
            document.write('&nbsp;' + i);
        }
    }
}
narcissistic();

function PrintTriangle(row) {
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= i; j++) {
            document.write('* ');
        }
        document.write('<br>');
    }
    document.write('<br>');
    for (var i = 1; i <= row; i++) {
        for (var j = i; j <= row; j++) {
            document.write('* ');
        }
        document.write('<br>');
    }
    document.write('<br>');
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j < i; j++) {
            document.write('&nbsp;&nbsp;');
        }
        for (var k = i; k <= row; k++) {
            document.write('*&nbsp;');
        }
        document.write('<br>');
    }
    document.write('<br>');
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= row - i; j++) {
            document.write('&nbsp;&nbsp;');
        }
        for (var k = 1; k < i; k++) {
            document.write('*&nbsp;');
        }
        document.write('<br>');
    }
    document.write('<br>');
    for (var i = 1; i <= row; i++) {
        if (i % 2 == 0) {
            for (var j = i; j <= row; j++) {
                document.write('&nbsp;&nbsp;');
            }
            for (var k = 1; k < i; k++) {
                document.write(' * ');
            }
            document.write('<br>');
        }
    }
}
PrintTriangle(10);

function maxDivisor(m, n) {
    var res = m > n ? n : m;
    for (var i = res; i > 0; i--) {
        if (n % i === 0 && m % i === 0) {
            console.log('最大公约数为：' + i);
            break;
        }
    }

    // 辗转相除法
    var max = m > n ? m : n;
    var min = m > n ? n : m;
    while (max % min !== 0) {
        var tmp = max % min;
        max = min;
        min = tmp;
    }
    console.log('最大公约数为：' + min);
}
maxDivisor(100, 50);

function minMultiple(m, n) {
    var max = m > n ? m : n;
    var tmp = max;
    while (true) {
        if (max % n === 0 && max % m === 0) {
            break;
        }
        max += tmp;
    }
    console.log('最小公倍数为：' + max);

    var max = m > n ? m : n;
    var tmp = max;
    while (max % m !== 0 || max % n !== 0) {
        max += tmp;
    }
    console.log('最小公倍数为：' + max);
}
minMultiple(6, 7);