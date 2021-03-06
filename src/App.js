import { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Auth from './components/Auth/Auth'
import Preloader from './components/common/Preloader/Preloader'
import WithAuthRedirect from './components/hoc/WithAuthRedirect'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Layout from './layout/Layout'

import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import { initializeApp } from './redux/reducers/app'

function App(props) {
  useEffect(() => {
    props.initializeApp()
  }, [])

  if (!props.initialize) {
    return <Preloader/>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="profile" element={<ProfileContainer/>}/>
          <Route path="profile/:userId" element={<ProfileContainer/>}/>
          <Route path="dialogs/*" element={<DialogsContainer/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="friends/*" element={<Settings/>}/>
          <Route path="users/*" element={<UsersContainer/>}/>
          <Route path="auth" element={<Auth/>}/>
        </Route>
      </Routes>
    </>
  )
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialize,
})

export default compose(
  connect(mapStateToProps, {initializeApp}),
  WithAuthRedirect,
)(App)
