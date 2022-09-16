import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <NavBar></NavBar>
      </div>
      <div className='main'>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
