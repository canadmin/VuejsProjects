<template>
 <div class="container w-75 mt-4">
        <h3>Urun Listesi</h3>
        <div class=" w-100 jumbotron"> 
            <div class="form-group">
                <label for="exampleFormControlInput1">Ürün adı</label>
                <input type="text" class="form-control" placeholder="Ürün adı giriniz" v-model="product.productName">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Adet</label>
                <input type="email" class="form-control" placeholder="Ürün adeti giriniz" v-model="product.productCount">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Fiyat</label>
                <input type="email" class="form-control" placeholder="Ürün fiyatını giriniz" v-model="product.productPrice">
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Açıklama</label>
                <textarea class="form-control" placeholder="Ürün hakkında açıklama giriniz" rows="3" v-model="product.productDescription"></textarea>
            </div>
             <div class="form-group text-center">
                <button type="email" class="btn btn-primary" placeholder="Ürün fiyatını giriniz" @click="addProduct">Ürünü Ekle</button>
            </div>

        </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            product : {
            productName : null,
            productPrice : 0,
            productCount : 0,
            productDescription : null
            }
        } 
    },
    methods : {
        addProduct(){
            this.$http.post("https://vuejs-vue-resource-8a756.firebaseio.com/products.json",this.product)
            .then((response) => {
                console.log(response);
            })
        }
    }
}
</script>

<style scoped>

</style>