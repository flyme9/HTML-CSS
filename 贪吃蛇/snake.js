export default class Snake{
    constructor(map){
        this.map=map
        // 蛇
        this.snake=[]
        // 方向
        this.direction='right'

        this.creSnake()
    }

    // 蛇头出现位置
    pos(){
        const head=this.snake[0]
        // 没有头
        if(!head) return {left:0,top:0}
        // 有头
        const obj={left:head.offsetLeft,top:head.offsetTop}

        switch(this.direction){
            case 'top':obj.top-=20;break
            case 'left':obj.left-=20;break
            case 'right':obj.left+=20;break
            case 'bottom':obj.top+=20;break
        }
        return obj
    }
    // 给蛇 添加头
    creHead(){
        const pos=this.pos()

        const head=this.snake[0]
        // 有头
        if(head) head.className='body'
        // 没有头
        const div=document.createElement('div')
        div.className='head'
        div.style.left=pos.left+'px'
        div.style.top=pos.top+'px'
        this.snake.unshift(div)
        this.map.appendChild(div)
    }
    // 初始化创建蛇
    creSnake(){
        for(let i=0;i<3;i++){
            this.creHead()
        }
    }
    // 移动
    move(){
        // 获取最后一个
        const body=this.snake.pop()
        // 把最后一个从页面移除
        body.remove()
        // 添加一个头
        this.creHead()
    }
    // 触碰边界死亡
    isDie(){
        const head=this.snake[0]
        const x=head.offsetLeft
        const y=head.offsetTop
        if(x<0||y<0||x>=this.map.clientWidth||y>=this.map.clientHeight) return true
        else{
            const tmp=this.snake.slice(1)
            let flag=false
            tmp.forEach(item=>{
                if(x===item.offsetLeft&&y===item.offsetTop) flag=true
            })
            return flag
        }
    }
    // 吃到食物
    isEat(food){
        const x=this.snake[0].offsetLeft
        const y=this.snake[0].offsetTop

        if(x===food.x&&y===food.y) return true
        else return false
    }
}