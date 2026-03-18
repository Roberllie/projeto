function ProductCard({product}){

const priceBR = product.price.toLocaleString('pt-BR',{
style:'currency',
currency:'BRL'
})

return(

<div style={{
background:"white",
borderRadius:"14px",
padding:"20px",
boxShadow:"0 4px 12px rgba(0,0,0,0.06)",
textAlign:"center",
transition:"0.2s"
}}>

<img
src={product.image}
alt={product.title}
style={{
height:"170px",
objectFit:"contain",
marginBottom:"12px"
}}
/>

<h3 style={{
fontSize:"15px",
marginBottom:"10px",
display:"-webkit-box",
WebkitLineClamp:"2",
WebkitBoxOrient:"vertical",
overflow:"hidden",
color:"#555"
}}>
{product.title}
</h3>

<p style={{
fontWeight:"bold",
color:"#ff4fa3",
fontSize:"18px",
marginBottom:"10px"
}}>
{priceBR}
</p>

<button style={{
background:"#fc8fbc",
color:"white",
padding:"8px 16px",
borderRadius:"8px",
fontSize:"14px"
}}>
Comprar
</button>

</div>

)

}

export default ProductCard