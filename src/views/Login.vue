<template>
    <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
                <v-alert type="error" :value="$store.state.loginErr">
                I'm an error alert.
                </v-alert>
              <v-card flat>
                
                <v-card-text>
                  <v-form>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        prepend-icon="mdi-email"
                    ></v-text-field>
  
                    <v-text-field
                        v-model="pwd"
                        :rules="pwdRules"
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login({email:email, password:pwd})">Login</v-btn>
                  
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
</template>
<script>
import { mapActions } from 'vuex'
  export default {
    data: () => ({
        valid: false,
        pwd: '',
        pwdRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],

        
        

    }),
    methods:{
        ...mapActions(['login']),
        
    },
    created(){
      let token = localStorage.getItem("loginToken")
      console.log("loginpage", token);
    }
  }
</script>