import { useState } from 'react'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home/Home';
import NewAnimal from './views/shared/NewAnimal';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewAnimal />} />
        </Routes>
    </>
  )
}

export default App
