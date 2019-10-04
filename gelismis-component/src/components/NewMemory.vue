  <template>
  <div>
    <h1>NewMemory  componenti </h1>
    <button @click="counter++">arttır</button>
    <p>{{counter}}</p>
  </div>
  </template>

  <script>
  export default {
      data : function(){
          return { 
              counter : 0
          }
      },
      activated(){
        console.log("new memory aktif edildi")
      },
      deactivated(){
        console.log("new memory inaktif edildi")
      }
  }

  </script>

