import {Link} from "react-router-dom"

function Home(){

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"80vh",
textAlign:"center",
padding:"20px"
}}>

<div>

<h1 style={{
fontSize:"70px",
fontWeight:"bold",
marginBottom:"20px",
lineHeight:"1.1"
}}>

Bem-vindo à <br/>

<span style={{
color:"#a855f7"
}}>
Magic Store
</span>

</h1>

<p style={{
fontSize:"20px",
color:"#cfcfe8",
marginBottom:"40px"
}}>
Confira nossos produtos
</p>

<Link to="/products">

<button style={{
background:"linear-gradient(90deg,#9333ea,#7c3aed)",
border:"none",
padding:"18px 40px",
borderRadius:"12px",
color:"white",
fontSize:"18px",
cursor:"pointer",
transition:"0.3s"
}}
onMouseOver={(e)=>e.target.style.transform="scale(1.05)"}
onMouseOut={(e)=>e.target.style.transform="scale(1)"}
>
Ver Produtos
</button>

</Link>

</div>

</div>

)

}

export default Home