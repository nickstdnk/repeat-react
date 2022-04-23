import { profileAPI } from '../../api/api'
import { addPostActionCreator, setUserProfile, updateNewPostTextActionCreator } from '../actions/profile'
import * as constants from '../constants/profile'

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
    case constants.ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {
          id: 8,
          message: state.newPostText,
          countLikes: 0,
        }],
      }
    }
    case constants.UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case constants.SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state
  }
}

export const getProfileUserData = (userId) => {
  return dispatch => {
    profileAPI.getProfileUserData(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}

export const updateNewPostText = (text) => {
  return dispatch => {
    dispatch(updateNewPostTextActionCreator(text))
  }
}

export const addPost = () => {
  return dispatch => {
    dispatch(addPostActionCreator())
  }
}