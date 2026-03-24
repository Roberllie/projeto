import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function ProductDetails(){

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const { addToCart } = useContext(CartContext)

  useEffect(() => {

    async function fetchProduct(){
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }

    fetchProduct()

  }, [id])

  if(!product){
    return <p style={{padding:"40px"}}>Carregando...</p>
  }

  const priceBR = product.price.toLocaleString("pt-BR",{
    style:"currency",
    currency:"BRL"
  })

  return(

    <div style={{
      padding:"40px",
      display:"flex",
      gap:"40px",
      alignItems:"center"
    }}>

      <img
        src={product.image}
        style={{width:"250px"}}
      />

      <div>

        <h1>{product.title}</h1>

        <p style={{margin:"20px 0"}}>
          {product.description}
        </p>

        <h2 style={{color:"#ff4fa3"}}>
          {priceBR}
        </h2>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop:"20px",
            background:"#fc8fbc",
            color:"white",
            padding:"12px 24px",
            borderRadius:"10px",
            fontSize:"16px"
          }}
        >
          Comprar
        </button>

      </div>

    </div>

  )

}

export default ProductDetails