<template>
  <div class="flex flex-col my-4 w-72">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="" class="h-64 w-full mb-4 object-contain" ref="selectedImage" v-if="!image">
      <img :src="image" alt="" class="h-64 w-full mb-4 object-contain" ref="selectedImage" v-if="image">
      <div class="grid grid-cols-3 gap-2 h-48 w-full px-2 overflow-x-scroll justify-items-center">
          <img src="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1444&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1542685295-b280fd4d2c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1628533460851-20236fc62150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="" class="opacity-80 h-20 w-full  hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1620463973332-d3f7d25f910c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1487326785089-0c5d85ce7b33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1516147080806-4dd7b04cc1a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1478380967566-2721c6568d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1567015600247-5feb4d2b72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1619734352079-8ee04a56fd3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1524088484081-4ca7e08e3e19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1597176116047-876a32798fcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1607703335321-782a175d166f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1551818567-d49550a81408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1557148353-009729a39979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1550778323-71868c7dea39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1572976593033-96aa165b68df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1609743522471-83c84ce23e32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1367&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1525120334885-38cc03a6ec77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1521964156303-05e95416334e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1588211500239-39d78ed7b505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1628016283207-ddecbe7fde33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1629212346682-4890b9d73992?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1629233796529-4a04bf1aee52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1629192328433-d04123a051d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1629221892514-7abb71a803f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">
          <img src="https://images.unsplash.com/photo-1629118365836-d6ff579b1843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="opacity-80 h-20 w-full hover:opacity-100 transform transition-all duration-300 cursor-pointer" @click="selectImage">

      </div>
  </div>
</template>

<script>
export default {
    props: ["image"],
    data(){
        return {
            selectedImage: undefined
        }
    },
    methods: {
        selectImage(e){
        this.$refs.selectedImage.src = e.target.src
        this.selectedImage = e.target.src
        this.$store.commit("imageSelected", this.selectedImage)
        }
    }

}
</script>

<style>

</style>