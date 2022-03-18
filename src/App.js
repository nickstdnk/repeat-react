import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import './styles/App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <LeftMenu />
      <Profile />
    </div>
  );
}

export default App;
