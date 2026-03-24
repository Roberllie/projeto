import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart(){

  const { cart, removeFromCart, getTotal } = useContext(CartContext)

  if(cart.length === 0){
    return(
      <div style={{padding:"60px", textAlign:"center"}}>
        <h1>Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
      </div>
    )
  }

  return(

    <div style={{padding:"40px"}}>

      <h1>Carrinho</h1>

      {cart.map(item => (

        <div key={item.id} style={{
          display:"flex",
          alignItems:"center",
          gap:"20px",
          marginBottom:"20px",
          background:"white",
          padding:"15px",
          borderRadius:"10px"
        }}>

          <img src={item.image} style={{width:"60px"}} />

          <div style={{flex:1}}>
            <p>{item.title}</p>
            <p>Qtd: {item.quantity}</p>
          </div>

          <button onClick={()=>removeFromCart(item.id)}>
            Remover
          </button>

        </div>

      ))}

      <h2>Total: {getTotal().toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL"
      })}</h2>

    </div>

  )

}

export default Cart