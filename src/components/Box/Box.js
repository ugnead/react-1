import React from 'react'
import './Box.css';

function Box(props) {
    console.log(props);
  return (
    <>
        <div className={props.color + " Box-item"}></div>
    </>
  )
}

export default Box