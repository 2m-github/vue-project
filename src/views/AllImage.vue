

<template>
<div>
  <v-row class="pa-6">
    <v-col
      v-for="(imgs,index) in readFiles"
      :key="index"
      class="d-flex child-flex pa-2"
      cols="6"
      xs6
    >
      <v-img
        :src="imgs.Link"
        :alt="imgs.name"
        aspect-ratio="1"
        class="grey lighten-2"
        @click="imgDetail(imgs.Link,imgs.name)"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
  <!-- image detail page  -->
  <image-detail :dialog="dialog" :imgSrc="imgSrc" :imgTitle="imgTitle" @dialogClose="dialogClose" @defaultDetailIMG="defaultDetailIMG" @defaultDetailTitle="defaultDetailTitle" />
</div>
</template>

<script>
import { mapActions } from "vuex";
import ImageDetail from './ImageDetail.vue'

export default {
    name: 'AllImage',
    components:{
      ImageDetail
    },
    data() {
        return {
            dialog: false,
            readFiles:[],
            imgSrc:null,
            imgTitle:null
        }
    },
    methods: {
        
        async read(){
            //this.ImgName = document.getElementById('namebox').value
            let snapshot = await this.$firebase.firestore().collection('imgInfo').get().catch(err => console.log(err))
            console.log("snapshot_read",snapshot)
            this.readFiles = [];
            if (snapshot != null || snapshot != undefined){
                snapshot.forEach(element => {
                    
                    
                    this.readFiles.push(element.data())
                });
            }
            else{
                alert("no");
            }
        },
        imgDetail(src,name){
          this.dialog = true,
          this.imgSrc = src;
          this.imgTitle = name;
        },
        dialogClose(bool){
          this.dialog = bool
        },
        defaultDetailIMG(url){
          this.imgSrc = url
        },
        defaultDetailTitle(name){
          this.imgTitle = name
        }
        

    },
    created(){
        this.read()
    }
}
</script>