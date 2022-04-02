import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import state, { addPost, subscribe, updateNewPostText } from './redux/state'

let rerenderAllThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

rerenderAllThree(state)
subscribe(rerenderAllThree)