import Vue from 'vue'//vue frameworkunu import etti 
import App from './App.vue'
import Home  from './Home.vue'

Vue.component("lamp-comp", Home);

new Vue({
  el: '#app',
  render: h => h(App)//app elemeni alır ve render eder

})
