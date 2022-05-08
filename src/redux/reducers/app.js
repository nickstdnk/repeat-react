import * as constants from '../constants/app'
import { initializeSuccess } from '../actions/app'
import { getAuthUserData } from './auth'

const initialState = {
  initialize: false,
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case constants.INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialize: true,
      }
    }
    default: {
      return state
    }
  }
}

export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(initializeSuccess())
  })
}
