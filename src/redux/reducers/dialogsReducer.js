const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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
}


export default function dialogsReducer(state = initialState, action) {
  let stateCopy = {
    ...state,
    messages: [...state.messages]
  }

  switch (action.type) {
    case ADD_MESSAGE: {
      stateCopy.messages.push({
        id: 12,
        message: state.newMessage,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png'
      })
      stateCopy.newMessage = ''
      return stateCopy
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
      stateCopy.newMessage = action.newMessage
      return stateCopy
    }

    default:
      return state
  }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})


export const updateNewMessageTextActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message
})

