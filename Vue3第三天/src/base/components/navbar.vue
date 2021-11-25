<template>
    <div>
        <button @click="handleShow">left</button>
        {{myName}}
        <button>right</button>
    </div>
</template>

<script>
export default {
    props: ['myName'], // 接收父组件传递的数据状态
    setup(props,{emit}){
        console.log(props.myName,props) // 获取数据

        const handleShow = ()=>{
            emit('event') // 触发父组件的监听事件函数
        }
        return {
            handleShow
        }
    }
}
</script>