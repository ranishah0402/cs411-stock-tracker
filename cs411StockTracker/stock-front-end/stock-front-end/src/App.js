import React from 'react';
import Stock from './pages/Stock';
import './App.css';
import Navbar from './NavbarComponents';
import Home from './pages/index';
import SignUp from './pages/signup';
import LogInPage from './pages/login'; 
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


function App() {

  return (
    <div className="App">

      <Router>
      <Navbar />
      <Routes>
          <Route path='/index' element={<Home />} />
          <Route path='/login' element={<LogInPage/>} />
          <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </Router>
      
    </div>
    
  );
}
export default App;
