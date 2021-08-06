<template>
<!-- Wrapper -->
  <div class="wrapper flex justify-center items-center h-screen w-screen fixed top-0 left-0 backdrop-blur-3xl z-20">
    <!-- Inner Modal -->
      <div class="bg-white border-t-8 border-indigo-600 
      relative rounded p-2 flex flex-col justify-between h-5/6 w-5/6" v-if="postData">
        <figure class="flex flex-col p-1 h-5/6 md:h-4/6 items-center md:flex-row md:my-auto">
          <img src="../assets/entryimg.jpg" alt="" class="w-7/12 sm:w-5/12 my-6 h-full object-contain">
          <figcaption class="w-10/12 lg:w-6/12 lg:mx-auto flex-col flex items-center sm:p-3 md:p-4 overflow-scroll h-full">
            <h1 class="font-semibold sm:text-xl md:text-2xl">{{ postData.title }}</h1>
            <div class="my-4 mb-4 text-center">
              <h2 class="text-xs my-1 text-indigo-800 font-medium sm:text-sm md:text-md">{{ postData.tags }}</h2>
              <p class="text-xs text-gray-600 font-light sm:text-sm md:text-md">{{ postData.createdAt.split("T")[0] }}</p>
            </div>
            <p class="text-center my-4">{{ postData.entry }}</p>
          </figcaption>
        
        </figure>

        <div class="w-full h-8 flex items-center justify-between px-2">

          <div class="flex items-center"> 
            <p class="text-2xl mr-2 md:text-3xl lg:text-4xl">{{ postData.emotion.split(" ")[0] }}</p>
            <p class="font-extralight text-sm md:text-xl lg:text-2xl opacity-80">{{ postData.emotion.split(" ")[1] }}</p>
          </div>

          <div class="flex">
            <a :href="'/editentry/' + postData.entryID" class="flex justify-center items-center">
              <i class="far fa-edit text-indigo-600 hover:text-indigo-800 mx-1 cursor-pointer md:text-2xl lg:text-3xl"></i>
            </a>
            <i class="fas fa-ban text-indigo-600 hover:text-indigo-800 mx-1 cursor-pointer md:text-2xl lg:text-3xl" @click="displayDeleteModal(postData.entryID)"></i>
          </div>
        </div>

        <i class='bx bx-x hover:opacity-100 text-3xl cursor-pointer transition ease-in-out duration-150 text-black opacity-70 absolute right-4 top-4' @click.self="closeModal"></i>

        <div class="absolute left-4 top-4 flex items-center justify-center" v-if="!postData.public">
          <i class='bx bx-lock-alt hover:opacity-100 text-3xl cursor-pointer transition ease-in-out duration-150 text-indigo-700 opacity-70' ></i>
          <p class="text-xs">Private</p>
        </div>

        <div class="absolute left-4 top-4 flex items-center justify-center" v-if="postData.public">
          <i class='bx bx-lock-open-alt hover:opacity-100 text-3xl cursor-pointer transition ease-in-out duration-150 text-indigo-700 opacity-70' ></i>
          <p class="text-xs">Public</p>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  props: ["image" ,"title","tags","date", "entry", "emotion"],
  data(){
    return{
      postData: undefined
    }
  },
  methods: {
    closeModal(){
      this.$store.commit("closeModal")
    },
    displayDeleteModal(entryID){
      this.$store.commit('displayDeleteModal', entryID)
    },
    async getPost(){
        try{
          const res = await fetch(`/api/users/${this.userID}/entries/${this.entryId}`, {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          }
          })
          this.postData = await res.json()
       }
        catch (err){
          window.location.href = "/notfound";
        }

    }
  },
  computed: {
    userID(){
      return this.$store.state.userID
    },
    entryId(){
      return this.$store.state.ModalentryId
    }
  },
  beforeMount(){
    this.getPost()
  }

}
</script>

<style scoped>
.wrapper {
    background-color: rgba(0, 0, 0, 0.7);
}


</style>