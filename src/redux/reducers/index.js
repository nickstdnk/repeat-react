import { combineReducers } from 'redux'
import appReducer from './app'

import dialogsReducer from './dialogs'
import friendsReducer from './friends'
import profileReducer from './profile'
import sidebarReducer from './sidebar'
import usersReducer from './users'
import authReducer from './auth'

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