<template>
<TheNavbar />
<div class="mt-16 h-screen w-full flex items-center justify-center lg:justify-between">

  <div class="hidden lg:flex h-full items-center justify-center w-6/12 shadow-md bg-indigo-600 lg:w-7/12 xl:w-8/12">
    <img src="../assets/settings1.svg" alt="" class="max-h-full">
  </div>

  <form class="m-4 w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12">

  <h1 class="mb-8 font-medium text-3xl text-indigo-600 lg:text-white absolute top-20 left-8">User Settings</h1>
  <img src="../assets/settings.svg" alt="" class="absolute top-20 right-2 h-48">

  <TheInputField label="Username" type="text" placeholder="JohnDoe91" class="md:mx-2"/>

  <div class="md:flex md:justify-between">
    <TheInputField label="Password" type="password" class="md:w-6/12 md:mx-2" />
    <TheInputField label="Confirm Password" type="password" class="md:w-6/12 md:mx-2" />
  </div>

  <div class="md:flex md:justify-between">
    <TheInputField label="Firstname" type="text" placeholder="John" class="md:w-6/12 md:mx-2"/>
    <TheInputField label="Lastname" type="text" placeholder="Doe" class="md:w-6/12 md:mx-2"/>
  </div>

  <TheInputField label="Phone" type="tel" placeholder="07912312310" class="md:mx-2"/>

  <div class="w-full md:flex md:justify-center">
    <TheButton class="w-full mt-8 md:max-w-sm md:mx-2" btnText="Save Changes"/>
  </div>

  </form>

<ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
  </ul>
</div>
</template>

<script>
import TheInputField from '@/components/TheInputField.vue'
import TheButton from '@/components/TheButton.vue'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: { TheInputField, TheButton, TheNavbar },

}
</script>

<style scoped>

/*remove custom style*/
  .circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}
  .circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;  
}
.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}
 
 
.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
 
.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}
 
.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}
 
.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}
 
.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}
 
.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}
 
.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}
 
.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}
 
.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
  @keyframes animate {
 
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
 
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
  }

</style>