console.time('2 号任务')
let n=1;
for(let i= 1;i<1000000000;i++){
    n+=i
}
console.log('分线程'+n)
postMessage(n) // 发送给主线程
console.timeEnd('2 号任务')