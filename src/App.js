import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from './components/MyContext';
import Home from './components/Home';
import Details from './components/Details';
import ChooseGraphics from './components/ChooseGraphics';
import ConfirmDesign from './components/ConfirmDesign';
import ThankyouPage from './components/ThankyouPage';
import Artboard from './components/Artboard';
import './App.css';


function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{ selectedImage, setSelectedImage }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/choose-graphics' element={<ChooseGraphics />} />
            <Route path='/confirm-design' element={<ConfirmDesign />} />
            <Route path='/thankyou' element={<ThankyouPage />} />
            <Route path='/artboard' element={<Artboard />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
