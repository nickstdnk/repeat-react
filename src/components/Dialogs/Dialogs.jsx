import React, { useRef } from 'react'
import styles from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
  let newMessageElement = useRef(null)

  // let addMessage = () => {
  //   let text = newMessageElement.current.value;
  //   alert(text);
  // }
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
        <textarea ref={newMessageElement}></textarea>
        <button onClick={() => alert(newMessageElement.current.value)}>Add</button>
      </div>

    </div>
  )
}

export default Dialogs
