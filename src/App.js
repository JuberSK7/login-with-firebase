import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Component/Login'
import User from './Component/User'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/' element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
