import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
