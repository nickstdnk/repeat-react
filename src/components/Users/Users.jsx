import React from 'react'
import { NavLink } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'

import avatar from '../../assets/img/avatar.png'
import styles from './Users.module.scss'

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (<>
      {props.isFetching ? <Preloader/> : null}
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
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img className={styles.userPhoto}
                       src={u.photos.small != null
                         ? u.photos.small
                         : avatar}
                       alt="logo"/>
                </NavLink>
              </div>
              <div>
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  u.followed ? props.unfollow(u.id) : props.follow(u.id)
                }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
              </div>
            </div>
            <div className="right">
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>,
        )}
      </div>
    </>
  )
}


export default Users