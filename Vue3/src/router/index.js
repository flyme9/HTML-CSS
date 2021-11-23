import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'

const routes = [
  {
    path:'/films',
    component:Film,
    name:'film'
  },
  {
    path:'/cinemas',
    component:Cinema
  },
  {
    path:'/center',
    component:Center
  },
  // 重定向
  {
    path:'/',
    redirect: '/films'
  },
  {
    path:'/:any',
    redirect: {
      name:'film'
    }
  }
]

const router = createRouter({
  history: createWebHistory(), // history 模式
  // history:createWebHashHistory(), // hash 模式
  routes
})

export default router
