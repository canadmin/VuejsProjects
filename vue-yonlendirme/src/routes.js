import Home from "./components/Home";
import Header from "./components/Header";
const User  = resolve =>  {
    require.ensure(["./components/user/User.vue"],() => {
        resolve(require("./components/user/User.vue"))
    })
}  
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";

export const routes = [
    {path : "/" , name : "anasayfa",components : {
        default : Home,
        "header-top" : Header
    }},//hangi yol gelirse hangi component çalışacak

    {
        path : "/user", name : "kullanici" ,components :{
            default : User,
            "header-top" : Header
        },children : [
        {path : "", component: UserStart},//user
        {path : ":id", component : UserDetail,beforeEnter : (to,from,next) => {
            console.log("Route seviyesinde control");
            next();
        }},//user/12
        {path : ":id/edit", component : UserEdit,name : "userEdit"},//user12/edit  

      ]
    },
    {path : "/redirect" ,redirect : "/user"},
    {path :"*" ,redirect : "/"}
];