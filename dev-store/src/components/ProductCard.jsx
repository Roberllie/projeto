import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProductCard({ product }) {

  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)

  if (!product) return null

  const priceBR = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return (

    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        textAlign: "center",
        cursor: "pointer"
      }}
    >

      <img
        src={product.image}
        alt={product.title}
        style={{
          height: "150px",
          objectFit: "contain",
          marginBottom: "10px"
        }}
      />

      <h3 style={{ fontSize: "14px" }}>
        {product.title}
      </h3>

      <p style={{
        color: "#ff4fa3",
        fontWeight: "bold"
      }}>
        {priceBR}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation()
          addToCart(product)
        }}
        style={{
          background: "#fc8fbc",
          color: "white",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "10px"
        }}
      >
        Comprar
      </button>

    </div>

  )
}

export default ProductCard