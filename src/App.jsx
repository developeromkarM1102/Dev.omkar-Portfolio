import React from 'react'
import './index.css'
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
