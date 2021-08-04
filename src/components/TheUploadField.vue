<template>
  <div class="hover:shadow-xl transition duration-300 rounded p-4 shadow-md h-48 w-72 border-dashed border-2 flex flex-col justify-around items-center overflow-hidden">
      <i class='bx bx-upload text-5xl text-indigo-600' ></i>
      <div class="overflow-hidden p-1">
          <p class="overflow-ellipsis">{{ fileName }}</p>
      </div>
      <TheButton btnText ="Upload" @click="toggleClick"/>

      <input type="file" name="" id="" ref="realBtn" hidden @change="fileChosen">
  </div>
</template>

<script>
import TheButton from '@/components/TheButton.vue'

export default {
    components: { TheButton },
    data(){
        return {
        fileName: "Upload A Photo"
        }
    },
    methods: {
        toggleClick(){
            this.$refs.realBtn.click()
        },
        fileChosen(){
            if(this.$refs.realBtn.value){
            this.fileName = this.$refs.realBtn.value
            }
        }
    }

}
</script>

<style>

</style>