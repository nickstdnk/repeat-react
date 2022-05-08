import { profileAPI } from '../../utils/api/api'
import {
  addPostActionCreator,
  setStatus,
  setUserProfile,
  updateNewPostTextActionCreator,
} from '../actions/profile'
import * as constants from '../constants/profile'

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', countLikes: 15},
    {id: 2, message: 'It\'s my first post', countLikes: 20},
  ],
  newPostText: '',
  profile: null,
  status: '',
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
    case constants.SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}

export const getProfile = (userId) => async dispatch => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async dispatch => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status) => async dispatch => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const updateNewPostText = (text) => dispatch => {
  dispatch(updateNewPostTextActionCreator(text))
}

export const addPost = () => dispatch => {
  dispatch(addPostActionCreator())
}