<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="————— ^ 我是有底线的 ^ —————" @load="onLoad" :immediate-check="false">
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
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
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import Vue from 'vue'
import http from '@/util/http'

Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return data.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=4414996`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  methods: {
    onLoad () {
      if (this.datalist.length === this.total && this.datalist.length !== 0) {
        this.finished = true
        return
      }
      // this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${++this.current}&pageSize=10&type=1&k=4414996`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        //
        this.loading = false
        console.log(this.current)
      })
    },
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
    .van-list{
        margin-left: 0.15rem;
        .van-cell{
            padding: 0.15rem;
            padding-left: 0;
            overflow: hidden;
            .van-cell__value{
              display: flex;
              align-items: center;
              img{
                  width: 0.66rem;
                  height: 0.9251rem;
                  float: left;
              }
              .dest{
                  padding:0 0.1rem;
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
    }
</style>
