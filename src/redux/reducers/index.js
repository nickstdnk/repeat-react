import { combineReducers } from 'redux'

import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

export default combineReducers(
  {
    authPage: authReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
  }
)