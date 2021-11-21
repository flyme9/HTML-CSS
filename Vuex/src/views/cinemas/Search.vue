<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            :autofocus="true"
        />
        <ul v-if="value">
            <li v-for="data in computedList" :key="data.cinemaId">
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
</template>

<script>
export default {
  data () {
    return {
      value: null
    }
  },
  methods: {
    onSearch () {
    },
    onCancel () {
      this.$router.back()
    }
  },
  computed: {
    computedList () {
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    if (this.$store.state.cinemaList.length === 0) {
    // 异步请求数据，vuex状态分发
      this.$store.dispatch('getCinemasDate')
    } else {
      // console.log('缓存')
    }
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
