<template>
<TheNavbar />

  <!-- All Entries -->
  <main class="mt-16 p-4 min-h-screen md:w-8/12 sm:mx-auto lg:w-6/12 sm:w-10/12 xl:w-4/12" v-if="postLength > 0">
      <TheEntryCard v-for="entry in allEntries" :key="entry.entryID" :title="entry.title" :tags="entry.tags" :emotion="entry.emotion.split(' ')[0]" :entryID="entry.entryID" :photo="entry.photo" :UserUid="entry.UserUid"/>
  </main>

  <!-- No Entries -->
    <main class="flex flex-col justify-center items-center min-h-screen" v-if="postLength === 0">
        <h1 class="font-medium text-indigo-700 text-2xl">You Have no Entries</h1>
        <img src="../assets/noentries.svg" alt="" class="h-96">
        <a href="/addentry">
            <TheButton btnText="Add New Entry"/>
        </a>
        <TheRisingCircles />
    </main>
    <TheFixedAddEntryBtn />
    <TheModal v-if="showModal"/>
</template>

<script>
import TheButton from '@/components/TheButton.vue'
import TheButton2 from '@/components/TheButton2.vue'
import TheModal from '@/components/TheModal.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheFixedAddEntryBtn from '@/components/TheFixedAddEntryBtn.vue'
import TheEntryCard from '@/components/TheEntryCard.vue'
import TheRisingCircles from '@/components/TheRisingCircles.vue'
import { readAPI } from '@/lib/APIHandler'

export default {
    name: 'Discover',
    components: { TheButton, TheButton2, TheModal, TheNavbar, TheLogo, TheFixedAddEntryBtn, TheEntryCard, TheRisingCircles },
    data(){
        return {
            allEntries: undefined,
            postLength: 0
        }
    },
    computed: {
        userID(){
            return this.$store.state.userID
        },
        showModal(){
            return this.$store.state.showModal
        }
    },
    beforeMount(){
        this.fetchPosts()
    },
    methods: {
        async fetchPosts(){
            try{
                const res = await readAPI(`/api/users/entries`)

                if(res.ok){
                    const data = await res.json()
                    this.allEntries = data
                    this.postLength = this.allEntries.length
                }
                else{
                    this.postLength = 0

                }
            }
            catch (err){
                console.log(err)
                window.location.href = "/notfound";
            }
        }
    }

}
</script>

<style>

</style>