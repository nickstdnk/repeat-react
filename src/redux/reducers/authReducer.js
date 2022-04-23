import { authAPI } from '../../api/api'
import { setAuthUserData } from '../actions/auth'
import * as constants from '../constants/auth'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    }
    default:
      return state
  }
}

export const getAuthUserData = () => {
  return dispatch => {
    authAPI.getAuthUserData()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data
          dispatch(setAuthUserData(id, email, login))
        }
      })
  }
}