<template>
    <div>
        <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
          <template #left>
            {{cityName}}<van-icon name="arrow-down" size="16" color="#000" />
          </template>
          <template #right >
            <van-icon name="search" size="20" color="#000"  />
          </template>
        </van-nav-bar>
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
import BetterScroll from 'better-scroll'
// 映射
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      height: '0px',
      value: true
    }
  },
  computed: { // mapState(['cinemaList']), // === { cinemaList () { return this.$store.state.cinemaList } },
    ...mapState(['cinemaList', 'cityId', 'cityName']) // 映射后 this.$store.state.cinemaList 等价于 this.cinemaList

  },
  mounted () {
    // 动态计算窗口高度
    this.height = document.documentElement.clientHeight -
                  document.querySelector('footer').offsetHeight -
                  this.$refs.navbar.$el.offsetHeight - 5 + 'px'

    // 数据有缓存后，数组不为0，不在进行请求
    if (this.cinemaList.length === 0) {
      // 异步请求数据，vuex状态分发
      this.getCinemasDate(this.cityId).then(res => {
        // 滚动插件
        this.$nextTick(() => {
        // 初始化BetterScroll
          new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      // 滚动插件
      this.$nextTick(() => {
        // 初始化BetterScroll
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  methods: {
    handleLeft () {
      this.$router.push('/city')
      // 切换城市，清空影院数据
      this.clearCinema()
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    },
    ...mapActions(['getCinemasDate']), //
    ...mapMutations(['clearCinema'])
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
