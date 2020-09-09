<template>
    <div>
        <v-card
            flat
            class="mx-auto"
            v-for="user in delayUsers"
            :key="user.id"
        >
            <v-list-item>
                <v-list-item-avatar color="grey">
                    <v-img :src="user.avatar"></v-img>

                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{ user.first_name }} {{ user.last_name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img
                :src="user.avatar"
                height="194"
            ></v-img>

            <v-card-text>
                Visit ten places on our planet that are undergoing the biggest changes today.
            </v-card-text>

            <v-card-actions>
                <v-btn
                    text
                    color="deep-purple accent-4"
                >
                    Read
                </v-btn>
                <v-btn
                    text
                    color="deep-purple accent-4"
                >
                    Bookmark
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { delayedInfoAPI } from '@/store/view/api.js'
export default {
    data() {
        return {
            delayUsers:{}
        }
    },
    methods: {
        delayedData(){
            delayedInfoAPI().then(users => {
                
                this.delayUsers = users.data
                console.log(this.delayUsers)
            })
        }
    },
    created(){
        this.delayedData();
    }
}
</script>