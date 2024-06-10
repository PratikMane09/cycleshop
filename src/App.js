
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './pages/Aboutus';
import Locate from './pages/Locate';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
//import Shop from './pages/Shop';
import All from './pages/All';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route path='/' element={<All/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/locate' element={<Locate/>}/>
    <Route path='/contact' element={<Contact/>}/>
   
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
    
  );
}

export default App;
