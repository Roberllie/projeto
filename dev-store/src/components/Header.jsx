import {Link} from "react-router-dom"

function Header(){

return(

<header style={{
background:"#ffd6e7",
padding:"20px 40px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
boxShadow:"0 2px 6px rgba(0,0,0,0.08)"
}}>

<h1 style={{
color:"#ff4fa3",
fontWeight:"600",
fontSize:"24px"
}}>
Magic Touch
</h1>

<nav>

<ul style={{
display:"flex",
gap:"25px",
listStyle:"none",
fontWeight:"500",
color:"#555"
}}>

<li>
<Link to="/">Home</Link>
</li>

<li>
<Link to="/products">Produtos</Link>
</li>

<li>
<Link to="/promotions">Promoções</Link>
</li>

<li>
<Link to="/contact">Contato</Link>
</li>

</ul>

</nav>

</header>

)

}

export default Header