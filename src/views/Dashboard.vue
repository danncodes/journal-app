<template>
  <TheNavbar />
  <!-- All Entries -->
  <main class="mt-16 p-4 min-h-screen md:w-6/12 md:mx-auto lg:w-4/12" v-if="!noEntries">
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />
      <TheEntryCard />

  </main>

  <!-- No Entries -->
    <main class="flex flex-col justify-center items-center min-h-screen" v-if="noEntries">
        <h1 class="font-medium text-indigo-700 text-2xl">You Have no Entries</h1>
        <img src="../assets/noentries.svg" alt="" class="h-96">
        <a href="#">
            <TheButton btnText="Add New Entry"/>
        </a>
        <TheRisingCircles />
    </main>
    <TheFixedAddEntryBtn />
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

export default {
    name: 'Dashboard',
    components: { TheButton, TheButton2, TheModal, TheNavbar, TheLogo, TheFixedAddEntryBtn, TheEntryCard, TheRisingCircles },
    data(){
        return {
            noEntries: false
        }
    }
}
</script>

<style>

</style>