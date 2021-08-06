<template>
  <div class="wrapper flex justify-center items-center h-screen w-screen fixed top-0 left-0 backdrop-blur-3xl z-40">
      <div class="p-8 bg-white flex flex-col justify-center items-center rounded text-center">
          <i class='bx bxs-trash text-8xl text-indigo-600 my-2' ></i>
          <div class="w-8/12">
            <h1 class="font-semibold">Are You Sure?</h1>
            <p class="my-4">This process cannot be undone</p>
          </div>
          <div class="w-full flex justify-around">
              <TheCancelButton btnText="No" class="w-5/12" @click="closeDeleteModal"/>
              <TheButton btnText="Yes" class="w-5/12" @click="confirmEntryDelete"/>
            </div>
      </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton.vue'
import TheCancelButton from '@/components/TheCancelButton.vue'

export default {
    components: { TheButton, TheCancelButton },
    props: ["entryID"],
    computed: {
        deleteModalEntryID(){
            return this.$store.state.deleteModalEntryID
        },
        userID(){
             return this.$store.state.userID
        }
    },
    methods: {
        closeDeleteModal(){
            this.$store.commit("closeDeleteModal")
        },
        async confirmEntryDelete(){
            try{
          await fetch(`/api/users/${this.userID}/entries/${this.deleteModalEntryID}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
          }).then(()=> {
              this.$store.commit("closeDeleteModal")
              window.location.href = "/dashboard"
          })
       }
        catch (err){
        }
        }
    }

}
</script>

<style scoped>
.wrapper {
    background-color: rgba(0, 0, 0, 0.7);
}

</style>