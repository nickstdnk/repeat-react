import Content from './components/Content/Content';
import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import './styles/App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <LeftMenu />
      <Content />
    </div>
  );
}

export default App;
