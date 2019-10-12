<template>
  <ul class="nav nav-pills bg-info nav-falan">
        <router-link 
        active-class="active"
        to="/"
        class="ml-3 text-white"
        exact
        tag="li">
        Urun listesi
        </router-link>
        <router-link 
        active-class="active"
        to="/add"
        class="ml-3 text-white"
        exact
        tag="li">
        Urun islemleri
        </router-link><router-link 
        active-class="active"
        to="/"
        class="ml-3 text-white"
        exact
        tag="li">
        Urun Çıkışı 
        </router-link>
   
  </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
li{
    cursor: pointer;
      margin-top: 15px;

}
.nav-falan{
  height: 50px;
}
</style>

