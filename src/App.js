// import logo from './logo.svg';
import './App.css';
import Footer from './section/Footer';
import Iconsection from './section/Iconsection';
import Mainsection from './section/Mainheader';
import Onlinecoursesection from './section/Onlinecoursesection';
import Upgradecontent from './section/Upgradecontent';
import Upgradevlsicontent from './section/Upgradevlsicontent';

function App() {
  return (
    <div className="App">
      <Mainsection />
      <Iconsection />
      <Onlinecoursesection />
      <Upgradecontent />
      <Upgradevlsicontent />
      <Footer />
    </div>
  );
}

export default App;
