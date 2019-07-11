import React from "react";
import './card.css';

function Cards(props){
        return(
            <img  onClick={props.onClick} src ={props.image}/>
               
        )
    //onClick={}
}

export default Cards;