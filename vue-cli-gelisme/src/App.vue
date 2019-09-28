<template>
<div>
  <my-Comp></my-Comp>

  <renk></renk>
</div>
</template>

<script>
import Yazdir from "./components/Yazdir"
import RenkDegistir from "./components/RenkDegistir"
export default {
  components : {
    myComp : Yazdir,
    "renk" : RenkDegistir
  }
  
}
</script>