<template>
  
    <v-app-bar
       class="top-bar"
      color="white"
      elevate-on-scroll
      dense
      fixed
      height="35"
    >
      <!-- <v-app-bar-nav-icon width="35" height="35" ></v-app-bar-nav-icon> -->

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="ico-profile">
         
            <v-img :src="fbPhoto" alt="" />
       
      </div>
      
    </v-app-bar>


</template>
<script>
import { mapState } from 'vuex'
export default {
    
    computed:{
        ...mapState(['fbPhoto'])
    },
}
</script>