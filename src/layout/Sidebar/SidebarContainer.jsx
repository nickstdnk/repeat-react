import { connect } from 'react-redux'
import Sidebar from './Sidebar'

const SidebarContainer = (props) => {
  return (
    <Sidebar {...props}/>
  )
}

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    menu: state.sidebar.menu,
  }
}
export default connect(mapStateToProps)(SidebarContainer)


