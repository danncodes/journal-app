<template>
  <div class="hover:shadow-xl transition duration-300 rounded p-4 shadow-md h-48 w-72 border-dashed border-2 flex flex-col justify-around items-center overflow-hidden">
      <i class='bx bx-upload text-5xl text-indigo-600' ></i>
      <div class="overflow-hidden p-1">
          <p class="overflow-ellipsis">{{ fileName }}</p>
      </div>
        <TheButton btnText ="Upload" @click="$refs.realBtn.click()" v-if="!selectedFile"/>

        <div class="flex justify-around">
        <TheCancelButton btnText ="Cancel" @click="cancelUpload" v-if="selectedFile"/>
        <TheButton btnText ="Save" @click="onUpload" v-if="selectedFile"/>
        </div>


      <input type="file" name="" id="" ref="realBtn" hidden @change="fileChosen">
  </div>
</template>

<script>
import TheButton from '@/components/TheButton.vue'
import TheCancelButton from '@/components/TheCancelButton.vue'

export default {
    components: { TheButton, TheCancelButton },
    data(){
        return {
        fileName: "Upload A Photo",
        selectedFile: null
        }
    },
    methods: {
        fileChosen(event){
            if(this.$refs.realBtn.value){
            this.fileName = this.$refs.realBtn.value
            this.selectedFile = event.target.files
            this.$store.commit("selectUploadImage", this.selectedFile[0])
            }
        },
        cancelUpload(){
            this.selectedFile = null
            this.fileName = "Upload A Photo"
        },
        async onUpload(){
            const formData = new FormData()
            const endpoint = "/api/image"

            formData.append("file", this.selectedFile[0])
            
            fetch(endpoint, {
            method: 'POST',
            body: formData
            }).then( () => {
                console.log("File Should be updated")
            }).catch( err => {
                console.error();
            })
            
        }
    }

}
</script>

<style>

</style>