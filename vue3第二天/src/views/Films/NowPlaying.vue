<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                {{data.name}}
                <div>主演：{{actorFilter(data.actors)}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted () {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4414996",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16367848715056039795818497","bc":"360100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
        .then(res => {
            this.datalist = res.data.data.films
        });
    },
    methods: {
        handleChangePage(id){
            this.$router.push(`/detail/${id}`)
        },
        actorFilter(data){
            if (data === undefined) return '暂无主演'
            return data.map(item => item.name).join(' ')
        }
    }
}
</script>