import React, { useState } from 'react'

const Time=()=>{
    let Cutime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(Cutime);

    const daba=()=>{
 
       let Ctime=new Date().toLocaleTimeString();
       setTime(Ctime);
        
        }
    return(

        <>
<h1>{time}</h1>
<button onClick={daba}> Get time</button>
</>
    )
}


export default Time;