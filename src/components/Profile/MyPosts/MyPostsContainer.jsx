import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let MyStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let MyDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    onAddPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(MyStateToProps, MyDispatchToProps)(MyPosts)

export default MyPostsContainer
