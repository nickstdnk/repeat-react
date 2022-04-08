import Dialogs from './Dialogs'
import { AddMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(AddMessageActionCreator())
    },
    updateNewMessageText: (message) => {
      dispatch(updateNewMessageTextActionCreator(message))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
