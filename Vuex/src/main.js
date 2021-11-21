import Vue from 'vue' // 导入vue，以ES6模块化开发方式导入
import Main from './Main.vue' // 导入根组件Main
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router, // 通过 this.$router访问router内所有属性
  store, // 通过 this.$store访问store内所有属性
  render: h => h(Main) // 将组件渲染完成后，挂载在#app节点上
}).$mount('#app')
