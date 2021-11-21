<template>
    <div v-if="filmInfo">
      <detail-header v-scroll="50">
        {{filmInfo.name}}
      </detail-header>
      <!-- 影片基本信息 -->
      <div :style="{backgroundImage:'url('+filmInfo.poster+')'}" class="poster"></div>
      <div class="content">
        <div class="col">
          <div class="film-name">
            <span class="name">{{filmInfo.name}}</span>
            <span class="item">{{filmInfo.item.name}}</span>
          </div>
          <div class="film-grade" :style="filmInfo.grade?'':'color: transparent;'">
            <i class="grade">{{filmInfo.grade}}分</i>
          </div>
        </div>
        <div class="category">{{filmInfo.category}}</div>
        <div class="premiereAt">{{filmInfo.premiereAt | dateFilter}}上映</div>
        <div class="nation">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
        <div class="synopsis" :class="isHidden?'hidden':''">{{filmInfo.synopsis}}</div>
        <div style="text-align:center"><i @click="isHidden=!isHidden" class="iconfont" :class="isHidden?'icon-moreunfold':'icon-less'"></i></div>
      </div>

      <!-- 演职人员信息 -->
      <div class="title">演职人员</div>
      <div class="actors">
        <detail-swiper  :perview="3.5" name="swiperActors">
          <detail-swiper-item v-for="(data,index) in filmInfo.actors" :key="index">
            <div :style="{backgroundImage:'url(' + data.avatarAddress+')'}" class="avatarImg"></div>
            <div>{{data.name}}</div>
            <div style="color:#797d82;font-size:0.1rem">{{data.role}}</div>
          </detail-swiper-item>
        </detail-swiper>
      </div>

      <!-- 剧照 -->
      <div class="title">剧照</div>
      <div class="photos">
        <detail-swiper  :perview="2.2" name="swiperPhotos">
          <detail-swiper-item v-for="(data,index) in filmInfo.photos" :key="index">
            <div :style="{backgroundImage:'url(' + data +')'}" class="avatarImg" @click="handlePreview(index)"></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
    </div>
</template>

<script>
// 引入组件
import detailSwiper from '@/mycomponents/details/DetailSwiper'
import detailSwiperItem from '@/mycomponents/details/DetailSwiperItem'
import detailHeader from '@/mycomponents/details/DetailHeader'

import Vue from 'vue'
import moment from 'moment'
import http from '@/util/http'
// 图片预览
import { ImagePreview } from 'vant'
import mixin from '@/util/mixin'

Vue.filter('dateFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
Vue.directive('scroll', {
  // 封装滚动指定距离显示顶部导航
  inserted (el, binding) {
    console.log(binding)
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 销毁指令
  unbind () {
    window.onscroll = null
  }
})
export default ({
  mixins: [mixin],
  data () {
    return {
      // 返回的数据是一个对象，初始值赋值为null，当数据还未返回时，不进行渲染页面
      filmInfo: null,
      isHidden: true
    }
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    }
  },
  mounted () {
    // 获取id并向后端发送请求
    // console.log(this.$route.params.id)
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=891321`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      // console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  }
})
</script>

<style lang="scss" scoped>
  .poster{
    width: 100%;
    height: 2.1rem;
    background-repeat:no-repeat;
    background-position: center;
    background-size: cover;

  }
  .content{
    padding: 0.15rem;
    .col{
      display: flex;
      justify-content: space-between;
      font-size: 0.18rem;
      .film-name{
        .name{
          line-height: 0.2rem;
          margin-right: 10px;
        }
        .item{
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 0.18rem;
          padding: 0 0.02rem;
          border-radius: 2px;
          display: inline-block;
        }
      }
      .film-grade{
        color: #ffb232;
      }
    }
    .category,.premiereAt,.nation,.synopsis{
    font-size: 0.13rem;
    color: #797d82;
    margin-top: 0.04rem;
    }
    .synopsis{
      margin-top: 0.13rem;
      line-height: 0.19rem;
    }
    .hidden{
      overflow: hidden;
      height: 0.38rem;
    }
  }
  .title{
    font-size: 16px;
    padding: 0.15rem;
  }
  .actors{
    .swiperActors{
      padding-left: 0.15rem;
      font-size: 0.12rem;
      text-align: center;
      .avatarImg{
        width: 85px;
        height: 85px;
        background-position: center;
        background-size: cover;
        margin-bottom: 0.1rem;
        padding: 0.1rem;
        box-sizing: border-box;
      }
    }
  }
  .photos{
    padding-left: 0.15rem;
    .avatarImg{
      width: 150px;
      height: 100px;
      background-position: center;
      background-size: cover;
      margin-bottom: 0.1rem;
      padding: 0.1rem;
      box-sizing: border-box;
    }
  }
</style>
