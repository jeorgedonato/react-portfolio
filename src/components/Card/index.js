import React from 'react';
import './style.css';

const Card = props => {
  // console.log(props)
  return (
    <>
      <div className="card">
        <div className="card-img"><img {...props} alt={props.text}/></div>
        <div className="card-box">{props.text}</div>
        <div className="card-buttons">
          <a href={props.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
          <a href={props.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;