import React from 'react';
import './PostImage.css';

function PostImage(props) {
    return (
        <>
            <img 
                className='Post-img' 
                src={props.img}
                alt="mountain" 
            />
        </>
    )
}

export default PostImage