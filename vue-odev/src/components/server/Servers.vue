<template>
 <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
           <app-server @click.native="showServerStatus(server)" v-for="server in servers" :serverData="server" ></app-server>
        </ul>
      </div>
</template>

<script>
//eğer componente tıklama özellği eklemek için
import Server from "../server/server";
import {eventBus} from "../../main"
export default {
      components :{
        appServer : Server
      },
      data : function(){
       return {
         servers : [
           {id :1, status : "kritik"},
           {id :2, status : "normal"},
           {id :3, status : "tehlikede"},
           {id :4, status : "Bilinmiyor"}

         ]
       }
     },
     methods : {
       showServerStatus(server){
          eventBus.sendToServerData(server);
      }
     }
    
}
</script>

<style scoped>
  div {
  }
</style>