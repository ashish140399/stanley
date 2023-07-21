import React from 'react';
import bgImg from '../assets/images/bgImg.png';
import logo from '../assets/images/logo.png';

const ThankyouPage = () => {
  return (
    <>
      <div className='relative'
        style={{
          background: `transparent url(${bgImg})`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', width: '100vw', height: '100vh'
        }}>
        <img src={logo} className='absolute w-[262px] h-[109px] top-[53px] left-[382px]' />
        <div className='absolute top-[209px] text-[85px] tracking-[-0.04em] w-full text-center text-[#ffffff] font-bold'>
          NICE TASTE!
        </div>

        <div className='absolute top-[406px] text-[50px] tracking-[-0.07em] w-full text-center text-[#ffffff] font-bold'>
          WE ARE WORKING ON YOUR CUSTOM
        </div>
        <div className='absolute top-[466px] text-[50px] tracking-[-0.07em] w-full text-center text-[#ffffff] font-bold'>
          TOWEL NOW. COMING RIGHT UP.
        </div>
      </div>
    </>
  )
}

export default ThankyouPage