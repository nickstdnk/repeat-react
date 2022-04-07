import React from 'react'
import Dialogs from './Dialogs'
import { AddMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer'


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage

  let onAddMessage = () => {
    props.store.dispatch(AddMessageActionCreator())
  }

  let onMessageChange = (message) => {
    let action = updateNewMessageTextActionCreator(message)
    props.store.dispatch(action)
  }


  return (
    <Dialogs onAddMessage={onAddMessage} updateNewMessageText={onMessageChange} dialogs={state.dialogs}
             messages={state.messages}/>
  )
}

export default DialogsContainer
