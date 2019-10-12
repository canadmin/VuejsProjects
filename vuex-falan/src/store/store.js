import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as mutations from "./mutations"
import * as getters from "./getters"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        value : 0
    },
    getters,
  
    mutations,
    actions : { // veri set etmek için arkada bir mutation kullanıyor
      
       setValueDate({commit},payload){
           commit("setValue",payload);
       }
    },
    modules : {
        counter 
    }
});