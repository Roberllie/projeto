import {useEffect,useState} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from "./components/Header"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Promotions from "./pages/Promotions"
import Contact from "./pages/Contact"

import {getProducts} from "./services/api"

function App(){

const[products,setProducts]=useState([])

useEffect(()=>{

async function fetchProducts(){

const data = await getProducts()

setProducts(data)

}

fetchProducts()

},[])

return(

<BrowserRouter>

<Header/>

<Routes>

<Route
path="/"
element={<Home products={products}/>}
/>

<Route
path="/products"
element={<Products products={products}/>}
/>

<Route
path="/promotions"
element={<Promotions/>}
/>

<Route
path="/contact"
element={<Contact/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App