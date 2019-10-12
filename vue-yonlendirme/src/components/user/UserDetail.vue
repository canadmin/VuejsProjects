<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanici id bilgisi :{{$route.params.id}}</p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="navigationLink"
    >
    Kullanıcıyı düzenle</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navigationLink :{name : 'userEdit',params : {id : this.$route.params.id},query :{name :'can',lastName : 'yardimci'}}
      }
    },
    beforeRouteEnter(to,from,next){
      console.log("Component kontrol");
    next();
    }
  }
</script>
