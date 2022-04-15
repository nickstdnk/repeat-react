import React from 'react'
import styles from './Users.module.scss'
import axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.getUsers(response.data.items)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.getUsers(response.data.items)
      })
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return <div>
      <div>
        {
          pages.map(p => {
            return <span key={p} className={this.props.currentPage === p && styles.selectedPage}
                         onClick={() => this.onPageChanged(p)}>{p}</span>
          })
        }
      </div>

      {this.props.users.map(u =>
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