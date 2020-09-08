import React, { useState } from "react";

const Formon = () => {
   const [fullName,setfullName]=useState({
       fname:"",
       lname:"",
   })
    const dabahua=(obj)=>{

         const {name,value}=obj.target;
         setfullName((preValue)=>{
            //  if(name==='fname'){
            //      return{
            //          fname:value,
            //          lname:preValue.lname
            //      }}
            //      else if(name==='lname'){
            //         return{
            //             fname:preValue.fname,
            //             lname:value,
            // }
            // }
            return{
                ...preValue,
                [name]:value,
            }
         })    
    }
    const onSubmit=(event)=>{
        event.preventDefault()
alert("hogya kaam")

    }
    return(
        <>
        <form onSubmit={onSubmit}>
        <div>
            <h1>hi {fullName.fname} {fullName.lname}</h1>
            <input type='text'  placeholder="enter your name" value={fullName.fName} onChange={dabahua} name='fname'></input>
            <input type='text'  placeholder="enter your lastname" value={fullName.lName} onChange={dabahua} name='lname'></input>

            <button type="submit">daba</button>
        </div>
        </form>
        </>
    );
};
export default Formon;