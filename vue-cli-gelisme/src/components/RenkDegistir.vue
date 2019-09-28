<template>
    <div>
        <div class="box" :class="[color,{yellow : change}]"></div>
         <hr>
        <input type="text" v-model="color">


    </div>        
</template>

<script>
export default {
    data : function(){
        return {
            change : false,
            color : "black"
        }
    },
    methods : {
        renkDegistir : function(event){

        }
    },
    computed : {
        divClass :function(){
            return {
                yellow : this.change,
                blue : !this.change
            }
        }
    }
}
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin-right: px
}
   .yellow{
        background-color: yellow;
    }
    .blue{
        background-color: blue;
    }
    .black{
        background-color: black;
    }
</style>