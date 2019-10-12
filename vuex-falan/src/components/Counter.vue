<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
     <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button> 
    <hr>
     <button class="btn btn-success" @click="incrementAsync({time : 1000})">+ AsyncArttır</button>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {mapActions} from "vuex";

export default {
  methods : { // mutationlar çalışırken senkron çalışır
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),
    ...mapActions([
      "increment",
      "decrement",
      "incrementAsync"
    ])
    // increment(){
    //   this.$store.dispatch("increment");
    // },decrement(){
    //   this.$store.dispatch("decrement");
    // },
    // incrementAsync(){
    //   this.$store.dispatch("incrementAsync");
    // }
//     incrementCounter(){
//      // this.$emit("counterEvent", 1);
//       this.$store.commit("increaseCounter",1); //mutationlar commit ile çalışır
//     },
//     decrementCounter(){
//       // this.$emit("counterEvent", -1);
//       //this.$store.state.counter--;
//       this.$store.commit("decreaseCounter", 1); //mutationlar commit ile çalışır
// }

  }
}
</script>

<style>
</style>
