<template>
  <div id="container center">
    <div class="mt-4">Header</div>
    <div class="row mt-3">
   <div class="col-3"></div>
   <div class="col-2">
   <app-general></app-general>
   </div>
   <div class="col-6">   
   <app-message-box></app-message-box>
  
   </div>
  </div>
  </div>
</template>

<script>
import MessageGeneral from "./MessageGeneral"
import MessageBox from "./MessageBox"

export default {
    components : {
      appGeneral : MessageGeneral,
      appMessageBox : MessageBox
    }
}
</script>

<style scoped>
.center {
color: green
}
</style>
