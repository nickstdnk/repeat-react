import { combineReducers } from 'redux'
import appReducer from './appReducer'

import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

export default combineReducers(
  {
    app: appReducer,
    authPage: authReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
  },
)