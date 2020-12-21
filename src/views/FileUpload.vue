<template>
    <div>
        <div class="img_box d-flex align-center justify-center" outlined>
        
            <img id="myimg" src="" alt="" />
        
        </div>
        <br>
        
        
        <label for="" id="UpProgress"></label><br>
        
        <v-btn @click="select">select</v-btn><br>
        <v-btn @click="upload" id="upload">upload</v-btn>
        <v-btn @click="read">read</v-btn>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate color="primary" v-if="loding"></v-progress-circular>
        </v-overlay>
        <component :is="wheel" v-if="isImage" />

        
        
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";



export default {
    name: 'FileUpload',
    data() {
        return {
            delayUsers:{},
            ImgName:null,
            ImgUrl:null,
            files:[],
            readFiles:[],
            progress:0,
            loding:false,
            overlay:false,
            isImage:false,
            
        }
    },
    methods: {
        
        select(e){
            var input = document.createElement('input');
            input.type = 'file';
            input.accept = "image/*";
            
            input.onchange = e => {
                this.files = e.target.files;
                
                let reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                
                reader.onload = function(){
                    
                    document.getElementById("myimg").src = reader.result
                }
                
                
            }
            input.click();
        },
        upload (){
            try {
                
            
            
            this.ImgName = "IMG_" + Date.now();
            var uploadTask = this.$firebase.storage().ref('images/' + this.ImgName + ".jpg").put(this.files[0])
            
            this.loding = true;
            this.overlay = true
            document.getElementById('upload').innerHTML = '업로드중...';
            uploadTask.on('state_changed', function(snapshot){
                
                this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //document.getElementById('UpProgress').innerHTML = "업로드"+ this.progress+"%";
                
            },
            function(error){
                alert('error img');
            },
            ()=>{
                
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
                    this.overlay = false;

                    document.getElementById('upload').innerHTML = 'upload';
                    //alert('업로드 완료')
                    this.setConfirmDialogAction({
                        title:'알림',
                        text: '이미지 추가 완료',
                        btn:{
                            name:'닫기',
                            // click: ()=>{
                            //     alert(123);
                            // }
                        }
                    })
                    
                })
                
            })
            } catch (error) {
                alert('cath error' ,error)
            }
            
        },
        async read(){
            this.isImage = true;
        },
        ...mapActions({
            setConfirmDialogAction:'setConfirmDialogAction'
        }),
        

    },
    created(){
        var imgDate = Date.now();
        
        
    },
    computed:{
        ...mapState(['confirmDialog']),
        wheel(){
            
            return () => import(`./AllImage.vue`);
        }
    },
    mounted(){
        
        
        
        
    }
}
</script>