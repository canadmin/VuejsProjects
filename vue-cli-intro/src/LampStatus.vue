<template>
    <div>
        <p> Labma Durumu  : {{status}}</p>
        <button @click="openLamp"> Labmayı aç : </button>
        <hr>
    </div>
</template>

<script>
    export default {  
        data : function(){
            return {
                status : "Kapali"
            }
        },
        methods : {  
            openLamp(){
                this.status = "acik"
            }
        }
    }
</script>