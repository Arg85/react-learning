import React, { useState } from 'react'



const gu={
    display:"flex",
   justifyContent:'center',
   padding:'15px 20px',
   background:'purple',
   borderRadius:'5px',
   border:'2px solid black',
   color:'white',
   outline:'none'
}


const koch={
    display:"flex",
   justifyContent:'center'
}
const Click=()=> {
    const [count,setCount]=useState(0);

    const IncNumb=()=>{
  setCount(count + 1 );
    };
    
    return(
        <>
<h1 style={koch}>{count}</h1>
<h2 style={koch}><button style={gu} onClick={IncNumb} > Click me</button></h2>
</>
    );
};
export default Click;