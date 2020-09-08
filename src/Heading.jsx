import React from 'react'
const Sta={
    textTransform: 'capitalize',
    textAlign: 'center',
   color: 'lightcoral',
  paddingTop: '9px',
  paddingBottom: '25px'
}
function Heading(){
    return(
        <h1 style={Sta}>Welcome To the List Of Best Shows on Netflix</h1>
    );
}
export default Heading;