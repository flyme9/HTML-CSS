/**
 * 
 * @param {number} num 
 */
function isPrime(num) {
    var flag = '是质数';
    for (var i = 2; i <= parseInt(num / 2); i++) {
        if (num % i === 0) {
            flag = '不是质数';
            break;
        }
    }
    console.log(num + flag);
}
isPrime(4);

function isLeapYear(start, end) {
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
            document.write(i + '  ');
            count++;
            if (count % 4 === 0) {
                document.write('<br>');
            }
        }
    }
}
// isLeapYear(1000, 2000);

function btn() {
    var fir = first.value - 0;
    var sec = second.value - 0;
    var symbol = type.value;
    var res = null;
    switch (symbol) {
        case '+':
            res = fir + sec;
            break;
        case '-':
            res = fir - sec;
            break;
        case '*':
            res = fir * sec;
            break;
        case '/':
            res = fir / sec;
            break;
    }
    result.value = res;
}

function takeTables() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(j + '*' + i + '=' + i * j + '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
        document.write('<br>');
    }
}
takeTables();

var sum = 0;
var weight;
for (var i = 0; i <= 64; i++) {
    sum += Math.pow(2, i);
    console.log(sum);
}
weight = sum * 0.00001;
document.write(weight + "kg");

var num=0;
function sub(){
    num--;
    console.log(num);
}
function add(){
    num++;
    console.log(num);
}