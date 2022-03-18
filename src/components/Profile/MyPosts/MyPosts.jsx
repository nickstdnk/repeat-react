import React from 'react'
import styles from './MyPosts.module.scss'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div className={styles.root}>
        My Posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={styles.posts}>
          <Post/>
        </div>
      </div>
  )
}

export default MyPosts