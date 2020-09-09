<template>
  <div class="about">
    <v-row dense>
        <v-col
          v-for="user in users"
          :key="user.id"
          
        >
          <v-card>
            <v-img
              :src="user.avatar"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              
            >
              <v-card-title v-text="user.first_name + ' ' + user.last_name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
  </div>
</template>

<script>
import { usersInfoAPI } from '@/store/view/api.js'
export default {
  data(){
    return{
      users:{}
    }
  },
  methods:{
    usersInfoData(){
      usersInfoAPI().then(data => {
        this.users = data.data
      })
    }
  },
  mounted(){
    this.usersInfoData()
  }
}
</script>
