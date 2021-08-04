<template>
<!-- Alt Header/Nav -->
  <header class="h-16 w-full shadow p-2 sm:px-10 flex justify-between items-center">
    <TheLogo />
    <a href="/signup">
      <TheButton2 btnText="Register"/>
    </a>
  </header>
  <!-- Main Section -->
  <main class="p-4">

    <!-- Jouranal Image and Main Info Section -->
    <section class="p-4 lg:flex lg:flex-row-reverse lg:justify-between xl:justify-center xl:w-8/12 xl:mx-auto">
      <img src="../assets/homeimg.svg" alt="" class="md:mx-auto xl:ml-0">
      <div class="md:mb-10 md:mx-auto md:w-10/12 lg:flex lg:flex-col lg:justify-end lg:p-4 lg:w-5/12 xl:mr-0">
          <h1 class="text-3xl">Journal Site</h1>
          <h2 class="text-lg font-light my-4">Document your thoughts and feelings, keep them pricate or share them with the wider community</h2>
          <div class="w-full md:w-8/12 flex justify-between my-4">
            <a href="/signup" class="w-6/12 mr-2 md:w-full">
              <TheButton2 btnText="Register" class="w-full h-full"/>
            </a>
            <a href="/login" class="w-6/12 mr-2 md:w-full">
              <TheButton btnText="Login" class="w-full h-full"/>
            </a>
        </div>
      </div>
    </section>

    <!-- Benefits of Journal Section -->
    <section class="flex flex-col my-4">
      <h1 class="text-2xl font-normal text-center my-8">Benefits of keeping a Journal?</h1>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center lg:mx-10 xl:mx-auto xl:w-8/12">
        <div class="w-full flex flex-col items-center justify-between"> 
          <img src="../assets/reflect.svg" alt="">
          <p class="text-md text-center mt-1">Organise Your Thoughts</p>
        </div>
        <div class="w-full flex flex-col items-center justify-between"> 
          <img src="../assets/creativity.svg" alt="">
          <p class="text-md text-center mt-1">Set & Achieve Goals</p>
        </div>
        <div class="w-full flex flex-col items-center justify-between"> 
          <img src="../assets/goals.svg" alt="">
          <p class="text-md text-center mt-1">Allow Yourself to Reflect</p>
        </div>
        <div class="w-full flex flex-col items-center justify-between"> 
          <img src="../assets/organise.svg" alt="">
          <p class="text-md text-center mt-1">Inspire Creativity</p>
        </div>
        
      </div>
    </section>
  </main>

  <!-- Reviews -->
  <section class="w-full bg-indigo-50">
    <article class="p-4 xl:flex xl:w-9/12 xl:mx-auto xl:items-center">
      <h1 class="text-2xl font-normal text-center my-8 xl:hidden">User Reviews</h1>
      <img src="../assets/reviews.svg" alt="" class="h-96 mx-auto">
        <!-- Card Section -->
      <div class="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 lg:w-10/12 lg:mx-auto xl:grid-cols-2 xl:w-5/12">
        <TheReviewCard />
        <TheReviewCard />
        <TheReviewCard />
        <TheReviewCard />
      </div>
    </article>
    <TheRisingCircles />
  </section>

</template>

<script>
// @ is an alias to /src
import TheButton from '@/components/TheButton.vue'
import TheButton2 from '@/components/TheButton2.vue'
import TheModal from '@/components/TheModal.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheReviewCard from '@/components/TheReviewCard.vue'
import TheRisingCircles from '@/components/TheRisingCircles.vue'

export default {
  name: 'Home',
  components: { TheButton, TheButton2, TheModal, TheNavbar, TheLogo, TheReviewCard, TheRisingCircles }
}
</script>

<style scoped>

</style>
