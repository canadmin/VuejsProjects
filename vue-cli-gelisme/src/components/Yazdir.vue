<template>
  <div>
    <p>{{value}}</p>
    <input type="text" v-model="de">
    <hr>
    <button @click="degistir">Degistir</button>
  </div>    
</template>
<script>
export default {
     data : function(){
    return {
      value : "test value",
      de : ""
    }
  },
  methods : {
     degistir : function() {
        this.value =this.de
     }
  }
}
</script>