import React from 'react';
import { Link } from "react-router-dom";
import bgImg from '../assets/images/bgImg.png';
import logo from '../assets/images/logo.png';

const ConfirmDesign = () => {
    return (
        <>
            <div>
                <div className='relative'
                    style={{
                        background: `transparent url(${bgImg})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', width: '100vw', height: '100vh'
                    }}>
                    <img src={logo} className='absolute w-[262px] h-[109px] top-[53px] left-[382px]' />
                    <div className='absolute top-[159px] text-[50px] w-full text-center text-[#ffffff] font-bold'>
                        CONFIRM YOUR DESIGN
                    </div>
                    <div className='absolute bg-[#ffffff] w-[586px] h-[380px] top-[250px] left-[218px] flex items-center justify-center'>
                    </div>
                    <div>
                        <Link to="/choose-graphics" className='absolute top-[664px] left-[38px] w-[203px] h-[61px] text-[#7f0b16] bg-[#ffffff] 
                            text-[32px] text-center py-2 font-bold rounded-full'>
                            BACK
                        </Link>
                        <Link to="/thankyou" className='absolute top-[664px] left-[804px] w-[203px] h-[61px] text-[#7f0b16] bg-[#ffffff] 
                            text-[32px] text-center py-2 font-bold rounded-full'>
                            CONFIRM
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmDesign;