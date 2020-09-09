<template>
    <div>
        <div>
            <v-text-field label="Main input" v-model="name"></v-text-field>
            <v-text-field label="Another input" v-model="age"></v-text-field>
        </div>

        <v-card
            class="d-flex pa-2"
            outlined
            tile
        >
            <v-col class="d-flex">
                <UserDetail
                    :name="name"
                    :age="age"
                />
            </v-col>
            <v-col class="d-flex">
                <UserEdit
                    :propsName="name"
                    :propsAge="age"
                    @infoChange="parents"
                />
            </v-col>
        </v-card>
        
    </div>
</template>

<script>
import UserEdit from './UserEdit.vue'
import UserDetail from './UserDetail.vue'
export default {
    components:{
        UserEdit,
        UserDetail
    },
    data() {
        return {
            name:"홍길동",
            age:"33"
        }
    },
    methods:{
        parents(user){
            this.name = user.name
            this.age = user.age
        }
    }
}
</script>