<template>
<header class="h-16 w-full bg-gray-50 px-4 flex items-center  justify-between fixed top-0 z-20">
    
    <!-- Hamburger Menu and Close Icon -->
    <i v-if="showNav" @click="toggleNav" class='bx bx-x text-3xl cursor-pointer transition ease-in-out duration-150 text-black opacity-70' ></i>
    <i v-if="!showNav" @click="toggleNav" class='bx bx-menu-alt-right text-3xl cursor-pointer transition ease-in-out duration-150 text-black opacity-70 hover:opacity-100' ></i>

    <!-- User -->
    <i class='bx bxs-user-circle text-3xl text-black opacity-70 hover:opacity-100' ></i>

</header>
<transition name="slidenav">
    <nav v-if="showNav" class="md:w-64 w-16 h-screen bg-indigo-600 rounded pt-20 flex flex-col justify-between items-center fixed left-0 z-10 shadow">
        <section class="flex flex-col items-center text-gray-200 my-4 md:w-full md:px-4">
            <a href="/dashboard" :class="{'border-l-4 px-2 border-white border-opacity-80 text-white' : activePage.dashboard}" class="text-2xl hover:text-white transition duration-300 ease-in-out my-4 md:flex md:w-full md:justify-between md:items-center">
                <p class="text-base hidden md:block">Dashboard</p>
                <i class='bx bxs-dashboard' ></i>
            </a>
            <a href="/addentry" :class="{'border-l-4 px-2 border-white border-opacity-80 text-white' : activePage.addEntry}" class="text-2xl hover:text-white transition duration-300 ease-in-out my-4 md:flex md:w-full md:justify-between md:items-center">
                <p class="text-base hidden md:block">New Entry</p>
                <i class='bx bxs-add-to-queue' ></i>
            </a>
            <a href="/discover" :class="{'border-l-4 px-2 border-white border-opacity-80 text-white' : activePage.discover}" class="text-2xl hover:text-white transition duration-300 ease-in-out my-4 md:flex md:w-full md:justify-between md:items-center">
                <p class="text-base hidden md:block">Discover</p>
                <i class='bx bx-search-alt-2' ></i>
            </a>
            <!-- <a href="/settings" class="text-2xl text-white opacity-80 hover:opacity-100 transition duration-300 ease-in-out my-4 md:flex md:w-full md:justify-between md:items-center">
                <p class="text-base hidden md:block">Settings</p>
                <i class='bx bxs-user-detail'></i>
            </a> -->

        </section>

        <section class="flex flex-col mb-44 md:w-full md:px-4 text-gray-200">

            <a href="/" class="text-2xl hover:text-white transition duration-300 ease-in-out my-4 md:flex md:w-full md:justify-between md:items-center" @click="logout">
                <p class="text-base hidden md:block">Logout</p>
                <i class='bx bx-log-out' ></i>
            </a>
        </section>
    </nav>
</transition>
  
</template>

<script>
export default {
    data(){
        return {
            activePage: {
                dashboard: false,
                discover: false,
                addEntry: false
            }
        }
    },
    computed: {
        showNav(){
            return this.$store.state.showNav
        }
    },
    methods: {
        toggleNav(){
            this.$store.commit('toggleNav')
        },
        logout(){
            this.$store.commit('logout')
        }
    },
    mounted(){
        if(window.location.href.split('/')[window.location.href.split('/').length-1] === "dashboard"){
            this.activePage.dashboard = true
            this.activePage.discover = false
            this.activePage.addEntry = false
        }
        else if(window.location.href.split('/')[window.location.href.split('/').length-1] === "discover"){
            this.activePage.dashboard = false
            this.activePage.discover = true
            this.activePage.addEntry = false
        }
        else if(window.location.href.split('/')[window.location.href.split('/').length-1] === "addentry") {
            this.activePage.dashboard = false
            this.activePage.discover = false
            this.activePage.addEntry = true
        }
    }

}
</script>

<style scoped>
.slidenav-enter-from{
        transform: translateX(-200px);
}
.slidenav-enter-to{
    transform: translateX(0);
}
.slidenav-enter-active{
    transition: 300ms ease-in;
}

.slidenav-leave-from{
    transform: translateX(0);
}
.slidenav-leave-to{
    transform: translateX(-100%);
}
.slidenav-leave-active{
    transition: 300ms ease-out;
}


</style>