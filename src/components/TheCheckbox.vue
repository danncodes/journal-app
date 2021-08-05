<template>
<div class="flex justify-between items-center p-2 max-w-max">
  <input type="checkbox" name="" id="" class="mr-4" @change="toggleCheckbox" :checked="checked">
  <label class="text-sm font-bold text-indigo-600 tracking-wide">Share Publicly</label>
</div>
</template>

<script>
export default {
  props: ["checked"],
  methods: {
    toggleCheckbox(e){
      this.$store.commit("toggleCheckbox", e.target.checked)
    }
  },

}
</script>

<style>

</style>