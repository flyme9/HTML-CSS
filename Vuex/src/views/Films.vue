<template>
    <div>
      <!-- 轮播图 -->
        <film-swiper :key="datalist.length">
          <film-swiper-item v-for="data in datalist" :key="data.id">
            <img :src="data.imgUrl" :alt="data.title" :title="data.title">
          </film-swiper-item>
        </film-swiper>

        <!-- 导航 -->
        <film-header class="sticky"></film-header>

        <!--  -->
        <now-play  slot=NowPlay></now-play>
        <coming-soon slot=ComingSoon></coming-soon>
    </div>
</template>
<style lang="scss" scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .sticky{
    position: sticky;
    top: 0;
    background: white;
    z-index: 1000;
  }
</style>
<script>
// 引入组件
import filmSwiper from '@/mycomponents/films/FilmSwiper'
import filmSwiperItem from '@/mycomponents/films/FilmSwiperItem'
import filmHeader from '@/mycomponents/films/FilmHeader'
import nowPlay from './films/NowPlay'
import comingSoon from './films/ComingSoon'
// 引入axios
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      this.datalist = res.data.banner
    })
      .then()
  },
  components: {
    // 注册组件
    filmSwiper,
    filmSwiperItem,
    filmHeader,
    nowPlay,
    comingSoon
  }
}
</script>

<!-- <style lang="scss" scoped>
  .banner{
    width:3.7533rem;
    height: 1.9288rem;
  }
</style>
-->
<!-- <script>
export default {
  data () {
    return {
      datalist: ['1111', '2222', '3333']
    }
  },
  methods: {
    handleChangePage (id) {
      // 原生编程式导航
      //   location.href = '#/detail'

      // Vue编程式导航-通过路径跳转
      // this.$router.push(`/detail/${id}`)

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
-->
