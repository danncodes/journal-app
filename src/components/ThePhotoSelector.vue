<template>
  <div class="flex flex-col my-4 w-72">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="" class="h-64 w-full mb-4 object-contain" ref="selectedImage">
      <div class="grid grid-cols-3 gap-2 h-48 w-full px-2 overflow-x-scroll justify-items-center">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="../assets/entryimg.jpg" alt="" class="opacity-80 h-20 hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            selectedImage: undefined
        }
    },
    methods: {
        selectImage(e){
        this.$refs.selectedImage.src = e.target.src
        }
    }

}
</script>

<style>

</style>