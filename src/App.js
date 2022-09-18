import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import HideAppBar from './components/HideAppBar';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <HideAppBar>
          
        </HideAppBar>
      </div>
      <div className='footer'>
        <Footer></Footer>
        <p>Algo mas</p>
      </div>
    </div>
  );
}

export default App;
