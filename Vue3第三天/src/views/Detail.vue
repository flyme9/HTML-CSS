<template>
    <div>
        detail
    </div>
</template>

<script>
import { inject, onMounted, onUnmounted } from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup(){
        const route = useRoute() // 等价于 this.$route
        const store = useStore() // 等价于 this.$store
        const isShow = inject('isShow') // 注入服务
        onMounted(()=>{
            console.log(route.params.id)
            store.commit('hide')
            isShow.value=false
        })
        onUnmounted(()=>{
            store.commit('show')
            isShow.value=true
        })
    }
}
</script>