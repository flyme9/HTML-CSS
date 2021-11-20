<template>
  <div>
    <!-- <ul>
    Vue router 声明式导航

    active-class 对router-link-active 进行自定义类名
    <router-link to="/films" active-class='Gaoactive'>电影</router-link>

    tag老写法
    <router-link to="/cinemas" tag="li">影院</router-link>

    <router-link to="/center" custom v-slot="{navigate,isActive}">
    tag新写法 navigate跳转的目标 isActive 是否选中
    <li @click="navigate" :class="isActive?'Gaoactive':''">我的--{{navigate}}</li>
    </router-link>
    </ul> -->

    <tabbar></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>

  </div>
</template>

<style lang="scss">
  *{
      padding: 0;
      margin: 0;
  }
  ul,ol,li{
    list-style: none;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  a{
    text-decoration: none;
    color: #191a1b;
  }
  section{
    padding-bottom: 0.5rem;
  }
</style>

<script>
// 引入组件
import tabbar from '@/mycomponents/Tabbar'
// element组件库引入
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// vant组件库引入
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
export default {
  data () {
    return {

    }
  },
  // 注册局部组件
  components: {
    tabbar
  }
}
</script>
