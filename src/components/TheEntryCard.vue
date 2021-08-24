<template>
  <figure class="w-full h-24 shadow-md rounded transition duration-300 flex my-2 hover:shadow-2xl
  transform hover:translate-x-4 cursor-pointer" @click="displayModal">
    <img :src="photo" alt="" class="h-full mr-2" v-if="photo">
    <img src="https://images.unsplash.com/photo-1628016283207-ddecbe7fde33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" class="h-full mr-2" v-else>
    <figcaption class="w-full m-2 relative flex flex-col justify-between">
      <div class="w-10/12 overflow-hidden">
        <h1 class="font-semibold">{{ title }}</h1>
        <p class="text-xs my-1 text-indigo-600 font-medium sm:text-sm">{{ tags }}</p>
      </div>
        <p class="text-lg">{{ emotion }}</p>
        <a :href="'/editentry/' + entryID" v-if="UserUid === userID">
          <i class="far fa-edit text-indigo-600 hover:text-indigo-800 cursor-pointer absolute right-2 bottom-2"></i>
        </a>
        <i class="fas fa-ban text-indigo-600 hover:text-indigo-800 cursor-pointer absolute right-2 top-2" @click.self="displayDeleteModal(entryID)" v-if="UserUid === userID"></i>
    </figcaption>
    </figure>
    <TheDeleteConfirmationModal v-if="showDeleteModal"/>
</template>

<script>
import TheDeleteConfirmationModal from '@/components/TheDeleteConfirmationModal.vue'

export default {
  props: ["title", "tags", "emotion", "entryID", "photo", "UserUid"],
  components: { TheDeleteConfirmationModal },
  computed: {
    showDeleteModal(){
      return this.$store.state.showDeleteModal
    },
    userID(){
    return this.$store.state.userID
  },
  },
  methods: {
    displayDeleteModal(entryID){
      this.$store.commit('displayDeleteModal', entryID)
    },
    displayModal(e){
      if(e.target.tagName === "I") return
      this.$store.commit("displayModal", this.entryID)

  },
  }

}
</script>

<style scoped>

</style>