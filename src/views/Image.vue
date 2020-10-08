<template>
    <div>
        
        <div class="img_box"><img id="myimg" src="" alt="" /></div>
        <br>
        
        <label for="" id="UpProgress"></label><br>
        <v-progress-circular indeterminate color="primary" v-if="loding"></v-progress-circular>
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
            readFiles:[],
            progress:0,
            loding:false
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
            input.accept = "image/*";
            
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
            //this.ImgName = document.getElementById('namebox').value;
            this.ImgName = "IMG_" + Date.now();
            var uploadTask = this.$firebase.storage().ref('images/' + this.ImgName + ".jpg").put(this.files[0])
            console.log("up:==",uploadTask)
            this.loding = true;
            uploadTask.on('state_changed', function(snapshot){
                
                this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //document.getElementById('UpProgress').innerHTML = "업로드"+ this.progress+"%";
                
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
                    this.loding = false;
                    alert('업로드 완료')
                })
            })
            
        },
        async read(){
            //this.ImgName = document.getElementById('namebox').value
            let snapshot = await this.$firebase.firestore().collection('imgInfo').get().catch(err => console.log(err))
            console.log("snapshot_read",snapshot)
            this.readFiles = [];
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
        var imgDate = Date.now();
        console.log(imgDate)
        
    },
    mounted(){
        
    }
}
</script>