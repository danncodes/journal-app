<template>
  <div class="flex flex-col my-4">
      <label class="text-sm font-bold text-indigo-600 tracking-wide">{{ label }}</label>
      <input
        class="w-full text-base px-4 py-2 border-b transform focus:translate-x-3.5
        transition duration-300  border border-gray-300 focus:outline-none rounded focus:border-indigo-500"
        :type="type" :placeholder="placeholder" required @input="updateInput" ref="inputField">
    </div>
</template>

<script>
export default {
    props: ["label", "type", "placeholder"],
    methods: {
        updateInput(){
            switch(this.label) {
            case "Username":
                this.$store.commit("updateUsername", this.$refs.inputField.value)
                break;
            case "Password":
                this.$store.commit("updatePassword", this.$refs.inputField.value)
                break;
            case "Confirm Password":
                this.$store.commit("updateConfirmPassword", this.$refs.inputField.value)
                break;
            case "Firstname":
                this.$store.commit("updateFirstname", this.$refs.inputField.value)
                break;
            case "Lastname":
                this.$store.commit("updateLastname", this.$refs.inputField.value)
                break;
            case "Phone":
                this.$store.commit("updatePhone", this.$refs.inputField.value)
                break;
            case "Title":
                this.$store.commit("updateTitle", this.$refs.inputField.value)
                break;
            case "Tags":
                this.$store.commit("updateTags", this.$refs.inputField.value)
                break;
            default:
                // code block
            }
        }
    }

}
</script>

<style>

</style>