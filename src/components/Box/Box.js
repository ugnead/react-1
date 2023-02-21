import React from 'react'
import './Box.css';

function Box(props) {
    console.log(props);
    return (
        <div className='col-4'>
            <div className={props.color + " Box-item"}></div>
        </div>
    )
}

export default Box