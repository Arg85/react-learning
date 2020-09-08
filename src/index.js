
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// import 'bootstrap-social/bootstrap-social.css';

// ReactDOM.render('kya dikhana','kahan dikhana','callback func')



// var h1=document.createElement("h1");
// h1.innerHTML=("this is trying");
// document.getElementById("root").appendChild(h1);
// we can also use react .fragment instead of a element like  div

// ReactDOM.render(
//     <div>
    
//     <h1>Hello world</h1>
//     <p>This is to show how two jsx elemt can be passed</p>    
    
//     </div>
    
//         ,document.getElementById("root"));

 // other way for array version 16.x.x and higher
    // ReactDOM.render(
    //     [
    //         <h1>Kuch bhi</h1>
    //     ]
    //     ,document.getElementById("root"));
    


// ReactDOM.render(
// <React.Fragment>

// <h1>Hello world</h1>
// <p>This is to show how two jsx elemt can be passed</p>    

// </React.Fragment>

//     ,document.getElementById("root"));


    // for using wexpression of js cannot use statment if else and loop inside the exprwession
// const flname="anurag yadav";


// ReactDOM.render(
//     <React.Fragment>
    
//     <h1>Hello world this is {flname}</h1>
//  <p>my lucky number is {Math.random()}</p>
    
//     </React.Fragment>
    
//         ,document.getElementById("root"));

        

//    template literals  we use backtick
// const fname="anurag ";
// const lname="yadav";

// ReactDOM.render(
//     <React.Fragment>
    
//     <h1> {`my name is ${fname} ${lname}`}</h1>
//  <p>{`my lucky number is ${Math.random()}`}</p>
    
//     </React.Fragment>
    
//         ,document.getElementById("root"));

        
//  challange 
// const date=new Date().toLocaleDateString();
// const time=new Date().toLocaleTimeString();

// ReactDOM.render(
//     <React.Fragment>
    
//     <h1> {`Date is ${date} and time iss ${time}`}</h1>

    
//     </React.Fragment>
    
//         ,document.getElementById("root"));

        
// JSX attributes uses camelcase and images
// const fname="anurag ";
// const lname="yadav";
// const img="https://picsum.photos/200/300"

// const img1="https://picsum.photos/202/300"

// const img2="https://picsum.photos/203/300"
// const web="www.Arg85.github.io"
// ReactDOM.render(
//     <React.Fragment>
    
//     <h1 className="heading"> my name is {fname} {lname}</h1>
// <div className="imag">
// <img src={img} 
//      alt="random 1"/>


// <img src={img1} 
//      alt="random 2"/>

//      <a href={web}>
//      <img src={img2} 
//      alt="random 3"/>
//      </a>
//      </div>
//     </React.Fragment>
    
//         ,document.getElementById("root"));
// function ncard(val){
//     return  (
//         <Card 
//         imgsrc={val.imgsrc}
//         title={val.title}
//         but={val.but}
//      />
//     );
    
//     }
ReactDOM.render(
   <App/>,document.getElementById("root")
)