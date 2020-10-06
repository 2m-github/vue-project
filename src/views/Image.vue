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
        <img id="myimg" style="width:200px; height:200px;" src="" alt="" /><br>
        img name = <v-text-field id="namebox"></v-text-field>
        <label for="" id="UpProgress"></label><br>
        <v-btn @click="select">select</v-btn><br>
        <v-btn @click="upload">upload</v-btn>
        <v-btn @click="read">read</v-btn>
        <ul>
            <li v-for="(imgs,index) in readFiles" :key="index">
                <img :src="imgs.Link" :alt="imgs.name">
            </li>
        </ul>
    </div>
</template>

<script>
import { delayedInfoAPI } from '@/store/view/api.js'
export default {
    data() {
        return {
            delayUsers:{},
            ImgName:null,
            ImgUrl:null,
            files:[],
            readFiles:[]
        }
    },
    methods: {
        delayedData(){
            delayedInfoAPI().then(users => {
                
                this.delayUsers = users.data
                console.log(this.delayUsers)
            })
        },
        select(e){
            var input = document.createElement('input');
            input.type = 'file';
            
            input.onchange = e => {
                this.files = e.target.files;
                console.log(this.files);
                let reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                console.log("url=====",this.files[0]);
                reader.onload = function(){
                    console.log("a=====",reader.result);
                    document.getElementById("myimg").src = reader.result
                }
                
                
            }
            input.click();
        },
        upload (){
            this.ImgName = document.getElementById('namebox').value;
            var uploadTask = this.$firebase.storage().ref('images/' + this.ImgName + ".jpg").put(this.files[0])
            console.log("up:==",uploadTask)
            uploadTask.on('state_changed', function(snapshot){
                
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('UpProgress').innerHTML = "업로드"+progress+"%";
            },
            function(error){
                alert('error img');
            },
            ()=>{
                console.log("add====")
                uploadTask.snapshot.ref.getDownloadURL().then(async url => {
                    this.ImgUrl = url;

                    let r = await this.$firebase.firestore().collection('imgInfo').add({
                        name : this.ImgName,
                        Link: this.ImgUrl
                    })
                    // this.$firebase.database().ref('Pictures/'+this.ImgName).set({
                    //     Name: this.ImgName,
                    //     Link: this.ImgUrl
                    // })
                    alert('image add')
                })
            })
            
        },
        async read(){
            this.ImgName = document.getElementById('namebox').value
            let snapshot = await this.$firebase.firestore().collection('imgInfo').get().catch(err => console.log(err))
            console.log("snapshot_read",snapshot)
            if (snapshot != null || snapshot != undefined){
                snapshot.forEach(element => {
                    console.log("uuuuu===",element.data());
                    this.readFiles.push(element.data())
                });
            }
            else{
                alert("no");
            }
        }
    },
    created(){
        this.delayedData();
    }
}
</script>