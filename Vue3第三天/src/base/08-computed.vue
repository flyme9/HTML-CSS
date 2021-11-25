<template>
    <div>
        计算属性
        <input type="text" v-model="obj.mytext">
        <ul>
            <li v-for="data in filterlist()" :key="data">
                {{data}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="data in computedList" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive,computed } from 'vue'
export default {
    setup(){
        const obj = reactive({
            datalist:['aaa','bbb','ccc','aab','aac','aba','abc','bc','bcd','cdd'],
            mytext:''
        })
        // 函数方式
        const filterlist=()=>{
            console.log('函数调用')
            return obj.datalist.filter(item=>item.includes(obj.mytext))
        }
        // 计算属性方式
        const computedList=computed(()=>{
            console.log('计算属性调用')
            return obj.datalist.filter(item=>item.includes(obj.mytext))
        })
        return {
            obj,
            filterlist,
            computedList
        }
    }
}
</script>