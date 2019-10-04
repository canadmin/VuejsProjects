<template>
      <div class="col-xs-12 col-sm-6" v-if="Object.keys(server).length === 0">
        <p> Sunucu Bilgisi Güncel Değil!!</p>
      </div>  
      <div class="col-xs-12 col-sm-6" v-else>
          <h3>Sunucu #{{server.id}}</h3>
          <p>Sunucu Durumu : {{server.status}}</p>
          <button class="btn btn-primary btn-xs" @click="sunucuIyilestir"> Sunucuyu iyileştir</button>
        </div>  
</template>

<script>
import {eventBus} from "../../main"

export default {
      data : function(){
        return {
          server : {}
        }
      },
      created(){
        eventBus.$on("serverDataSend",(data) => {
          this.server=data;
        })
      },
      methods : {
        sunucuIyilestir(){
          this.server.status="normal"
        }
      }
}
</script>