import React from 'react'
import Dialogs from './Dialogs'
import { AddMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer'
import StoreContext from '../../storeContext'


const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage

          let onAddMessage = () => {
            store.dispatch(AddMessageActionCreator())
          }

          let onMessageChange = (message) => {
            let action = updateNewMessageTextActionCreator(message)
            store.dispatch(action)
          }
          return (
            <Dialogs onAddMessage={onAddMessage} updateNewMessageText={onMessageChange} dialogs={state.dialogs}
                     messages={state.messages}/>
          )
        }
      }
    </StoreContext.Consumer>

  )
}

export default DialogsContainer
