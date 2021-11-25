<template>
    <div>
        watch
        <!-- <input type="text" v-model="obj.mytext" @input="handleInput"> -->
        <input type="text" v-model="obj.mytext">
        <ul>
            <li v-for="data in obj.datalist" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive,watch } from 'vue'
export default {
    setup(){
        const obj = reactive({
            datalist:['aaa','bbb','ccc','aab','aac','aba','abc','bc','bcd','cdd'],
            olddatalist:['aaa','bbb','ccc','aab','aac','aba','abc','bc','bcd','cdd'],
            mytext:''
        })
        // 绑定input函数方式
        // const handleInput=()=>{
        //     obj.datalist = obj.olddatalist.filter(item=>item.includes(obj.mytext))
        // }
        // watch方法
        watch(
            ()=>obj.mytext, // 监听器
            ()=>{ // 改变状态，触发回调函数
                obj.datalist = obj.olddatalist.filter(item=>item.includes(obj.mytext))
            }
        )
        return {
            obj,
            // handleInput
        }
    }
}
</script>