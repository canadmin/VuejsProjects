<template>
 <div class="w-100 p-4">
        <div class="row">
            <div class="col-2 p-4">
                <div class="product-image d-flex justify-content-center ">
                </div>                
            </div>
             <div class="col-7 p-4">
                 <p>{{prod.productName}}</p>
                 <p>{{prod.productDescription}}</p>          
            </div>
            <div class="col-2 align-self-center">
                <div class="">
                    {{prod.productPrice}}
               </div>
            </div>  
           <div class="col-1">
                <div class="float-right text-center" :class="prod.productCount >= 4? 'product-count-normal' : 'product-count-warning'" >
                    <p class="mt-2"><h5>ADET</h5></p>
                    <p class="mt-4">{{prod.productCount}}</p>
               </div>
            </div>  
           </div>
          <hr>
</div> 
</template>

<script>
export default {
    data(){
      return {

      }
    },
    props :["prod"],
    
    
}
</script>

<style scoped>


.product-image {
    background-color: #3A5038;
    width: 90px;
    height: 90px;

}
.row-bg{
    background-color: #C4C4C4;
}
.product-count-normal{
    background-color: #7FCE1A;
    height: 100%;
    width: 100px;
     min-height: 100%;
     height: 100px;
}
.product-count-warning{
      background-color: #A6221A;
    height: 100%;
    width: 100px;
     min-height: 100%;
     height: 100px;
}

</style>