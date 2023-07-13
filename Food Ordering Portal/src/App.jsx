import React from 'react';

// import CircularImages from './circular_img';
// import ImageColumn from './ImageColumn';
import Slideshow from './Components/Components/imagesliders';
import ImageColumn from './Components/Components/ImageColumn';
import NavBar from './Components/Components/NavBar';
import Login from './Components/Components/login';
import Register from './Components/Components/register';
import { Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Components/Components/home';

const App = () => {
  return (
    <Router>
     
      <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/home' element={<Home/>}/>
       
      {/* Rest of your application */}
      </Routes>
      </Router>
  );
};

export default App;
