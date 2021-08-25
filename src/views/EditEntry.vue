<template>
    <TheNavbar />
    <div class="mt-20 flex w-full justify-center items-center" v-if="postData">
        <p class="text-center text-sm font-bold text-indigo-600 mr-2">Previous Selection: </p>
        <div class="flex">
            <p class="mx-1">{{ postData.emotion.split(" ")[0] }}</p>
            <p class="font-extralight mx-1">{{ postData.emotion.split(" ")[1] }}</p>
        </div>
    </div>
    <main class="lg:mt-0 p-4" v-if="postData">
        <form class="sm:w-8/12 sm:mx-auto lg:flex xl:w-9/12 xl:mx-auto 
        lg:mx-0 lg:w-full lg:justify-around lg:items-center" @submit.prevent="submitEntry">
        <aside class="mt-8 md:mt-0">
            <label class="text-sm font-bold text-indigo-600 tracking-wide">Emotion</label>
            <div class="grid grid-cols-3 gap-1 w-max h-80" ref="emotionContainer">
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
            <p class="text-xs lg:text-center text-red-600" v-if="submitError">Select an Emotion</p>

            <label class="text-sm font-bold text-indigo-600 tracking-wide">Photo</label>
                <ThePhotoSelector :image="postData.photo"/>
            <!-- <TheUploadField /> -->
        </aside>
            <div class="md:w-9/12 lg:w-5/12">
                <TheInputField label="Title" type="text" :value="postData.title"/>
                <TheInputField label="Tags" type="text" :value="postData.tags"/>
                <TheTextArea label="Entry" :value="postData.entry" />
                <TheCheckbox class="my-2" :checked="postData.public"/>
                <div class="w-full flex justify-between">
                    <a href="/dashboard" class="mx-2 w-full">
                        <TheCancelButton btnText="Cancel" class="w-full h-full" />
                    </a>
                    <TheButton btnText="Save" class="mx-2 w-full" />
                </div>
            </div>
        </form>
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
import ThePhotoSelector from '@/components/ThePhotoSelector.vue'
import { readAPI } from '@/lib/APIHandler'
import { updateAPI } from '@/lib/APIHandler'

export default {
    name: 'EditEntry',
    components: { TheButton, TheButton2, TheCancelButton,  TheModal, TheNavbar, TheLogo,
     TheFixedAddEntryBtn, TheInputField, TheTextArea, TheEmotion, TheUploadField, TheCheckbox, ThePhotoSelector },
     data(){
         return {
             selectedEmotion: undefined,
             submitError: false,
             postData: undefined,
             entryID: undefined
         }
     },
     computed: {
         checkbox(){
            return this.$store.state.checkbox
         },
         textArea(){
            return this.$store.state.textArea
         },
         title(){
            return this.$store.state.title
         },
         tags(){
            return this.$store.state.tags
         },
         emotion(){
            return this.$store.state.selectedEmotion
         },
         userID(){
             return this.$store.state.userID
         },
         selectedImage(){
             return this.$store.state.selectedImage
         },
     },
     mounted(){
         this.getPost()
     },
     methods: {
         setInitialInputValues(){
             this.$store.commit("updateTitle", this.postData.title)
             this.$store.commit("updateTags", this.postData.tags)
             this.$store.commit("updateTextArea", this.postData.entry)
         },
        selectEmotion(e){
            const emotions = this.$refs.emotionContainer.children

            emotions.forEach(emotion => {
                if(emotion.classList.contains('bg-indigo-600')){
                    emotion.classList.remove('bg-indigo-600')
                    emotion.classList.remove('text-white')
                    
                }
            })
            this.selectedEmotion = e.target.children[0].innerText + " " + e.target.children[1].innerText
            e.target.classList.add('bg-indigo-600')
            e.target.classList.add('text-white')

            this.$store.commit('selectEmotion',this.selectedEmotion)
        },
        async getPost(){
            this.entryID = this.$route.params.entryID
            try{

                const res = await readAPI(`/api/users/${this.userID}/entries/${this.entryID}`)

                console.log(res)

                if(res.ok){
                    this.postData = await res.json()
                    this.setInitialInputValues()
                }
            }
            catch (err){
                console.log(err)
                this.$store.commit("logout")
                window.location.href = "/notfound";

            }
        },
        async submitEntry(){
            if(!this.selectedEmotion){
                this.submitError = true
                this.$refs.emotionContainer.classList.add('error')

                setTimeout( () => {
                    this.$refs.emotionContainer.classList.remove('error')

                }, 2000)
                return
            }

            this.submitError = false
            try{

                const res = await updateAPI(`/api/users/${this.userID}/entries/${this.entryID}`, {title: this.title, entry: this.textArea, tags: this.tags,
                    emotion: this.emotion, "public": this.checkbox, "photo": this.selectedImage
                })

                if(res.ok){
                    this.$store.commit("clearUserState")
                    window.location.href = "/dashboard";

                }
            }
            catch (err){
                this.$store.commit("logout")
                window.location.href = "/notfound";
                console.log(err)
            }

        }
     }


}
</script>

<style scoped>

.error{
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