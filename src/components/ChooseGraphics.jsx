import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MyContext from './MyContext';
import bgImg from '../assets/images/bgImg.png';
import logo from '../assets/images/logo.png';
import ArsenalLogo from '../assets/images/ArsenalLogo2x.png';
import Gooner from '../assets/images/Gooner2x.png';
import Cannon from '../assets/images/Cannon2x.png';
import Arsenal from '../assets/images/Arsenal2x.png';
import Gunners from '../assets/images/Gunners2x.png';
import AdidasLogo from '../assets/images/AdidasLogo2x.png';


const ChooseGraphics = () => {

  const { selectedImage, setSelectedImage } = useContext(MyContext);

  const handleDragStart = (e, graphicImg) => {
    e.dataTransfer.setData('text', graphicImg);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e, targetContainer) => {
    e.preventDefault();
    const image = e.dataTransfer.getData('text');
    if (targetContainer === 'selection-box') {
      setSelectedImage(image);
    }
  }


  return (
    <>
      <div className='relative'
        style={{
          background: `transparent url(${bgImg})`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', width: '100vw', height: '100vh'
        }}>
        <img src={logo} className='absolute w-[262px] h-[109px] top-[53px] left-[382px]' />
        <div className='relative top-[190px] grid grid-cols-3'>
          <div className='absolute flex flex-col items-center justify-center gap-y-8 top-[26px] left-[22px]'>
            <div className='bg-[#ffffff] rounded-xl'>
              <img
                src={ArsenalLogo}
                className='w-[115px] h-[115px]'
                id='ArsenalLogo'
                draggable
                onDragStart={(e) => handleDragStart(e, ArsenalLogo)} />
            </div>
            <div className='bg-[#ffffff] rounded-xl'>
              <img
                src={Gooner}
                className='w-[122px] h-[122px]'
                id='Gooner'
                draggable
                onDragStart={(e) => handleDragStart(e, Gooner)} />
            </div>
            <div className='bg-[#ffffff] rounded-xl'>
              <img
                src={Cannon}
                className='w-[118px] h-[118px]'
                id='Cannon'
                draggable
                onDragStart={(e) => handleDragStart(e, Cannon)} />
            </div>
          </div>
          <div className='selection-box absolute bg-[#ffffff] w-[668px] h-[432px] top-[3px] left-[178px] 
            flex items-center justify-center'
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, 'selection-box')}>
            {selectedImage && <img src={selectedImage} className='w-[400px] h-[400px]' alt="selected graphics" />}
          </div>
          <div className='absolute flex flex-col items-center justify-center gap-y-8 top-[27px] left-[882px]'>
            <div className='bg-[#ffffff] rounded-xl'>
              <img
                src={Arsenal}
                className='w-[115px] h-[115px]'
                id='Arsenal'
                draggable
                onDragStart={(e) => handleDragStart(e, Arsenal)} />
            </div>
            <div className='bg-[#ffffff] rounded-xl'>
              <img
                src={Gunners}
                className='w-[122px] h-[122px]'
                id='Gunners'
                draggable
                onDragStart={(e) => handleDragStart(e, Gunners)} />
            </div>
            <div className='bg-[#ffffff] rounded-xl'>
              <img
                src={AdidasLogo}
                className='w-[118px] h-[118px]' id='AdidasLogo'
                draggable
                onDragStart={(e) => handleDragStart(e, AdidasLogo)} />
            </div>
          </div>
        </div>
        <div className='absolute top-[665px] left-[362px] w-[363px] h-[90px] bg-[#7f0b16] text-[#ffffff] 
        text-[17px] text-center font-bold px-8 py-4 border border-[#ffffff] rounded-2xl'>
          DRAG AND DROP GRAPHICS TO MAKE YOUR ARSENAL RALLY TOWEL
        </div>
        <Link to='/confirm-design' className='absolute top-[664px] left-[804px] w-[203px] h-[61px] 
        text-[#7f0b16] bg-[#ffffff] text-[45px] text-center font-bold rounded-full'>
          NEXT
        </Link>
      </div>
    </>
  )
}


export default ChooseGraphics;