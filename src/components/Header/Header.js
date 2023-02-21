import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <>
        <h1>{props.title}</h1>
        <img 
            className='Header-img' 
            src={props.img}
            alt="mountain" 
        />
    </>
  )
}

export default Header