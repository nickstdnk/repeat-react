import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Layout from './layout/Layout'

import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Profile/>}/>
          <Route path="dialogs/*" element={<DialogsContainer/>}/>
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
