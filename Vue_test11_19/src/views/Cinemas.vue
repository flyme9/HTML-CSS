<template>
    <div>
        <div class="box" :style="{height:height}">
            <ul>
                <li v-for="data in cinemaList" :key="data.cinemaId">
                    <div class="left">
                        <div class="cinema-name">{{data.name}}</div>
                        <div class="cinema-address">{{data.address}}</div>
                    </div>
                    <div class="right">
                        <div class="cinema-price">￥{{data.lowPrice / 100}}起</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaList: [],
      height: '0px'
    }
  },
  mounted () {
    //  动态计算窗口高度
    this.height = document.documentElement.clientHeight - document.querySelector('footer').offsetHeight - 5 + 'px'
    http({
      url: '/gateway?cityId=310100&ticketFlag=1&k=4628898',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data.data.cinemas)
      this.cinemaList = res.data.data.cinemas

      this.$nextTick(() => {
        // 初始化BetterScroll
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
    li{
        padding: 0.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            width: 2.12rem;

            .cinema-name{
                font-size: 0.15rem;
                color: #191a1b;
            }
            .cinema-address{
                color: #797d82;
                font-size: 0.12rem;
                margin-top: 0.05rem;
                // width:2.1rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
        .right{
            .cinema-price{

                font-size: 0.15rem;
                color: #ff5f16;
            }
        }
    }
    .box{
        overflow: hidden;
        position: relative;  // 修正滚动条位置
    }
</style>
