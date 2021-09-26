// 获取元素
// 音频元素
const audio = document.querySelector('audio')
// 总时间元素
const durationBox = document.querySelector('.duration')
// 播放按钮
const playPauseBtn = document.querySelector('.playPause')
// 停止播放按钮
const stopBtn = document.querySelector('.stop')
// 获取当前时间元素
const currentBox = document.querySelector('.current')
// 获取时间进度条的小圆点
const circle = document.querySelector('.circle')
// 获取当前时间盒子
const currentTimeBox = document.querySelector('.currentTime')
// 获取时间进度条盒子
const progressBox = document.querySelector('.progress')
// 获取音量盒子
const volumeBox = document.querySelector('.volume')
// 获取音量进度条盒子
const volumeProgressBox = document.querySelector('.volume_progress')
// 获取音量小圆点
const volumeCircle = document.querySelector('.volume_circle')
// 当前音量盒子
const volumeCurrentBox = document.querySelector('.volume_current')


// 准备变量
// 总时间
let duration = 0
// 时间小圆点是否可以拖拽
let timeFlag = false
// 音量小圆点是否可以拖拽
let volumeFlag = false
// 记录鼠标按下时的坐标点
let startY = 0
// 记录音量小圆点距离底部位置
let volCirTop = 0

// 绑定事件
audio.addEventListener('canplay', function () {
    // 获取歌曲总时间
    duration = this.duration
    // 将duration插入到页面
    durationBox.innerHTML = format(duration)

    // 播放暂停按钮点击事件
    playPauseBtn.addEventListener('click', playHandler)

    // 停止按钮点击事件
    stopBtn.addEventListener('click', stopHandler)

    // audio 时间改变事件
    audio.addEventListener('timeupdate', timeHandler)

    // progressBox 鼠标按下事件
    circle.addEventListener('mousedown', progressDownHandler)

    // progressBox 鼠标移动事件
    progressBox.addEventListener('mousemove', progressMoveHandler)

    // progressBox 鼠标抬起事件
    circle.addEventListener('mouseup', progressUpHandler)

    // 音量按钮绑定点击事件
    volumeBox.addEventListener('click', volumeHandler)

    // 音量进度条鼠标按下事件
    volumeCircle.addEventListener('mousedown', volumeProgressDownHandler)

    // 音量进度条鼠标移动事件
    volumeProgressBox.addEventListener('mousemove', volumeProgressMoveHandler)

    // 音量进度条鼠标抬起事件
    volumeProgressBox.addEventListener('mouseup', volumeProgressUpHandler)

    // 音量进度条盒子点击事件
    volumeProgressBox.addEventListener('click', volumeClickHandler)

    // audio 结束事件
    audio.addEventListener('ended',()=> {
        playPauseBtn.firstElementChild.classList.add('icon-24gf-play')
        currentTimeBox.style.width='0px'
        circle.style.left='5px'
        currentBox.innerText='00:00'
    })
})

// 事件处理函数
// 播放暂停按钮点击事件
function playHandler() {
    // 切换类名显示
    this.firstElementChild.classList.toggle('icon-24gf-play')
    if (audio.paused) return audio.play()
    audio.pause()
}

// 停止按钮点击事件
function stopHandler() {
    // 停止播放
    audio.pause()
    // 切换暂停播放按钮类名
    playPauseBtn.firstElementChild.classList.add('icon-24gf-play')
    // 回到最开始
    audio.currentTime = 0
}

// audio 时间改变事件
function timeHandler() {
    // 获取当前时间
    const current = this.currentTime
    // 将current插入到页面
    currentBox.innerHTML = format(current)

    // 设置进度条和小圆点
    // 计算当前时间与总时间的比例
    const tmpTime = current / duration
    const tmpOffset = 320 * tmpTime
    // 设置移动
    circle.style.left = tmpOffset + 5 + 'px'

    // 已播放进度条的宽度
    currentTimeBox.style.width = tmpOffset + 'px'
}

// 事件进度条鼠标按下事件
function progressDownHandler() {
    // 开启开关
    timeFlag = true
}

// 事件进度条鼠标移动事件
function progressMoveHandler(e) {
    e = e || window.event
    // 判断开关
    if (!timeFlag) return

    // 
    const x = e.pageX
    const offsetLeft = progressBox.offsetLeft
    // 计算移动的距离
    let tmp = x - offsetLeft

    // 边界值判断
    if (tmp >= 325) tmp = 325
    if (tmp <= 5) tmp = 5
    circle.style.left = tmp + 'px'

    circle.style.left = tmp + 'px'
    currentTimeBox.style.width = tmp - 5 + 'px'

    const tmpOffset = (tmp - 5) / 320
    const tmpTime = duration * tmpOffset

    currentBox.innerText = format(tmpTime)

    // 修改当前播放时间
    audio.currentTime=tmpTime

}

// 事件进度条鼠标抬起事件
function progressUpHandler() {
    // 关闭开关
    timeFlag = false
}

// 音量键操作事件
function volumeHandler() {
    // 操作类名
    this.firstElementChild.classList.toggle('icon-24gf-volumeHigh')

    // 静音与非静音操作
    audio.muted = !audio.muted
}

// 音量进度条鼠标按下事件
function volumeProgressDownHandler(e) {
    e = e || window.event
    // 开启开关
    volumeFlag = true
    // 记录按下的坐标
    startY = e.pageY
    volCirTop = this.offsetTop
}

// 音量进度条鼠标移动事件
function volumeProgressMoveHandler(e) {
    e = e || window.event
    // 判断开关
    if (!volumeFlag) return

    // 获取坐标
    let y = (e.pageY - startY) * -1

    let moveY = y + 100 - volCirTop
    // 边界值判断
    if (moveY <= 0) moveY = 0
    if (moveY >= 100) moveY = 100

    volumeCircle.style.bottom = moveY + 5 + 'px'
    volumeCurrentBox.style.height = moveY + 'px'

    // 计算比例设置音量
    const tmpVolume = (moveY) / 100
    audio.volume = tmpVolume
    if (tmpVolume <= 0) volumeBox.firstElementChild.classList.remove('icon-24gf-volumeHigh')
    else volumeBox.firstElementChild.classList.add('icon-24gf-volumeHigh')
}

// 音量进度条鼠标抬起事件
function volumeProgressUpHandler() {
    // 关闭开关
    volumeFlag = false
}

// 音量进度条盒子点击事件
function volumeClickHandler(e) {
    // 阻止事件传播
    e.stopPropagation()
}

// 格式化时间函数
function format(seconds) {
    // 舍去小数
    seconds = Math.floor(seconds)
    // 分钟格式化
    let minute = parseInt(seconds / 60)
    minute = minute < 10 ? '0' + minute : minute
    // 秒钟格式化
    let second = seconds % 60
    second = second < 10 ? '0' + second : second
    // 拼接分和秒
    const str = minute + ':' + second
    return str
}