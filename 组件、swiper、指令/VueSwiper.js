Vue.component('swiperItem', {
    template: `
    <div class="swiper-slide">
        <slot></slot>
    </div>
    `
})
Vue.component('swiper', {
    props:{
        loop:{
            type:Boolean,
            default:true
        },
        autoplay:{
            type:Object,
            default:{
                delay: 1500,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            }
        }
    },
    template: `
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    `,
    mounted() {
        new Swiper('.swiper-container', {
            loop: this.loop, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: this.autoplay
        })
    }
})