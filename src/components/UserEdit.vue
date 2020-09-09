<template>
    <v-container>
        <h1>입력 페이지</h1>
        <v-row>
            <v-text-field label="name" v-model="user.name"></v-text-field>
        </v-row>
        <v-row>
            <v-text-field label="age" v-model="user.age"></v-text-field>
        </v-row>
        <v-row class="d-flex">
            
                <v-btn 
                    rounded 
                    color="primary" 
                    dark
                    @click="infoUpdate"
                >
                    수정
                </v-btn>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:{
        propsName:{
            type:String,
            default:null
        },
        propsAge:{
            type:String,
            default:null
        }
    },
    data(){
        return{
            user:{}
        }
    },
    created(){
        this.user.name = this.propsName
        this.user.age = this.propsAge
    },
    methods:{
        infoUpdate(){
            this.$emit('infoChange', this.user);
        }
    }
}
</script>