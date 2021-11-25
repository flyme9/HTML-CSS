<template>
    <div>
        todo
        <input type="text" v-model="obj.myText" >
        <input type="text" ref="myTextRef">
        <button @click="handleAdd()">add</button>
        <ul>
            <li v-for="(data,index) in obj.datalist" :key="index">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
    setup(){
        const obj=reactive({
            myText:'',
            datalist:[]
        })
        const myTextRef = ref() //创建ref对象
        const handleAdd=()=>{
            obj.datalist.push(obj.myText)
            console.log(myTextRef.value) // 必须 .value才能获取节点
        }
        return {
            obj,
            handleAdd,
            myTextRef
        }
    }
}
</script>