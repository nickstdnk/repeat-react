import { useRef } from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import styles from './Dialogs.module.scss'


const Dialogs = (props) => {
  let newMessageElement = useRef(null)

  let onAddMessage = () => {
    props.onAddMessage()
  }

  let onMessageChange = () => {
    let message = newMessageElement.current.value
    props.updateNewMessageText(message)
  }


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.dialogs.map((obj) => (
          <DialogItem key={obj.id} name={obj.name} id={obj.id} icon={obj.icon}/>
        ))}
      </div>
      <div className={styles.messagesItems}>
        {props.messages.map((obj) => (
          <Message key={obj.id} message={obj.message} id={obj.id} icon={obj.icon}/>
        ))}
      </div>

      <div>
        <textarea value={props.newMessage} ref={newMessageElement} onChange={onMessageChange}></textarea>
        <button onClick={onAddMessage}>Add</button>
      </div>

    </div>
  )
}

export default Dialogs
