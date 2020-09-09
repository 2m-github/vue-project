<template v-slot:items="props">
    <div>
        <h1>상세 페이지</h1>
        <p>{{name}}</p>
        <p>{{age}}</p>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String,
            default:null
        },
        age:{
            type:String,
            default:null
        }
    },
    data(){
        return{

        }
    }
}
</script>
