import styles from '../../layout/Sidebar/Sidebar.module.scss'

const initialState = {
  menu: [
    {text: 'Profile', path: '/'},
    {text: 'Messages', path: '/dialogs'},
    {text: 'News', path: '/news'},
    {text: 'Music', path: '/music'},
    {text: 'Settings', path: '/settings'},
    {text: 'Users', path: '/users'},
    {text: 'Friends', path: '/friends', styles: styles.friends},
  ]
}

export default function sidebarReducer(state = initialState) {
  return state
}