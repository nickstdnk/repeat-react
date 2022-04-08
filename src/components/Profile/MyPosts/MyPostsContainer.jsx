import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../storeContext'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().profilePage

          let onAddPost = () => {
            store.dispatch(addPostActionCreator())
          }

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text)
            store.dispatch(action)
          }
          return (
            <MyPosts updateNewPostText={onPostChange} onAddPost={onAddPost}
                     posts={state.posts}
                     newPostText={state.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
