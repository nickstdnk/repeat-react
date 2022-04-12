import React from 'react'
import styles from './Users.module.scss'
import axios from 'axios'

class Users extends React.Component {
  constructor(props) {
    super(props)
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.getUsers(response.data.items)
      })
  }

  render() {
    return <div>
      {this.props.users.map(u =>
        <div key={u.id}>
          <div className="left">
            <div><img className={styles.userPhoto}
                      src={u.userPhoto != null ? u.userPhoto : 'https://vseretsepty.ru/wp-content/uploads/images/persona.png'}
                      alt="logo"/>
            </div>
            <div>
              <button onClick={() => {
                this.props.toggleFollow(u.id)
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
  }
}

export default Users