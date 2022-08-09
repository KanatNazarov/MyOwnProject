import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Main';
import About from './about/About';
import Clients from './Clients/Clients';
import Gallery from './gallery/Gallery';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/clients' element={<Clients/>} />
      <Route path='/gallery' element={<Gallery/>} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
