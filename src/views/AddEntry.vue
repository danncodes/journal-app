<template>
    <TheNavbar />
    <main class="mt-20 lg:mt-0 p-4">
        <section class="sm:w-8/12 sm:mx-auto lg:flex xl:w-9/12 xl:mx-auto 
        lg:mx-0 lg:w-full lg:justify-around lg:items-center lg:h-screen">
        <aside>
            <label class="text-sm font-bold text-indigo-600 tracking-wide">Emotion</label>
            <div class="grid grid-cols-3 gap-1 w-max h-96" ref="emotionContainer">
                <TheEmotion @click="selectEmotion" emoji="😁" emotion="Happy"/>
                <TheEmotion @click="selectEmotion" emoji="😎" emotion="Relaxed"/>
                <TheEmotion @click="selectEmotion" emoji="😊" emotion="Blessed"/>
                <TheEmotion @click="selectEmotion" emoji="😔" emotion="Depressed"/>
                <TheEmotion @click="selectEmotion" emoji="😶" emotion="Neutral"/>
                <TheEmotion @click="selectEmotion" emoji="😪" emotion="Tired"/>
                <TheEmotion @click="selectEmotion" emoji="🙁" emotion="Sad"/>
                <TheEmotion @click="selectEmotion" emoji="😨" emotion="Worried"/>
                <TheEmotion @click="selectEmotion" emoji="😡" emotion="Angry"/>
            </div>
            <label class="text-sm font-bold text-indigo-600 tracking-wide">Photo</label>
            <TheUploadField />
        </aside>
            <div class="md:w-9/12 lg:w-5/12">
                <TheInputField label="Title" type="text" placeholder="Title"/>
                <TheInputField label="Tags" type="text" placeholder="Tags"/>
                <TheTextArea label="Entry"/>
                <TheCheckbox class="my-2"/>
                <div class="w-full flex justify-between">
                    <a href="/dashboard" class="mx-2 w-full">
                        <TheCancelButton btnText="Cancel" class="w-full h-full" />
                    </a>
                    <TheButton btnText="Save" class="mx-2 w-full" />
                </div>
            </div>
        </section>
    </main>

</template>

<script>
import TheButton from '@/components/TheButton.vue'
import TheButton2 from '@/components/TheButton2.vue'
import TheCancelButton from '@/components/TheCancelButton.vue'
import TheModal from '@/components/TheModal.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheFixedAddEntryBtn from '@/components/TheFixedAddEntryBtn.vue'
import TheInputField from '@/components/TheInputField.vue'
import TheUploadField from '@/components/TheUploadField.vue'
import TheTextArea from '@/components/TheTextArea.vue'
import TheEmotion from '@/components/TheEmotion.vue'
import TheCheckbox from '@/components/TheCheckbox.vue'
export default {
    name: 'AddEntry',
    components: { TheButton, TheButton2, TheCancelButton,  TheModal, TheNavbar, TheLogo,
     TheFixedAddEntryBtn, TheInputField, TheTextArea, TheEmotion, TheUploadField, TheCheckbox },
     data(){
         return {
             selectedEmotion: undefined
         }
     },
     methods: {
        selectEmotion(e){
            const emotions = this.$refs.emotionContainer.children

            emotions.forEach(emotion => {
                if(emotion.classList.contains('bg-indigo-600')){
                    emotion.classList.remove('bg-indigo-600')
                    emotion.classList.remove('text-white')
                    
                }
            })
            this.selectedEmotion = e.target
            this.selectedEmotion.classList.add('bg-indigo-600')
            this.selectedEmotion.classList.add('text-white')
        }
     }


}
</script>

<style>

</style>