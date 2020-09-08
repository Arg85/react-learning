import React, { useState } from 'react'
// import { Button } from 'reactstrap';

import ReactDOM from 'react-dom';    
 const Even = ()=>{
    const purple="purple";
    const [bg, setBg]=useState(purple)
    const [name, setnm]=useState('click me')
    const bgChange= () => {
      const  col="red";
       setBg(col)
       setnm('ey')

    };
    const bgChange2= () => {
        const  col="blue";
         setBg(col)
         setnm('hlwww')
  
      };
     return(
    

<>
<div style={{backgroundColor:bg}}>
    <button  onDoubleClick={bgChange2} onClick={bgChange}> {name} </button>

</div>
</>
     );
 };
 export default Even;