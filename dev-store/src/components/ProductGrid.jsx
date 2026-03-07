import ProductCard from "./ProductCard"

function ProductGrid({products}){

if(products.length === 0){

return(

<p style={{
textAlign:"center",
marginTop:"50px",
fontSize:"18px"
}}>
Carregando produtos...
</p>

)

}

return(

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
gap:"25px",
padding:"40px",
maxWidth:"1200px",
margin:"auto"
}}>

{products.map(product => (

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

)

}

export default ProductGrid