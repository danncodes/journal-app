import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav: false,
    username: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    phone: "",
    userID: localStorage.getItem("jwt") ? JSON.parse(atob(localStorage.getItem("jwt").split('.')[1])).userId : undefined,
  },
  mutations: {
      toggleNav(state){
        state.showNav = !state.showNav
    },
    updateUsername(state, inputValue){
      state.username =  inputValue
    },
    updatePassword(state, inputValue){
      state.password =  inputValue
    },
    updateConfirmPassword(state, inputValue){
      state.confirmPassword =  inputValue
    },
    updateFirstname(state, inputValue){
      state.firstname =  inputValue
    },
    updateLastname(state, inputValue){
      state.lastname =  inputValue
    },
    updatePhone(state, inputValue){
      state.phone =  inputValue
    },
    clearUserState(state){
      state.username = ""
      state.password = ""
      state.confirmPassword = ""
      state.firstname = ""
      state.lastname =  ""
      state.phone = ""
    },
    storeUserID(state, userID){
      state.userID = userID
      console.log("UserIf Stored", state.userID)
    },

  },
  actions: {
  },
  modules: {
  }
})
