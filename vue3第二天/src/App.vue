<template>
  <div>
    <ul v-show="$store.state.isTabbarShow">
        <router-link to="/films" custom v-slot="{ navigate, isActive }">
            <li @click="navigate" :class="isActive ? 'active' : ''">
                <i class="iconfont icon-all"></i>
                <span>电影</span>
            </li>
        </router-link>

        <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
            <li @click="navigate" :class="isActive ? 'active' : ''">
                <i class="iconfont icon-store"></i>
                <span>影院</span>
            </li>
        </router-link>

        <router-link to="/center" custom v-slot="{ navigate, isActive }">
            <li @click="navigate" :class="isActive ? 'active' : ''">
                <i class="iconfont icon-gerenzhongxin"></i>
                <span>我的</span>
            </li>
        </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mytext:''
    }
  },
  directives: {
    hello:{
      mounted () {
        console.log('mounted')
      }
    }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  ul,ol,li{
    list-style: none;
  }
  .active{
    color: #ff5f16;
  }
</style>