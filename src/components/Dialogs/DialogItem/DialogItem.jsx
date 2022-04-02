import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Dialogs.module.scss'

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={path}>
        <div className={styles.dialogItem}>
          <img src={`${props.icon}`} alt=""/>
          {props.name}
        </div>
      </NavLink>
    </div>
  )
}

export default DialogItem
