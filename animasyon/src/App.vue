<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <button class="btn btn-primary" @click="show =!show">Kutuyu Goster/Gizle</button>
        <br><br>
        <transition name="fade"><!-- animasyon vermek istediğimiz elementleri bunun içerisine yazıyoruz sadece bir tane-->
        <div class="alert alert-success" v-if="show">Bu bir kutudur</div>
        </transition>
        <hr>
        <transition name="slide" appear><!-- animasyon vermek istediğimiz elementleri bunun içerisine yazıyoruz sadece bir tane apear onLoad anis-->
        <div class="alert alert-warning" v-if="show">Bu bir kutudur</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show : false
    }
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
 transition : opacity 1s;
}

.fade-leave{

}
.fade-leave-active{

   transition : opacity 1s;
   opacity: 0;

}

.slide-enter{
  opacity: 0;
}

.slide-enter-active{
animation: slide-in 1s ease-out forwards;
transition: opacity 1s;
}

.slide-leave{

}
.slide-leave-active{
animation: slide-out 1s ease-out forwards;
transition: opacity 1s;
opacity: 0;

}

@keyframes slide-in{
  from{
    transform: translateY(200px);
  }to{
        transform: translateY(0px);

  }
}

@keyframes slide-out{
  from{
    transform: translateY(0px);
  }to{
        transform: translateY(200px);

  }
}
</style>
