import { useRef } from 'react'
import Post from './Post/Post'

import styles from './MyPosts.module.scss'

const MyPosts = (props) => {
  const postElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} countLikes={p.countLikes}/>
  ))

  const newPostElement = useRef(null)

  let onAddPost = () => {
    props.onAddPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }


  return (
    <div className={styles.myPosts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea value={props.newPostText} ref={newPostElement} onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  )
}

export default MyPosts
