//冒泡排序
var arr = [1, 102, 5, 0, 2, 102, 203, 5, 0, 2, 205, 1, 5, 0, 2];
function bubblSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var falg = 0;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            falg = 1;
        }
        if (falg === 0) {
            break;
        }
    }
}
bubblSort(arr);
console.log(arr);

var arr = [1, 102, 5, 0, 2, 102, 203, 5, 0, 2, 205, 1, 5, 0, 2];
function conutSort(arr) {
    var tmpArr = [];
    //将原数组的数字以索引放到临时数组，临时数组下标为空的表示原数组没有这个数
    for (var i = 0; i < arr.length; i++) {
        if (tmpArr[arr[i]] !== undefined) {
            tmpArr[arr[i]]++;
        }
        else {
            tmpArr[arr[i]] = 1;
        }
    }
    arr.length = 0;
    //遍历临时数组
    for (var j = 0; j < tmpArr.length; j++) {
        //排除下标为空的下标
        if (tmpArr[j] !== undefined) {
            //这个数有多个就循环多少次，将临时数组的
            for (var k = 1; k <= tmpArr[j]; k++) {
                //将临时数组的下标存入原数组
                arr[arr.length] = j;
            }
        }
    }
}
conutSort(arr);
console.log(arr);

//选择排序
var arr = [1, 102, 5, 0, 2, 102, 203, 5, 0];
console.log(arr);
function selectSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i;//小的数字的下标
        for (var j = i + 1; j < arr.length; j++) {
            // 找到小的数字的下标
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        //进行交换
        var tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
}
selectSort(arr);
console.log(arr);

var obj = new Object();
console.log(obj['123'])
obj['age'] = 20;
var o = {
    name: 'jack',
    age: 18
}
console.log(obj);
console.log(o);
function fn() {
    console.log('函数');
}
fn.age = 18;
console.log(fn);

var arr = new Array(10);
console.log(arr);


function has(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}
console.log(has([10, 20, 30], 40));

function map(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 1;
    }
    return newArr;
}
console.log(map([1, 2, 3, 4, 5, 6]));

function evenSum(start, end) {
    var arr = [];
    for (var i = start; i <= end; i += 2) {
        arr[arr.length] = i;
    }
    var newArr = [];
    var sum = 0;
    for (var j = 0; j < arr.length; j++) {
        sum += arr[j];
        if ((j + 1) % 5 === 0) {
            newArr[newArr.length] = sum / 5;
            sum = 0;
        }
    }
    return newArr;
}
console.log(evenSum(2, 60));

var arr = map([5, 6, 3, 1, 2, 3, 5, 9, 8, 7, 2, 0]);

console.table(arr.push(7, 8))
console.table(arr.pop())
console.table(arr.unshift(0))
console.table(arr.shift())
console.table(arr.reverse())
console.table(arr.sort(function (a, b) { return b - a }))
console.table(arr.splice(2, 3))
console.table(arr.concat(123, 123))
console.table(arr.slice(arr, 123))
console.table(arr.join('-'))
console.table(arr.indexOf(3))
console.table(arr.lastIndexOf(6))
console.table(arr.copyWithin(0, 1, 2))
console.table(arr.includes(0))

//递归二分排序法（快速排序）
function quickSort(arr) {
    //递归结束条件
    if (arr.length < 1) {
        return arr;
    }
    var midIndex = parseInt(arr.length / 2);//中间元素的下标
    var mid = arr.splice(midIndex, 1)[0];//中间元素的值
    var left = [];//放小于mid的数
    var right = [];//放大于mid的数
    //遍历数组
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    //将排好序的数组进行合并
    return quickSort(left).concat(mid, quickSort(right))
}
var res = [9, 8, 7, 6, 5, 4, 3, 2, 1]
document.write(quickSort(res) + '<br>');

//插入排序
function interposSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];//保存当前数据
        var index = i - 1;//比较的前一个下标位置
        while (index >= 0 && arr[index] > key) {
            //当前一个元素比当前元素大时，进行覆盖
            arr[index + 1] = arr[index];
            index--;
        }
        //将key放置最终位置
        arr[index + 1] = key;
    }
    return arr
}
var res = [9, 8, 7, 6, 5, 4, 3, 2, 1]
document.write(interposSort(res));