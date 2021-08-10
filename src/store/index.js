import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav: false,
    showModal: false,
    showDeleteModal: false,
    username: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    phone: "",
    title: "",
    tags: "",
    textArea: "",
    selectedImage: "",
    selectedEmotion: undefined,
    checkbox: false,
    ModalentryId: undefined,
    deleteModalEntryID: undefined,
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
    updateTitle(state, inputValue){
      state.title =  inputValue
    },
    updateTags(state, inputValue){
      state.tags =  inputValue
    },
    updateTextArea(state, textAreaValue){
      state.textArea =  textAreaValue
    },
    clearUserState(state){
      state.username = ""
      state.password = ""
      state.confirmPassword = ""
      state.firstname = ""
      state.lastname =  ""
      state.phone = ""
      state.title =  ""
      state.tags = ""
      state.textArea = ""
      state.selectedEmotion = undefined
      state.checkbox = false
    },
    storeUserID(state, userID){
      state.userID = userID
    },
    selectEmotion(state, emotion){
      state.selectedEmotion = emotion
    },
    toggleCheckbox(state, value){
      state.checkbox = value
    },
    displayModal(state, entryId){
      state.showModal = true
      state.ModalentryId = entryId
    },
    closeModal(state){
      state.showModal = false
      state.ModalentryId = undefined
    },
    displayDeleteModal(state, entryID){
      state.showDeleteModal = true
      state.deleteModalEntryID = entryID
    },
    closeDeleteModal(state){
      state.deleteModalEntryID = undefined
      state.showDeleteModal = false
    },
    imageSelected(state, image){
      state.selectedImage = image
      console.log(state.selectedImage)

    }
  },
  actions: {
  },
  modules: {
  }
})
