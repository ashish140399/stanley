import React from 'react';
import Base from './Base';
import customTextItem from '../assets/images/customTextItem.png';


const Monogram = () => {
  return (
    <>
      <Base title="ADD YOUR MONOGRAM">
        <div className='grid grid-cols-2 '>
          <div className=''>
            <img src={customTextItem} className='ml-[60%] h-[350px]' alt="" />
          </div>
          <div className='px-2 max-w-[500px]'>
            <div className='mt-4 font-bold text-gray-500'>
              ENGRAVING TYPE (<span className='text-red-500 italic'>TAP ONE OF THE BELOW OPTIONS</span>)
            </div>
            <div className='flex items-center justify-between px-4 py-3 border-b-2 border-gray-400'>
              <div className=''>
                <input type="checkbox" id="text" />
                <label htmlFor="text" className='ml-1'>Text</label>
              </div>
              <div>
                <input type="checkbox" id="text" />
                <label htmlFor="text" className='ml-1'>Monogram</label>
              </div>
              <div>
                <input type="checkbox" id="text" />
                <label htmlFor="text" className='ml-1'>Graphic</label>
              </div>
            </div>
            <div>
              <div className='mt-4 font-bold text-gray-500'>
                ENTER YOUR MONOGRAM (3 LETTERS)
              </div>
              <input type="text" className='mt-3 py-2 w-[40%] border-2 border-gray-400 rounded text-center text-gray-700 text-5xl font-bold' value="ACB" />
            </div>
            <div className='mt-3 flex gap-x-2'>
              <div className='w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold bg-[#ffffff] border-2 border-gray-400 rounded-full'>ACB</div>
              <div className='w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold bg-[#ffffff] border-2 border-gray-400 rounded-full'>ACB</div>
              <div className='w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold bg-[#ffffff] border-2 border-gray-400 rounded-full'>ACB</div>
            </div>
          </div>
        </div>
      </Base>
    </>
  )
}

export default Monogram;