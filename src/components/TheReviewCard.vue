<template>
  <figure class="w-full shadow-md p-4 flex flex-col bg-gray-50 my-8 max-w-custom transform transition
  duration-300 border-t-8 border-indigo-600 rounded hover:-translate-y-2 hover:shadow-2xl" v-if="user">
      <div class="flex justify-between items-center">
          <img :src="user.picture.medium" alt="" class="rounded-full">
          
          <div class="flex flex-col items-end">
              <h1 class="font-normal">{{ user.name.first }} {{ user.name.last }}</h1>
              <h2 class="font-extralight italic text-xs">{{ user.location.city }}</h2>
          </div>
      </div>
      <!-- Stars -->
      <div class="flex w-full justify-end text-yellow-400">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
      </div>
      <figcaption class="flex flex-col text-right mt-2">
         <p class="my-1 text-xs"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, saepe!</p>
         <p class="text-indigo-700 text-xxs">Company Name</p>
      </figcaption>
  </figure>
</template>

<script>
export default {
    data(){
        return {
            user: undefined
        }
    },
    beforeMount(){
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                this.user = data.results[0]
            })
    }

}
</script>

<style scoped>
.text-xxs{
    font-size: 0.6rem;
    line-height: 0.8rem;
}

.max-w-custom{
    max-width: 288px;
}
</style>