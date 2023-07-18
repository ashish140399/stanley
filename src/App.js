import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import HomePage from './components/HomePage';
import ThankyouPage from './components/ThankyouPage';
import "./assets/fonts/HelveticaNeueCondensedBold.ttf";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customize-item' element={<HomePage />} />
          <Route path='/thankyou' element={<ThankyouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
