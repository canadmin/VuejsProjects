import ProductList from "./components/UrunListele/Urunler";
import Add from "./components/NewProduct"
export const routes = [
    {path : "/" ,component : ProductList},
    {path : "/add", component : Add },
    {path :"*" ,redirect : "/"},
    

]