import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import {
  addPost,
  updateNewPostText
} from '../../../redux/reducers/profile'

let MyStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const MyPostsContainer = (props) => {
  const updateNewPostText = (text) => {
    props.updateNewPostText(text)
  }

  const onAddPost = () => {
    props.addPost()
  }

  return (
    <MyPosts posts={props.posts}
             newPostText={props.newPostText}
             updateNewPostText={updateNewPostText}
             onAddPost={onAddPost}/>
  )
}

export default connect(MyStateToProps, {updateNewPostText, addPost})(MyPostsContainer)


