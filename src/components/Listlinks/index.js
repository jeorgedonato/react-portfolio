import React from 'react';


const Listlinks = props => {

  const clickHandler = e => {
    let targ = e.target.dataset.href;
    console.log(targ)
    if(targ === "home") {return window.scrollTo(0, 0)};
    const curHref = document.querySelector(`.${targ}`);
    console.log(curHref);
    curHref.scrollIntoView();
  };

  return (
    <>
      <li onClick={props.onClick}>
        <button data-href={props.location} onClick={e => {clickHandler(e)}}>{props.title}</button>
      </li>
    </>
  )

};

export default Listlinks