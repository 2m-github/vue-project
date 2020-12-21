<template>
    <v-bottom-navigation
        v-model="activeBtn"
        fixed
        color="red"
      >
        <v-btn icon value="home" router :to="{name:'Home'}" exact>
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon value="image" router :to="{name:'AllImage'}" exact>
          <span>Image</span>
          <v-icon>mdi-image</v-icon>
        </v-btn>

        <v-btn icon value="file" router :to="{name:'FileUpload'}" exact>
          <span></span>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
        

        <v-btn icon value="favorites" router :to="{name:'WheelDraw'}" exact>
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon value="mypage" router :to="{name:'Mypage'}" exact>
          <span>Mypage</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
</template>

<script>
export default {
    name:'FileUpload',
    data(){
        return {
            activeBtn:"home"
        }
    }
}
</script>

<style scoped>
.v-item-group.v-bottom-navigation .v-btn {
    flex:1;
    min-width:60px;
}
.v-item-group.v-bottom-navigation .v-btn:nth-child(3) {flex: 0.5;}
</style>