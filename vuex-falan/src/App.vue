<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1 class="text-center">VUEX</h1>
        <hr>
        <app-result :counter="counter"></app-result>
        <hr>
         <hr>
        <app-second></app-second>
        <hr>
        <app-counter @counterEvent="counter += $event"></app-counter>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from "./components/Result";
  import SecondResult from "./components/SecondResult";
  import Counter from "./components/Counter";
  export default {
    data(){
      return {
        counter : 0
      }
    },
    components: {
      appResult: Result,
      appCounter: Counter,
      appSecond : SecondResult
    }
  }
</script>

<style>
</style>
