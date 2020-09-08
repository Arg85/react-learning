import React from 'react'
function Card(props){
    return(
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="mera" className="card__img"/>
            <div className="card info">
                <span className="card__category">A netflix original Series </span>
                <h3 className="card__title">{props.title}</h3>
                <a href="" target="_blank">
                    <button className="Buto">{props.but}</button>
                </a>
            </div>
        </div>
    </div>
    </>);
}
export default Card;