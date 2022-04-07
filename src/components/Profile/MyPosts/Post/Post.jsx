import React from 'react'
import styles from './Post.module.scss'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png"
        alt=""/>
      {props.message}
      <div>
        <span>like</span> {props.countLikes}
      </div>
    </div>
  )
}

export default Post
