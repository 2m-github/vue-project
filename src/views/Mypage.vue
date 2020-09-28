<template>
    <div>
    <h1>mypage</h1>
        <v-btn @click="logout">로그아웃</v-btn>
        
    </div>
</template>

<script>
export default {
    name:'Mypage',
    methods:{
        logout(){
            if (this.$firebase.auth().currentUser) {
                // [START signout]
                this.$firebase.auth().signOut();
                // [END signout]
                this.$store.state.loginSuccess = false
                this.$router.push({name:'Home'})
            } 
            
        }
    }
}
</script>