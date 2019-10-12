<template>
    <div class="container">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group"> 
          <input type="text" class="from-control" v-model="userName">
          </div>
          <button class="btn btn-primary" @click="saveUser">Gonder</button>
          <button class="btn btn-success" @click="getUsers">Verileri getir</button>
          <hr>
          <ul class="list-group">
            <li class="list-group-item" v-for="user in usersList">{{user.data.userName}}
              <button class="btn btn-xs btn-danger" @click="deleteUser(user.key)">Sil</button>              
            </li>
          </ul>
          <hr>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
        userName : null,
        usersList : [],
        email : null,
        password : null,
        token : null
    }
  },
  methods :{
    saveUser(){
       let tempUsernameList = {key : "asd", data :{ userName :this.userName}};
       console.log(tempUsernameList)
      let tempUserName = this.userName;
       console.log(tempUserName)  
      this.usersList.push(tempUsernameList);
        this.userName = null;
       console.log(this.userName)
      // this.$http.post("",{userName : tempUserName})
      // .then((response) => {
      //   console.log(response)
      // })
     this.$resource("").save({},{userName : tempUserName});
    },
    getUsers(){
      this.$resource("").get()
      .then((response) => {  
      return response.json();
      }).then(data => {
        this.usersList = [];
        for(let key in data.usersList){
          this.usersList.push(
            {
              key :key,
              data :data.usersList[key]
            }
          );
        }
        console.log(this.usersList)
      })
      },
      deleteUser(userId){
        this.$http.delete("https://vuejs-vue-resource-8a756.firebaseio.com/users/"+userId+".json");
      }
  },
  created(){  
    this.getUsers
    this.interval = setInterval(() => this.getUsers(), 4000);
  }
  
  
}
</script>

