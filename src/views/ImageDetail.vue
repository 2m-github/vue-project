<template>
    <v-dialog
      v-model="dialog"
      eager
      fullscreen
      transition="dialog-bottom-transition"
      content-class="image-detail-popup"
    >
    <v-app-bar
        absolute
        color="deep-purple accent-4"
        dark
      >
        <v-icon @click="dialogClose()">mdi-backspace-outline</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Collapsing Bar</v-toolbar-title>

        <v-spacer></v-spacer>
        
      </v-app-bar>
    <v-card
      flat
      rounded="0"
      class="dialog-wrap"
    >
      
      
     <div class="image_detail_img">
         <pinch-zoom>
            <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" alt="" />
         </pinch-zoom>
         <h2 class="image_detail_title">{{imgTitle}}</h2>
     </div>
     <div class="writer">
         <div class="writer_profile">
            <img :src="writerProfile" alt="" />
         </div>
         <div class="wirter_id">my123@email.com33</div>
     </div>
     

    </v-card>
  </v-dialog>
</template>

<script>
import PinchZoom from 'vue-pinch-zoom'
export default {
    name:'ImageDetail',
    components:{
      PinchZoom
    },
    props:{
        dialog:{
            type: Boolean,
            default: false
        },
        imgSrc:{
          type: String,
          default:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        imgTitle:{
          type: String,
          default:''
        }
    },
    
    data(){
        return {
            isShowDialog: false,
            src: null,
            writerProfile: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            count:10
        }
    },
    methods:{
        dialogClose(){
          this.isShowDialog = false;
          this.$emit('dialogClose',this.isShowDialog)
          this.$emit('defaultDetailIMG','https://cdn.vuetifyjs.com/images/cards/docks.jpg')
          this.$emit('defaultDetailTitle','')
        }
    },
    mounted(){

    }
}
</script>
