import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Routes, Route } from 'react-router-dom';

import './styles/App.scss';

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <LeftMenu />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
