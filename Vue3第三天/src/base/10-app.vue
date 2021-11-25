<template>
    <div>
        <ul>
            <li v-for="data in banner1.list" :key="data.id">
                {{data.title}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="data in banner2.list" :key="data.id">
                {{data.title}}
            </li>
        </ul>
    </div>
</template>

<script>
// import { onMounted, reactive } from 'vue'
import {getData1,getData2} from './module/app'
export default {
    setup(){
        // 请求数据
        const banner1 = getData1()
        const banner2 = getData2()

        return{
            banner1,
            banner2
        }
    }
}
</script>