<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br><br>
        <button @click="selectedComponent='appMemory'" class="btn-sm btn btn-primary">appMemory</button>
        <button @click="selectedComponent='appNewMemory'" class="btn-sm btn btn-primary">appNewMemory</button>
        <button @click="selectedComponent='appAuthor'" class="btn-sm btn btn-primary">appAuthor</button>
        <hr>
         <p>{{selectedComponent}}</p> 
         <hr>

         <!-- normalde yeni komponent açıldığında eskisi destroy oluyor bunun olmaması için keep alive kullanıyoruz
          activated ve deactivated özellikleri keep alive ile geliyorr
          -->
         <!-- :is  hangi component olduğuna bakıyor ve her component açıldığında yeniden render ediliyor-->
          <keep-alive>
            <component :is="selectedComponent">
            <h1 slot="heading">Güzel bir gün</h1>
            <p> Bu Çok güzel bir Anıydı</p>
            </component>
          </keep-alive>
         
         <!-- <app-memory>
           ctrl+k+c
           <h1 slot="heading">Güzel bir gün</h1>
           <p> Bu Çok güzel bir Anıydı</p>
           <p slot="">asdasd</p>
         </app-memory> -->
      </div>
  </div>
  </div>
</template>

<script>

import Memory from "../src/components/Memory"
import NewMemory from "../src/components/NewMemory"
import Author from "../src/components/Author"


export default {
  data : function(){
    return {
      selectedComponent : "appMemory"
    }
  },
  components : {
    appMemory : Memory,
    appNewMemory :NewMemory,
    appAuthor : Author
  }
}
</script>

<style scoped>


</style>
