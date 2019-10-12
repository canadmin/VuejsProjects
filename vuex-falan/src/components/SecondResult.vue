<template>
  <div>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tiklama sayisi  : {{stringC}} </p>
    <input type="text"  v-model="value">
    {{value}}
  </div>
</template>
<script>
import {mapGetters} from "vuex";
  export default {
    //props : ["counter"],
      computed : {// mapgetters'ı computed oldukları için buraya tanımladık
       ...mapGetters({
        double :'getDoubleCounter',
        stringC :'stringCounter'
      }),//tırnak içine kullanmak istediğim fonksiyonları yazıyoruz mapGetters bize obje döndürüyoe
      value : {
        get(){
          return this.$store.getters.getValue;
        },
        set(value){ 
          this.$store.dispatch("setValueDate",event.target.value)

        }
      }
      },
      
  }
  

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
