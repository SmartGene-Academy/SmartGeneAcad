import './App.css';
import Home from './Pages/home';
import Connect from './Pages/Connect';
import Programs from './Pages/Programs';
import Resources from './Pages/Resources';
import About from './Pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Connect' element={<Connect />} />
        <Route path='/Programs' element={<Programs />} />
        <Route path='/Resources' element={<Resources />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
