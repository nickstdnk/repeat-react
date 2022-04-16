import React from 'react'
import styles from './Users.module.scss'

export const Users = (props) => {
  // debugger;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {
          pages.map(p => {
            return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}
                         onClick={() => props.onPageChanged(p)}>{p}</span>
          })
        }
      </div>

      {props.users.map(u =>
        <div key={u.id}>
          <div className="left">
            <div><img className={styles.userPhoto}
                      src={u.userPhoto != null
                        ? u.userPhoto
                        : 'https://vseretsepty.ru/wp-content/uploads/images/persona.png'}
                      alt="logo"/>
            </div>
            <div>
              <button onClick={() => {
                props.toggleFollow(u.id)
              }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
          </div>
          <div className="right">
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </div>
        </div>
      )}
    </div>
  )
}


export default Users