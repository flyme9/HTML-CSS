import { createStore } from 'vuex'

export default createStore({
  state:{
    isTabbarShow:true
  },
  mutations:{
    hide(state){
      state.isTabbarShow=false
    },
    show(state){
        state.isTabbarShow=true
    }
  }
})
