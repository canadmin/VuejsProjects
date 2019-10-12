<template>
   <div class="container w-75 mt-4">
        <h3>Urun Listesi</h3>
        <hr>
        <div class=" w-100   jumbotron j-color"> 
            <div class="row">
            <div class="col-12">
            <product v-for="(product in products " :prod="product"></product>
            </div>
            </div>
        </div>
       
   </div>
</template>

<script>
import product from "./Urun"
export default {
    data(){
        return {
            products : []
        }
    },
    components : {
        product
    },
  
    methods : {
        loadUser(){
         this.$http.get('https://vuejs-vue-resource-8a756.firebaseio.com/products.json')
         .then((response) => {
             let data = response.data;
             console.log(data);
            for(let key in data){
                this.products.push(data[key]);
            }
         })
        }
    },
    created(){
        this.loadUser();
    },
    computed : {

    }

}
</script>

<style  scoped>
.j-color{
    padding:0 !important;
}
.c-color {
    background-color: #40bfc1;
}

</style>