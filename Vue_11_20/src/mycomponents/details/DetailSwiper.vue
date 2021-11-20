<template>
    <div class="swiper-container" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// 导入模块
import Swiper from 'swiper/bundle'
// 导入css样式
import 'swiper/swiper-bundle.css'

export default {
  props: {
    perview: {
      type: Number,
      define: 1
    },
    name: {
      type: String,
      define: 'banner'
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.perview,
      spaceBetween: 5,
      freeMode: true
    })
  }
}
</script>
