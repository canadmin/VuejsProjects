import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);//global olarak eklemek için

Vue.http.options.root ="https://vuejs-vue-resource-8a756.firebaseio.com/users.json";

Vue.http.interceptors.push((request,next) => {//requeste etki eder
  // if(request.method == "POST"){
  //   request.method = "PUT"
  // }
  next(response => {
    response.json = () => {
      return {
      usersList :response.body
      }
    }
  });
}); 
new Vue({
  el: '#app',
  render: h => h(App)
})
