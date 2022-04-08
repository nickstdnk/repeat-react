import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import store from './redux/reduxStore'

import './styles/index.scss'
import StoreContext from './storeContext'


const root = createRoot(document.getElementById('root'))
let rerenderAllThree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App/>
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerenderAllThree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderAllThree(state)
})