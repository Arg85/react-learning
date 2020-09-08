import React, { useState } from 'react';
import ToDolists from './ToDolists';
const Todoproject= ()=>{
const[inputList,setInputList]=useState("");
const[items,setItems]=useState([]);



const itemEvent=(event)=>{
setInputList(event.target.value);
}
const addItem=()=>{
setItems((oldItem)=>{
    return [...oldItem,inputList];
})
setInputList("");
}
    return(
<>
<div className="main_div">
    <div className="center_div">
    <h1>ToDo List</h1>
    <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
    <button onClick={addItem}> + </button>
      <ol>
          {/* <li>{inputList}</li> */}
        {
            items.map((itemval)=>{
              return <ToDolists 
                   text={itemval}
               />
            })
        }

              </ol>
    </div>
</div>
</>
    )
};
export default Todoproject;