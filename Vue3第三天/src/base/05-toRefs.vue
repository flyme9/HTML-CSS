<template>
    <div>
        vue3 新写法
        {{myName}}
        <button @click="handleClick()">change</button>
    </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
    // setup 相当于vue3老写法或vue写法中的 beforeCreate，created生命周期
    setup(){
        console.log('setup')

        // 定义状态
        const obj = reactive({
            myName:'Gao'
        })
        console.log(toRefs(obj))
        // 定义函数
        const handleClick=()=>{
            obj.myName='xiaoming'
        }
        // 
        return {
            ...toRefs(obj), // 将obj对象转换为ref对象，并进行展开
            obj,
            handleClick
        }
    }
}
</script>