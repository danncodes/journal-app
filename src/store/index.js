import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav: false
  },
  mutations: {
    toggleNav(state){
      state.showNav = !state.showNav
  }
  },
  actions: {
  },
  modules: {
  }
})
