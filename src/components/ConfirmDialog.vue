<template>
    <v-dialog
      v-model="isShowDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          {{ confirmDialog.title }}
        </v-card-title>

        <v-card-text>
          {{ confirmDialog.text }}
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
          >
            {{ confirmDialog.btn.name }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data(){
        return {
           
        }
    },
    created(){
        this.defualtValue();
    },
    computed:{
        ...mapState(['confirmDialog']),
        isShowDialog:{
            get(){
              console.log('is getter')
                return !!this.confirmDialog
            },
            set(v){
                console.log("v=",v)
                if (!v){
                    this.setConfirmDialogAction(null)
                    
                }
            }
        }
        
    },
    methods:{
        ...mapActions({
            setConfirmDialogAction:'setConfirmDialogAction'
        }),
        defualtValue(){
            console.log("defualt",this.confirmDialog)
            
        },
        closeDialog(){
            //this.confirmDialog.btn.click();
            this.isShowDialog = false

        }
    }
}
</script>