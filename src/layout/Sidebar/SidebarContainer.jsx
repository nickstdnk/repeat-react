import { connect } from 'react-redux'
import Sidebar from './Sidebar'

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    menu: state.sidebar.menu,
  }
}

const SidebarContainer = connect(mapStateToProps, null)(Sidebar)

export default SidebarContainer
