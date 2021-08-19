//数组去重
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
function arrayHeavy(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;//因为删除后数组数据会进行挪动，所以需要索引需要减一
            }
        }
    }
    return arr
}
console.log(arrayHeavy(arr));

function arrHeavy(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        // if(!newArr.includes(arr[i])){
        //如果新数组里没有该数据，则会将数据放入到新数组中
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 10, 1000];
console.log(arrHeavy(arr));

function array_heavy(arr) {
    var obj = {}
    var newArr = []
    //通过对象成员名不重名特性，可快速进行去重
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }
    //将对象成员名添加到新数组中，因为成员名是字符串类型，所以-0将其转为数值类型
    for (var key in obj) {
        newArr.push(key - 0);
    }
    return newArr
}
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 10, 1000];
console.log(array_heavy(arr));

function inset(arr, num) {
    //空数组的情况
    if (!arr.length) {
        arr.push(num);
        return;
    }
    //比第一个小或等于的情况，进行头插
    if (num <= arr[0]) {
        arr.unshift(num);
        return;
    }
    //比最后一个大或等于的情况，进行尾插
    if (num >= arr[arr.length - 1]) {
        arr.push(num);
        return;
    }
    //既不是开头插入，也不是末尾插入
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < num && num <= arr[i + 1]) {
            arr.splice(i + 1, 0, num);
            break;
        }
    }
}
var arr = [10, 20, 23, 24, 29, 30];
inset(arr, 29);
console.log(arr);

var str = 'hello world';
var str1 = new String('`hello`')
console.log(str)
console.log(str1)

//反转字符串
var str = 'abcdef';
var res = str.split('').reverse().join('');
console.log(res);

var str = 'abcdef';
var res = '';
for (var i = str.length - 1; i >= 0; i--) {
    res += str[i]
}
console.log(res);

//关键字隐藏
var str = 'mmsbwany';
while (str.indexOf('mm') !== -1) {
    str = str.replace('mm', '**');
}
console.log(str)

var str = 'mmsbwany';
var res = str.split('mm',).join('**');
console.log(res)

//字符串计数
function countString(str) {
    //利用对象成员名不重复，进行计数
    var obj = {}
    for (var i = 0; i < str.length; i++) {
        var tmp = str[i];
        if (obj[tmp]) {
            obj[tmp]++;
        } else {
            obj[tmp] = 1;
        }
    }
    return obj;
}
//出现次数最多的字符
function maxCountString(str) {
    var obj = countString(str);
    var max = '';
    var maxNum = 0;
    //找到值最大的那个成员名
    for (var key in obj) {
        if (obj[key] > maxNum) {
            maxNum = obj[key];
            max = key;
        }
    }
    return max;
}
//多个出现次数一样的字符
function maxCountSameStr(str) {
    var obj = countString(str);
    var max = '';
    var maxNum = 0;
    //找到值最大的那个成员名
    for (var key in obj) {
        if (obj[key] > maxNum) {
            maxNum = obj[key];
            max = key;
        }
    }
    var maxStr = '';
    for (var key in obj) {
        if (obj[key] === maxNum) {
            maxStr += key;
        }
        if (obj[key] > maxNum) {
            maxStr = key;
        }
    }
    return maxStr;
}
var str = 'abcabcabcabcabcabccbacba';
console.log(maxCountSameStr(str));
console.log(maxCountString(str));
console.log(countString(str));

var userList = [
    { name: 'Jack', age: 18, gender: '男' },
    { name: 'Rose', age: 20, gender: '女' },
    { name: 'Tom', age: 19, gender: '男' },
    { name: 'Tom', age: 19, gender: '男' }
]
var str = `
    <table>
        <thead></thead>
        <tbody>
            <tr>
                <td>序号</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>性别</td>
                <td>操作</td>
            </tr>
        </tbody>
    </table>`
userList.forEach(function (itme, index) {
    str += `
        <tr>
            <td>${index + 1}</td>
            <td>${itme.name}</td>
            <td>${itme.age}</td>
            <td>${itme.gender}</td>
            <td>
                <button>编辑</button>
                <button>删除</button>
            </td>
        </tr>
        <br>
    `
});
document.write(str);