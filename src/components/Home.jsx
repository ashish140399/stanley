import React from 'react';
import bgImg from '../assets/images/bgImg.png';
import logo from '../assets/images/frontPageLogos.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/details">
        <div className='relative'
          style={{
            background: `transparent url(${bgImg})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', width: '100vw', height: '100vh'
          }}>
          <img src={logo} className='absolute w-[572px] h-[262px] top-[241px] left-[233px]' />
        </div>
      </Link>
    </>
  )
}

export default Home;