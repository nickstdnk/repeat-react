import React, { useRef } from 'react'
import styles from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { AddMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'


const Dialogs = (props) => {
  let newMessageElement = useRef(null)

  let addMessage = () => {
    props.dispatch(AddMessageActionCreator())
  }

  let onMessageChange = () => {
    let message = newMessageElement.current.value
    let action = updateNewMessageTextActionCreator(message)
    props.dispatch(action)
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.state.dialogs.map((obj) => (
          <DialogItem key={obj.id} name={obj.name} id={obj.id} icon={obj.icon}/>
        ))}
      </div>
      <div className={styles.messagesItems}>
        {props.state.messages.map((obj) => (
          <Message key={obj.id} message={obj.message} id={obj.id} icon={obj.icon}/>
        ))}
      </div>

      <div>
        <textarea value={props.newMessage} ref={newMessageElement} onChange={onMessageChange}></textarea>
        <button onClick={addMessage}>Add</button>
      </div>

    </div>
  )
}

export default Dialogs
