import { combineReducers } from 'redux'

import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'

export default combineReducers(
  {
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
  }
)