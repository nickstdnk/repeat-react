const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push({
        id: 12,
        message: state.newMessage,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Creative-Tail-People-superman.svg/1200px-Creative-Tail-People-superman.svg.png'
      })
      state.newMessage = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessage = action.newMessage
      return state
    default:
      return state
  }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})


export const updateNewMessageTextActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message
})

export default dialogsReducer