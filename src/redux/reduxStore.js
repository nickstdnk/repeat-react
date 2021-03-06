import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'


import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store