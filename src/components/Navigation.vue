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

        <v-btn icon value="image" router :to="{name:'Image'}" exact>
          <span>Image</span>
          <v-icon>mdi-image</v-icon>
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
}
</style>