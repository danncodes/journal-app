<template>
<button class="hover:bg-gray-600 hover:text-white hover:shadow-md hover:-translate-y-2 bg-gray-300 border-gray-500 transform shadow transition ease-in-out duration-300 text-gray-500 py-2 px-8 rounded" type="button">{{ btnText }}</button>
</template>

<script>
export default {
    props: ["btnText"]

}
</script>

<style>

</style>