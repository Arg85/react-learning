import React, { useState } from 'react'
const Stalin={
    textTransform: 'capitalize',
    textAlign: 'center',
   color: 'lightcoral',
  paddingTop: '9px',
  paddingBottom: '25px',
  display:'flex',
  justifyContent:'center'
}
const Digital= ()=>{
    let time=new Date().toLocaleTimeString();
    const[ctime,SetTime]=useState(time);
    
    const UpdateTime=()=>
    {
        let time=new Date().toLocaleTimeString();
        SetTime(time);
    }
    setInterval(UpdateTime,1000)

    return(
        <>
        <h1 style={Stalin} >{ctime}</h1>
        </>
    )
}
export default Digital;