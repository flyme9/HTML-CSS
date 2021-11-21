import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // 数据持久化
  plugins: [createPersistedState({
    // 指定数据持久化
    // reducer: (state) => {
    //   return {
    //     cityId: state.cityId,
    //     cityName: state.cityName
    //   }
    // }
  })],
  // 公共状态
  state: {
    cityId: '310100',
    cityName: '上海',
    cinemaList: [],
    isTabbarShow: true
  },
  // 统一管理，devtools工具记录状态的修改，只支持同步
  mutations: {
    // 城市名与城市id
    changeCity (state, city) {
      state.cityName = city.name
      state.cityId = city.cityId
    },
    // 影院数据
    changeCinemasData (state, data) {
      state.cinemaList = data
    },
    // 切换城市，清空影院数据
    clearCinema (state) {
      state.cinemaList = []
    },
    // 显示底部选项卡
    show (state) {
      state.isTabbarShow = true
    },
    // 隐藏底部选项卡
    hidden (state) {
      state.isTabbarShow = false
    }
  },
  // 支持同步和异步
  actions: {
    getCinemasDate (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=4628898`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // console.log(res.data.data.cinemas)
        store.commit('changeCinemasData', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
