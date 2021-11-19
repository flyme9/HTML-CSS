import Vue from 'vue' // 导入vue，以ES6模块化开发方式导入
import Main from './Main.vue' // 导入根组件Main
import router from './router'
// import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(Main) // 将组件渲染完成后，挂载在#app节点上
}).$mount('#app')
