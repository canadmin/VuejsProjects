import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

import {routes} from "./routes"


Vue.use(VueRouter);

const router =new VueRouter({
  routes, //routes :routes yapar
  mode :"history" // hash dersek #/user history dersek kalkar
});

router.beforeEach((to,from,next) => {
  console.log("global olarak control")
  next();//next fonksiyonu şart
})//route calismadan once buradan geçer
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
