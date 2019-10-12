import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from "./routes";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(VueResource);//global olarak eklemek için

const router =new VueRouter({
  routes, //routes :routes yapar
  mode :"history" // hash dersek #/user history dersek kalkar
});

new Vue({
  el: '#app',
  router,

  render: h => h(App)
})