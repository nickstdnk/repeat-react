import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', countLikes: 15},
        {id: 2, message: 'It\'s my first post', countLikes: 20},
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Sergey',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 2,
          name: 'Nikolay',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 3,
          name: 'Galina',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 4,
          name: 'Alex',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 5,
          name: 'Andrey',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
      ],
      messages: [
        {
          id: 1,
          message: 'Hi',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 2,
          message: 'Privetik',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 3,
          message: 'Privet',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 4,
          message: 'Hello',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
        {
          id: 5,
          message: 'Lorem',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        },
      ],
      newMessage: '',
    },

    friendsPage: {
      friends: [
        {id: 1, name: 'Nikolay', surname: 'Stadnik'},
        {id: 2, name: 'Pevets', surname: 'Sergey'},
        {id: 3, name: 'Osipov', surname: 'Alexey'},
      ],
    },
  },
  _callSubscriber() {
    console.log('rerender')
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }


}

export default store
window.store = store