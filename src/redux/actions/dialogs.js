import * as constants from '../constants/dialogs'

export const addMessage = () => ({type: constants.ADD_MESSAGE})

export const updateNewMessageText = (message) => ({
  type: constants.UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message,
})