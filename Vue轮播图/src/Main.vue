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
    <router-view></router-view>

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
</style>

<script>
import tabbar from '@/mycomponents/Tabbar'
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>
