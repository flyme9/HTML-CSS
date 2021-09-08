export default class Food{
    constructor(map){
        this.map=map

        // 创建食物
        this.food=document.createElement('div')
        this.food.className='food'

        // 将食物插入到地图中
        this.map.appendChild(this.food)

        // 记录坐标
        this.x=0
        this.y=0


        this.newFood()
    }
    newFood(){
        const xNum=this.map.clientWidth/20
        const yNum=this.map.clientHeight/20
        // 获取 随机数
        const x=Math.floor(Math.random()*xNum)
        const y=Math.floor(Math.random()*yNum)
        this.x=x*20
        this.y=y*20 
        // 设置 食物坐标
        this.food.style.left=this.x +'px'
        this.food.style.top=this.y +'px'
    }

}