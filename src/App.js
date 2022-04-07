import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Layout from './layout/Layout'

import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout state={props.state.friendsPage}/>}>
          <Route index element={<Profile state={props.state.profilePage}
                                         dispatch={props.dispatch}/>}/>
          <Route path="dialogs/*" element={<Dialogs state={props.state.dialogsPage}
                                                    dispatch={props.dispatch}/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="friends/*" element={<Settings/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
