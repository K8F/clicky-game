import React from 'react';
import "./Cards.css";

const Cards = props => (
    <div 
    className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
    key={props.id}
    //onclick
    >
        <img
        id={props.id}
        src={props.image}
        alt={props.name}
        />
    </div>
);

export default Cards;