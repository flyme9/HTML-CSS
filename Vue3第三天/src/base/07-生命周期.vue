<template>
    <div>
        生命周期
        <ul>
            <li v-for="data in obj.list" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { onBeforeMount, onMounted, reactive } from '@vue/runtime-core'
export default {
    setup(){
        const obj = reactive({
            list:[]
        })
        onBeforeMount(()=>{
            console.log('DOM上树之前')
        })
        onMounted(()=>{
            console.log('DOM上树','axios，事件监听，setInterval')
            setTimeout(() => {
                obj.list=['aaa','bbb']
            }, 2000);
        })
        return{
            obj
        }
    }
}
</script>