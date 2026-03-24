import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Login from "./pages/Login"

function App(){

  const [products,setProducts] = useState([])

  useEffect(()=>{

    async function fetchProducts(){
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProducts(data)
    }

    fetchProducts()

  },[])

  return(

    <BrowserRouter>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/products" element={<Products products={products}/>} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart/>} />

        <Route path="/login" element={<Login/>} />

      </Routes>

    </BrowserRouter>

  )

}

export default App