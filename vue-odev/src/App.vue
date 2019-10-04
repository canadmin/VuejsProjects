<template>
 <div class="container">
   <app-header></app-header>
   <hr>
   <div class="row">
      <servers></servers>
     <server-details></server-details>
   </div>
   <hr>
   <div class="row">
    <app-footer></app-footer>
   </div>  
 </div> 
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Servers from './components/server/Servers'
import ServerDetails from "./components/server/ServerDeatils"
export default {
  components : {
    "app-header" : Header,
    "app-footer" : Footer,
    "servers" : Servers,
    "server-details" : ServerDetails
  }

}
</script>
