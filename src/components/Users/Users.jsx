import React from 'react'
import styles from './Users.module.scss'

const Users = (props) => {
  return (
    <div>
      {props.users.map(u =>
        <div key={u.id}>
          <div className="left">
            <div><img className={styles.userPhoto} src={u.userPhoto} alt="logo"/></div>
            <div>
              <button onClick={() => {
                props.toggleFollow(u.id)
              }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
          </div>
          <div className="right">
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users