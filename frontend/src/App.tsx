import { useState } from 'react'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  console.log("app");
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </>
  )
}

export default App
