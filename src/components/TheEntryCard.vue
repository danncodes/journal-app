<template>
  <figure class="w-full h-24 shadow-md rounded transition duration-300 flex my-2 hover:shadow-2xl
  transform hover:translate-x-4 cursor-pointer">
    <img src="../assets/entryimg.jpg" alt="" class="h-full mr-2">
    <figcaption class="w-full m-2 relative flex flex-col justify-between">
      <div class="w-10/12 overflow-hidden">
        <h1 class="font-semibold">{{ title }}</h1>
        <p class="text-xs my-1 text-indigo-600 font-medium sm:text-sm">{{ tags }}</p>
      </div>
        <p class="text-lg">{{ emotion }}</p>
        <i class="far fa-edit text-indigo-600 hover:text-indigo-800 cursor-pointer absolute right-2 bottom-2" @click="editEntry"></i>
        <i class="fas fa-ban text-indigo-600 hover:text-indigo-800 cursor-pointer absolute right-2 top-2" @click="deleteEntry"></i>
    </figcaption>
    </figure>
</template>

<script>
export default {
  props: ["title", "tags", "emotion"],
  methods: {
    deleteEntry(){
      console.log("Delete")
    },
    editEntry(){
      console.log("Edit")
    }
  }

}
</script>

<style>

</style>