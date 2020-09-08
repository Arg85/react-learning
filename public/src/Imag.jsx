import React from 'react'
const Sty={
    display:'inline-block',
    justifyContent: 'center',
    paddingLeft:'100px'
}
function Imag(){
    return(
        <>
        <img style= {Sty} src="https://picsum.photos/200/300" alt="kcuh nhi"/>
          <img style= {Sty} src="https://picsum.photos/201/300" alt="kc nhi"/>
          <img style= {Sty} src="https://picsum.photos/202/300" alt=" nhi"/>
    </>);
}
export default Imag;