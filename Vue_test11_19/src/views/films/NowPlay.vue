<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                <img :src="data.poster" alt="img">
                <div class="dest">
                    <div class="title">{{data.name}}</div>
                    <div class="content">
                        <div class="grade" :style="data.grade?'':'color: transparent;'">观众评分
                            <span>{{data.grade}}</span>
                        </div>
                        <div class="actors">主演：{{data.actors | actorsFilter}}</div>
                        <div class="label">{{data.nation?data.nation:'暂无'}} | {{data.runtime?data.runtime:'0'}}分钟</div>
                    </div>
                </div>
                <div class="nowPlayingFilm-buy">购票</div>
            </li>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
import http from '@/util/http'

Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return data.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=360100&pageNum=1&pageSize=10&type=1&k=4732967',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleChangePage (id) {
      // 通过命名路由跳转
      this.$router.push({
        name: 'Gao',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    ul{
        margin-left: 0.15rem;
        li{
            padding: 0.15rem;
            padding-left: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            img{
                width: 0.66rem;
                height: 0.9251rem;
                float: left;
            }
            .dest{
                padding:0 0.1rem;
                // box-sizing: border-box;
                width: 2.1rem;
                .title{
                    font-size: 0.16rem;
                }
                .content{
                    font-size: 0.13rem;
                    color: #797d82;
                    span{
                        font-size: 0.14rem;
                        color: #ffb232;
                    }
                    .actors{
                        width:2.1rem;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .nowPlayingFilm-buy{
                line-height: 0.25rem;
                height: 0.25rem;
                width: 0.5rem;
                color: #ff5f16;
                font-size: 0.13rem;
                border: 1px solid #ff5f16;
                text-align: center;
                border-radius: 2px;
            }
        }
    }
</style>
