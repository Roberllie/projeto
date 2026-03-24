import { useState } from "react"
import ProductCard from "../components/ProductCard"

function Products({products}){

const [category,setCategory] = useState("all")

const filteredProducts = category === "all"
? products
: products.filter(p => p.category === category)

return(

<div style={{padding:"40px"}}>

<h1>Produtos</h1>

<select
onChange={(e)=>setCategory(e.target.value)}
style={{marginBottom:"20px"}}
>

<option value="all">Todas</option>
<option value="electronics">Eletrônicos</option>
<option value="jewelery">Joias</option>
<option value="men's clothing">Masculino</option>
<option value="women's clothing">Feminino</option>

</select>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"
}}>

{filteredProducts.map(product=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

</div>

)

}

export default Products