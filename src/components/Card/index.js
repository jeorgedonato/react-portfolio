import React from 'react';
import './style.css';

const Card = props => {
  return (
    <>
      <div className="card">
        <div className="card-img"><img src={props.src} alt={props.text}/></div>
        <div className="card-box">{props.text}</div>
      </div>
    </>
  );
};

export default Card;