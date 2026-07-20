import React from 'react'

const Post = ({post}) => {
  return (
    <div>
        <h2>{post.title}</h2>
        <h2>{post.content}</h2>
    </div>
  )
}

export default Post