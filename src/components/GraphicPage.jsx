import React from 'react';
import graphicImg1 from '../assets/images/graphicImg1.png';
import graphicImg2 from '../assets/images/graphicImg2.png';
import graphicImg3 from '../assets/images/graphicImg3.png';
import graphicImg4 from '../assets/images/graphicImg4.png';
import graphicImg5 from '../assets/images/graphicImg5.png';
import graphicImg6 from '../assets/images/graphicImg6.png';
import graphicImg7 from '../assets/images/graphicImg7.png';
import graphicImg8 from '../assets/images/graphicImg8.png';
import graphicImg9 from '../assets/images/graphicImg9.png';
import graphicImg10 from '../assets/images/graphicImg10.png';
import graphicImg11 from '../assets/images/graphicImg11.png';
import graphicImg12 from '../assets/images/graphicImg12.png';
import graphicImg13 from '../assets/images/graphicImg13.png';
import graphicImg14 from '../assets/images/graphicImg14.png';



const GraphicPage = ({ handleGraphicChoice }) => {

    const handleSelectImage = (graphImg) => {
        handleGraphicChoice(graphImg);
    }


    return (
        <>
            <div className='mt-4 font-bold text-gray-500'>
                CHOOSE YOUR GRAPHIC
            </div>
            <div className='mt-4 grid grid-cols-5 gap-y-2 '>
                <div
                    onClick={() => handleSelectImage(graphicImg1)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg1} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg2)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg2} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg3)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg3} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg4)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg4} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg5)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg5} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg6)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg6} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg7)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg7} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg8)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg8} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg9)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg9} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg10)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg10} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg11)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg11} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg12)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg12} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg13)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold 
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg13} alt="" />
                </div>
                <div onClick={() => handleSelectImage(graphicImg14)}
                    className='w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full'>
                    <img src={graphicImg14} alt="" />
                </div>
            </div>
        </>
    )
}

export default GraphicPage;