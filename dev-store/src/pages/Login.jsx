function Login(){

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"70vh"
}}>

<div style={{
background:"rgba(119, 13, 105, 0.47)",
padding:"40px",
borderRadius:"12px",
width:"300px",
textAlign:"center",
border:"1px solid #2c1f55"
}}>

<h2 style={{
marginBottom:"20px"
}}>
Login
</h2>

<input
type="email"
placeholder="Email"
style={{
width:"100%",
padding:"10px",
marginBottom:"15px",
borderRadius:"8px",
border:"none"
}}
/>

<input
type="password"
placeholder="Senha"
style={{
width:"100%",
padding:"10px",
marginBottom:"20px",
borderRadius:"8px",
border:"none"
}}
/>

<button style={{
width:"100%",
padding:"12px",
background:"linear-gradient(90deg,#9333ea,#7c3aed)",
border:"none",
borderRadius:"8px",
color:"white",
fontSize:"16px",
cursor:"pointer"
}}>
Entrar
</button>

</div>

</div>

)

}

export default Login