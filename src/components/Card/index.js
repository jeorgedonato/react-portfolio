import React from 'react';
import './style.scss';

const Card = props => {
  // console.log(props)
  // const cardButton = useRef(null);

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img {...props} alt={props.text} />
          <div className="card-overlay"></div>
          <div className="card-buttons">
            <p>{props.desc}</p>
            <a href={props.repo} className="btn-card" target="_blank" rel="noreferrer">
              Repo
          </a>
            <a href={props.demo} className="btn-card" target="_blank" rel="noreferrer">
              Demo
          </a>
          </div>
        </div>
        <div className="card-box">{props.text}</div>
      </div>
    </>
  );
};

export default Card;