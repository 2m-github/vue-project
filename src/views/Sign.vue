<template>
    <div>
        <v-card>
            <v-card-title>
                로그인
            </v-card-title>
            <!-- <v-text-field
                v-model="email"
                label="E-mail"
                required
                prepend-icon="mdi-email"
            ></v-text-field>

            <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
            ></v-text-field>
            <v-btn @click="signEmail">
                <v-icon>mdi-email</v-icon>
            </v-btn> -->

            <v-btn @click="signGoogle">
                <v-icon>mdi-google</v-icon>
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Sign',
    data(){
        return {
            email:null,
            password:null
        }
    },
    methods:{
        async signGoogle(){
            let provider = new this.$firebase.auth.GoogleAuthProvider();
            this.$firebase.auth().languageCode = 'zh';
            let r = await this.$firebase.auth().signInWithPopup(provider);
            console.log(r)
        },
        async signEmail(){
            let r2 = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            console.log("email=====",r2)
        }
    }
}
</script>