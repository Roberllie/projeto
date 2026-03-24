import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Header(){

  const { cart = [] } = useContext(CartContext)

  const totalItems = cart.reduce((acc,item)=>acc + item.quantity,0)

  return(

    <header style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"20px 60px",
      background:"rgba(119, 13, 105, 0.47)"
    }}>

      <Link to="/">
        <h2 style={{color:"#7f3fbb"}}>Magic Store</h2>
      </Link>

      <nav>
        <ul style={{display:"flex",gap:"30px",listStyle:"none"}}>

          <li><Link to="/products">Produtos</Link></li>

          <li>
            <Link to="/cart">
              Carrinho ({totalItems})
            </Link>
          </li>

          <li><Link to="/login">Login</Link></li>

        </ul>
      </nav>

    </header>

  )

}

export default Header