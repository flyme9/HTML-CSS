<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
// 导入模块
import Swiper from 'swiper/bundle'
// 导入css样式
import 'swiper/swiper-bundle.css'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    new Swiper('.banner', {
      // 分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 循环轮播
      loop: this.loop,
      // 自动轮播
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    })
  }
}
</script>
