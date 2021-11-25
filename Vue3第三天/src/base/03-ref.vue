<template>
    <div>
        vue3 ref新写法
        {{myName}}
        <button @click="handleClick()">change</button>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    // setup 相当于vue3老写法或vue写法中的 beforeCreate，created生命周期
    setup(){
        // 定义一个ref对象
        const myName=ref('Gao')
        console.log(myName.value)
        // 定义函数
        const handleClick=()=>{
            myName.value='xiaoming'
        }
        // 
        return {
            handleClick,
            myName
        }
    }
}
</script>