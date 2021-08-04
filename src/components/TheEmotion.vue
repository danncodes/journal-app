<template>
  <div class="shadow flex flex-col justify-center items-center rounded duration-300 cursor-pointer p-2 hover:bg-indigo-400 hover:text-white hover:shadow-2xl w-24 max-h-24">
      <p class="pointer-events-none">{{ emoji }}</p>
      <p class="text-xs pointer-events-none">{{ emotion }}</p>
  </div>
</template>

<script>
export default {
  props: ["emotion", "emoji"]

}
</script>

<style>

</style>