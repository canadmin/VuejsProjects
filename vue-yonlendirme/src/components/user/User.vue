<template>
  <div class="container">
    <hr>
    <router-view></router-view>    
    <hr>
    <button class="btn btn-succes" @click="navigateToHome">Home Component</button>
    <hr>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id : this.$route.params.id
      }
    },
    methods: {
      navigateToHome(){
        //this.$router.push("/")//vue routera eriştik .push routes.js içerisindeki verilere erişmemizi sağlar 1.yontemde içerisine string alır
        //this.$router.push({path : '/'})//ikinci yolda bi obje alır
        this.$router.push({name : "anasayfa"}) //3. yontem isimlendirmiş route ile gider
      }
    },
    // watch : { //propertiyi izler değer değiştiği anda bi aksiyon almamızı sağlar
    //   "$route"(to,from){//to değişen value 2. value ise eski value
    //     this.id=to.params.id;
    //   }
    // }
  }
</script>
