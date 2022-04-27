import { authAPI } from '../../utils/api/api'
import { setAuthUserData, setCaptcha } from '../actions/auth'
import * as constants from '../constants/auth'

const initialState = {
  id: null,
  email: null,
  login: null,
  captcha: null,
  isAuth: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case constants.SET_CAPTCHA: {
      return {
        ...state,
        ...action.payload,
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
          dispatch(setAuthUserData(id, email, login, true))
        }
      })
  }
}

export const login = (data, setError) => {
  const {email, password, rememberMe, captcha} = data
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
      .then(data => {
        const {fieldsErrors, resultCode, messages} = data

        const setFieldsError = () => {
          if (fieldsErrors.length > 0) {
            for (let key in fieldsErrors) {
              let message = fieldsErrors[key].error
              setError(fieldsErrors[key].field, {type: 'server', message})
            }
          } else for (let key in messages) {
            let message = messages[key]
            setError('common', {type: 'server', message})
          }
        }

        switch (resultCode) {
          case 0:
            dispatch(getAuthUserData())
            break
          case 1:
            setFieldsError()
            break
          case 10:
            authAPI.getCaptcha()
              .then(data => {
                dispatch(setCaptcha(data))
              })
            setFieldsError()
            break
          default:
            throw Error('Error Auth')
        }
      })
  }
}

export const logout = () => {
  return dispatch => {
    authAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })
  }
}