import { compose } from 'redux'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import WithAuthRedirect from '../hoc/WithAuthRedirect'
import { getMessage, getNewMessageText } from '../../redux/reducers/dialogsReducer'

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage,
  }
}

const DialogsContainer = (props) => {
  const onAddMessage = () => {
    props.getMessage()
  }

  const updateNewMessageText = (message) => {
    props.getNewMessageText(message)
  }

  return (
    <Dialogs dialogs={props.dialogs}
             messages={props.messages}
             newMessage={props.newMessage}
             onAddMessage={onAddMessage}
             updateNewMessageText={updateNewMessageText}/>
  )
}

export default compose(
  connect(mapStateToProps, {getMessage, getNewMessageText}),
  WithAuthRedirect,
)
(DialogsContainer)