const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', countLikes: 15},
    {id: 2, message: 'It\'s my first post', countLikes: 20},
  ],
  newPostText: '',
  profile: null,
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {
          id: 8,
          message: state.newPostText,
          countLikes: 0,
        }]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
