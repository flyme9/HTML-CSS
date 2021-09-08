
import Food from './food.js'
import Snake from './snake.js'

export default class Game{
    constructor(ele,score){
        this.map=document.querySelector(ele)
        this.score=document.querySelector(score)
        // 创建食物
        this.food=new Food(this.map)
        // 创建蛇
        this.snake=new Snake(this.map)
        // 准备关卡等级
        this.level=1
        // 定时器返回值
        this.timer=0
        // 计数
        this.count=0
    }
    // 开始游戏
    start(){
        this.timer=setInterval(()=>{
            // 让蛇移动
            this.snake.move()
            // 判断是否吃到食物
            if(this.snake.isEat(this.food)){
                this.updateScore()
                this.snake.creHead()
                this.food.newFood()
            }
            // 判断碰撞边界
            if(this.snake.isDie()){
                window.alert('game over')
                clearInterval(this.timer)
                return
            }
        },500/this.level)
        this.change()
    }
    // 暂停游戏
    stop(){
        clearInterval(this.timer)
    }
    // 重新开始
    restart(){
        window.location.reload()
    }
    // 判断方向
    change(){
        document.addEventListener('keydown',e=>{
            e=e||window.event
            const code=e.keyCode||e.which
            switch(code){
                case 37:this.snake.direction='left';break
                case 38:this.snake.direction='top';break
                case 39:this.snake.direction='right';break
                case 40:this.snake.direction='bottom';break
            }
        })
    }
    // 更改记分牌
    updateScore(){
        this.count++
        this.score.value=this.count*90+this.level*10

        if(this.count%15===0){
            this.level++
            this.stop()
            this.start()
        }
    }
}