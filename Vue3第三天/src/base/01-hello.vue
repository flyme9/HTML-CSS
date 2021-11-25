<template>
    <div>
        vue3 新写法
        {{obj.myName}}
        <button @click="handleClick()">change</button>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    // setup 相当于vue3老写法或vue写法中的 beforeCreate，created生命周期
    setup(){
        console.log('setup')

        // 定义状态
        const obj = reactive({
            myName:'Gao'
        })
        // 定义函数
        const handleClick=()=>{
            obj.myName='xiaoming'
        }
        // 
        return {
            obj,
            handleClick
        }
    }
}
</script>