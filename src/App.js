
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import ChooseGraphics from './components/ChooseGraphics';
import ConfirmDesign from './components/ConfirmDesign';
import ThankyouPage from './components/ThankyouPage';
import Artboard from './components/Artboard';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/choose-graphics' element={<ChooseGraphics />} />
          <Route path='/confirm-design' element={<ConfirmDesign />} />
          <Route path='/thankyou' element={<ThankyouPage />} />
          <Route path='/artboard' element={<Artboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
