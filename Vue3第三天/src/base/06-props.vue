<template>
    <div>
        组件通信
        <navbar myName="home" @event='change'></navbar>
        <sidebar v-show="obj.isShow"></sidebar>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'
export default {
    components: {
        navbar,
        sidebar
    },
    setup(){
        const obj = reactive({
            isShow:true
        })
        const change=()=>{
            obj.isShow=!obj.isShow
        }
        return {
            obj,
            change
        }
    }
}
</script>