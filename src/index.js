import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import store from './redux/reduxStore'

import './styles/index.scss'


const root = createRoot(document.getElementById('root'))
let rerenderAllThree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store}/>
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerenderAllThree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderAllThree(state)
})