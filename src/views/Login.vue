<template>
<div class="h-screen w-full flex items-center justify-center lg:justify-between">

  <div class="hidden lg:flex h-full items-center justify-center w-6/12 shadow-md bg-indigo-600 lg:w-7/12 xl:w-8/12">
    <img src="../assets/login.svg" alt="">
  </div>

  <img src="../assets/lock.svg" alt="" class="absolute top-2 right-2 h-48">
  <h1 class="mb-8 font-medium text-3xl text-indigo-600 lg:text-white absolute top-8 left-8">Login</h1>

  <form class="m-4 max-w-lg w-full" @submit.prevent="submitForm" ref="form">

  <p class="text-xs text-center text-red-600" v-if="loginError">Incorrect Username or Password</p>

  <TheInputField label="Username" type="text" placeholder="JohnDoe91" class="md:mx-2"/>
  <TheInputField label="Password" type="password" class="md:mx-2" />

  <div class="w-full md:flex md:justify-center">
    <TheButton class="w-full mt-8 md:max-w-sm md:mx-2" btnText="Login"/>
  </div>
  <a class="flex w-full justify-center m-4 font-light" href="/signup">
    <p>Not Registered?</p> <p class="mx-2 text-indigo-700">Sign Up</p>
  </a>

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
import { createAPI } from '@/lib/APIHandler'


export default {
  components: { TheInputField, TheButton },
  data(){
    return {
      loginError: false
    }
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    password(){
      return this.$store.state.password
    },
    userID(){
      return this.$store.state.userID
    }
  },
  methods: {
    async submitForm(){
      try{

        const res = await createAPI("/api/signIn", {username: this.username, password: this.password})

        if(res.ok){
          const jwtToken = await res.json()
          localStorage.setItem("jwt", jwtToken.token)
          const userId = JSON.parse(atob(localStorage.getItem("jwt").split('.')[1])).userId
          this.storeUserID(userId)
          this.loginError = false 
          window.location.href = "/dashboard";
        } 
      }
      catch (err){
        this.loginError = true 
        this.$refs.form.classList.add('login-error')
        setTimeout( () => {
          this.$refs.form.classList.remove('login-error')
        },2000)
      }

    },
    storeUserID(userId){
      this.$store.commit("storeUserID", userId)
    }
  }

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

   .login-error{
    animation: shake 1s ease-in-out;
  }

  @keyframes shake {
 
    0%{
        transform: translateX(-16px);
    }

    20%{
        transform: translateX(16px);
    }

    40%{
        transform: translateX(-8px);
    }
    
    60%{
        transform: translateX(8px);
    }

    70%{
        transform: translateX(-2px);
    }

    80%{
        transform: translateX(2px);
    }
 
    100%{
        transform: translateY(0px)
    }
  }

</style>