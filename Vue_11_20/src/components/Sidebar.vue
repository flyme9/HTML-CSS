<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.id">
                <img :src="imgUrl | imgFilter">
                {{data.nm}}
            </li>
        </ul>
    </div>
</template>
// 添加scoped属性后，子组件样式不受父组件影响
<style lang='scss' scoped>
    ul{
        li{
            background: red;
        }
    }
</style>

<style lang="scss" scoped>
    div{
        background: blue;
    }
</style>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('imgFilter', path => {
  return path.replace('/w.h', '') + '@160w_220h_1e_1c'
})
export default ({
  data () {
    return {
      datalist: [],
      imgUrl: 'http://p0.meituan.net/w.h/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg'
    }
  },
  mounted () {
    // fetch('/maoyan.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     this.datalist = res.movieList
    //     console.log(this.datalist)
    //   })
    axios.get('/maoyan.json')
      .then(res => {
        this.datalist = res.data.movieList
      })
  }

})
</script>
