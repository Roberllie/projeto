import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Login from "./pages/Login"

import { getProducts } from "./services/api"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fetchProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      }
    }

    fetchProducts()

  }, [])

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products products={products} />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App