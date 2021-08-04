<template>
  <figure class="w-full h-20 shadow-md rounded transition duration-300 flex my-2 hover:shadow-2xl
  transform hover:translate-x-4 cursor-pointer">
    <img src="../assets/entryimg.jpg" alt="" class="h-full mr-2">
    <figcaption class="w-full m-2 relative">
        <h1 class="font-medium">{{ title }}</h1>
        <p class="text-xs">{{ tags }}</p>
        <p class="text-lg">{{ emotion }}</p>
        <i class="far fa-edit text-indigo-600 hover:text-indigo-800 cursor-pointer absolute right-2 bottom-2"></i>
        <i class="fas fa-ban text-indigo-600 hover:text-indigo-800 cursor-pointer absolute right-2 top-2"></i>
    </figcaption>
    </figure>
</template>

<script>
export default {
  props: ["title", "tags", "emotion"]

}
</script>

<style>

</style>