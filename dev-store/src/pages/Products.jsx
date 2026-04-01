import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Products({ products }) {

  const [category, setCategory] = useState("all")
  const [categories, setCategories] = useState([])

  // 🔥 busca categorias da API
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories")
      const data = await res.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  // 🔥 filtro
  const filteredProducts =
    category === "all"
      ? products
      : products.filter(p => p.category === category)

  return (

    <div style={{
      display: "flex",
      padding: "40px",
      gap: "30px"
    }}>

      {/* 🔥 SIDEBAR */}
      <aside style={{
        width: "200px",
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        height: "fit-content"
      }}>

        <h3 style={{ marginBottom: "15px" }}>Categorias</h3>

        <ul style={{ listStyle: "none" }}>

          <li
            onClick={() => setCategory("all")}
            style={{
              marginBottom: "10px",
              cursor: "pointer",
              color: category === "all" ? "#ff4fa3" : "#555",
              fontWeight: category === "all" ? "bold" : "normal"
            }}
          >
            Todas
          </li>

          {categories.map(cat => (
            <li
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                color: category === cat ? "#ff4fa3" : "#555",
                fontWeight: category === cat ? "bold" : "normal"
              }}
            >
              {cat}
            </li>
          ))}

        </ul>

      </aside>

      {/* 🔥 GRID */}
      <div style={{ flex: 1 }}>

        <h1 style={{ marginBottom: "20px" }}>Produtos</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px"
        }}>

          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </div>

  )

}

export default Products