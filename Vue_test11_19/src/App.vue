<template>
  <div>
    <i>{{ myname }}</i>

    <input type="text" v-model="mytext" />

    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{ data }}
      </li>
    </ul>

    <navbar myname="home" :leftbtn='false' @event='handleEvent'>
      <div>222</div>
    </navbar>

    <sidebar v-show="isShow"></sidebar>
  </div>
</template>

<style lang="scss">
$width: 100px;
ul {
  li {
    width: $width;
    background: yellow;
  }
}
</style>

<script>
import axios from 'axios'
// 引入Vue模块
// import Vue from 'vue'
// 引入组件
// import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
// 别名 @ 始终指向src绝对路径
import navbar from '@/components/Navbar'
// // 注册成全局组件
// Vue.component('navbar', navbar)
export default {
  data () {
    return {
      myname: 'Gao',
      mytext: '',
      datalist: [],
      isShow: true
    }
  },
  methods: {
    handleAdd () {
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    },
    handleEvent () {
      this.isShow = !this.isShow
    }
  },
  components: {
    // 注册局部组件
    navbar: navbar,
    sidebar
  },
  mounted () {
    axios.get('/Gao/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res.data)
    })
  }
}
</script>
