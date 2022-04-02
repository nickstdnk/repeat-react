import React from 'react'
import styles from '../Dialogs.module.scss'

const Message = (props) => {
  return (
    <div className={styles.message}>
      <div className={styles.messageItem}>
        <img src={`${props.icon}`} alt=""/>
        {props.message}
      </div>
    </div>
  )
}

export default Message
