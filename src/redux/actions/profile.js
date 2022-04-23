import * as constants from '../constants/profile'

export const addPostActionCreator = () => ({type: constants.ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: constants.UPDATE_NEW_POST_TEXT,
  newText: text,
})
export const setUserProfile = (profile) => ({type: constants.SET_USER_PROFILE, profile})