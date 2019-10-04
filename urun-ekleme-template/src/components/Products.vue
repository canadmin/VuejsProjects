<template>
    <div class="row product-container">
        <app-product v-for="product in productList">
        <img class="card-img-top" :src="product.selectedImage" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <small>
            <strong>Adet : {{product.count}} </strong> 
          </small>
          <br>
          <small>
            <strong>Fiyat : {{product.price}}</strong>
          </small>
          <br>
          <small>
            <strong>Tutar : {{product.totalPrice}} </strong> 
          </small>
        </div>
        </app-product>
    </div>
</template>
<script>
import {eventBus} from "../main";

import Product from "../components/Product";
export default {
    components :{
        appProduct : Product
    },
    data(){
      return {
        productList : []
      }
    },
    created(){
      eventBus.$on("productAdded",(product) => {
        if(this.productList.length<2){
            this.productList.push(product);
            eventBus.$emit("progress",this.productList.length);
          }else{
            alert("Daha fazla ürün ekleyemezsiniz")
          }
      });
    }
}
</script>