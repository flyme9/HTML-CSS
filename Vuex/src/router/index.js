import Vue from 'vue' // 引入Vue
import VueRouter from 'vue-router' // 引入Vue路由
import Films from '@/views/Films' // 引入films组件路径
import Detail from '@/views/Detail' // 引入Detail组件路径
import NowPlay from '@/views/films/NowPlay' // 引入NowPlay组件路径
import ComingSoon from '@/views/films/ComingSoon' // 引入ComingSoon组件路径
import Cinemas from '@/views/Cinemas' // 引入cinemas组件路径
import Search from '@/views/cinemas/Search' // 引入Search组件路径
import City from '@/views/City' // 引入City组件路径
import Center from '@/views/Center' // 引入center组件路径
// import Order from '@/views/Order' // 引入Order组件路径
import Login from '@/views/Login' // 引入Login组件路径

Vue.use(VueRouter) // 注册使用vue路由插件,并自动注册 router-view 与 router-link两个全局组件

// 路由配置表
const routes = [
  {
    path: '/films',
    component: Films,
    // 嵌套路由（二级路由）
    children: [
      {
        path: '/films/NowPlay',
        component: NowPlay
      },
      {
        path: '/films/ComingSoon',
        component: ComingSoon
      },
      // 一级路由重定向后进入Films后，再一次重定向至NowPlay页面
      {
        path: '/films',
        redirect: '/films/NowPlay'
      }
    ]
  },
  {
    name: 'Gao', // 命名路由
    path: '/detail/:id', // 配置二级动态路由
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  // cinemas中搜索框的二级路由
  {
    path: '/cinemas/search',
    component: Search
  },
  // cinemas中城市的二级路由
  {
    path: '/city',
    component: City
  },
  {
    path: '/center',
    component: Center,
    meta: {
      isKerwinRequired: true
    }
    // // 独享路由拦截
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem('token')) {
    //     console.log(to)
    //     next()
    //   } else {
    //     next('/login')
    //   }
    // }
  },
  {
    path: '/order',
    component: () => import('@/views/Order'),
    meta: {
      isKerwinRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  },

  // 路由重定向
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  // mode: 'history', // 开启history模式
  routes
})

// 全局路由拦截
router.beforeEach((to, from, next) => {
  // console.log(to.fullPath)

  // 需要进行路由拦截的页面
  if (to.meta.isKerwinRequired) {
    // 判断本地存储中是否有token字段
    if (localStorage.getItem('token')) {
      next()
    } else {
      // 不满足条件跳转至指定页面
      next({
        // 不满足条件跳转的页面
        path: '/login',
        // 将将不满足条件的页面路径以参数放在url后面
        query: { redirect: to.fullPath }
      })
    }
  } else {
    // 不需要进行路由拦截的页面
    next()
  }
})

export default router
