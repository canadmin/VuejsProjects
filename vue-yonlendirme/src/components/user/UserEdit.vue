<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
     Ad : {{$route.query.name}}
    </p>
    <p>
      Soyad : {{$route.query.lastName}}
    </p>
    <button class="btn btn-primary" @click="saved = true">Onayla</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        saved : false
      }
    },
    beforeRouteLeave(to,from,next){
      if(this.saved){
        next();
      }else{
        if(confirm("Tüm bilgilerin gidecek")){
          next()
        }else{
          next(false)
        }
      }
      //next(this.saved);

    }
  }
</script>
