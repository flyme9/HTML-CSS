//字符串+任何类型都是字符串拼接
console.log("hello" + NaN);
console.log("hello" + undefined);
console.log("hello" + null);
console.log("hello" + 10);
console.log("hello" + false);
console.log("hello" + true);
//字符串做+以外运算，将字符串转为数字在进行计算
console.log("10" - 10); //字符串为数字，直接转为对应数字
console.log("hel" - 10); //字符串为非数字，与任何数据类型相加都得NaN
//数字与非字符串类型计算
console.log(10 - NaN);
console.log(10 - null);
console.log(10 - undefined);

var money = 10000;
money += money * 0.05 * 50;
console.log(money);

var total = 89;
var day = parseInt(total / 24);
var hours = total % 24;
console.log("一共花了" + day + "天" + hours + "小时");

var Fahrenhite = 80;
var Centigrade = ((Fahrenhite - 32) * 5) / 9.0;
console.log(Centigrade + "°C");

var number = 123;
var a = number % 10; //个位
var b = parseInt(number / 10) % 10; //十位
var c = parseInt(number / 100); //百位
console.log(a, b, c);


// alert(Boolean(null));
// alert(Number(undefined));
alert(parseInt("c10"));
// alert(parseFloat(5.10));

// var str="1100"
// alert(parseInt(str,2));
// str = "12";
// alert(parseInt(str,8));
// str = "A"
// alert(parseInt(str,16));

// alert("abc" > "acb" );
