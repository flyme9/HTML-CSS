import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import Film from '../views/Film'
import NowPlaying from '../views/Films/NowPlaying'
import ComingSoon from '../views/Films/ComingSoon'

import Cinema from '../views/Cinema'
import Center from '../views/Center'

import Detail from '../views/Detail'

const routes = [
  {
    path:'/films',
    component:Film,
    name:'film',
    // 二级路由
    children:[
      {
        path:'/films/nowplaying',
        component:NowPlaying
      },
      {
        path:'/films/comingsoon',
        component:ComingSoon
      },
      // 重定向
      {
        path:'/films',
        redirect:'/films/nowplaying'
      }
    ]
  },
  {
    path:'/cinemas',
    component:Cinema
  },
  {
    path:'/center',
    component:Center
  },
  {
    path:'/detail/:id',
    component:Detail
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
