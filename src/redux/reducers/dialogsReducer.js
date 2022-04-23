import { addMessage, updateNewMessageText } from '../actions/dialogs'
import * as constants from '../constants/dialogs'

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
  switch (action.type) {
    case constants.ADD_MESSAGE: {
      return {
        ...state,
        newMessage: '',
        messages: [...state.messages, {
          id: 12,
          message: state.newMessage,
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png',
        }],
      }
    }

    case constants.UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessage: action.newMessage,
      }
    }
    default:
      return state
  }
}

export const getMessage = () => {
  return dispatch => {
    dispatch(addMessage())
  }
}

export const getNewMessageText = (message) => {
  return dispatch => {
    dispatch(updateNewMessageText(message))
  }
}

