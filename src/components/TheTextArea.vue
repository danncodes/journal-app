<template>
  <div class="flex flex-col my-4">
        <label class="text-sm font-bold text-indigo-600 tracking-wide">{{ label }}</label>
        <textarea name="" id="" cols="30" rows="10" class="w-full text-base px-4 py-2 border-b transform focus:translate-x-3.5
        transition duration-300  border border-gray-300 focus:outline-none rounded focus:border-indigo-500" :placeholder="placeholder" :value="value" required @input="updateTextArea"></textarea>
    </div>
</template>

<script>
export default {
    props: ["label","placeholder", "value"],
    methods: {
        updateTextArea(e){
            this.$store.commit("updateTextArea", e.target.value)  
        }
    }

}
</script>

<style>

</style>