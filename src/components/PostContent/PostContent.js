import React from 'react'
import './PostContent.css';

function PostContent(props) {
  return (
    <>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </>
  )
}

export default PostContent