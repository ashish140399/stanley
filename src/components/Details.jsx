import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bgImg from '../assets/images/bgImg.png';
import logo from '../assets/images/logo.png';


const Details = () => {

    const [name, setName] = useState("");

    return (
        <>
            <div>
                <div className='relative'
                    style={{
                        background: `transparent url(${bgImg})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', width: '100vw', height: '100vh'
                    }}>
                    <img src={logo} className='absolute w-[262px] h-[109px] top-[53px] left-[382px]' />
                    <div className='absolute top-[209px] text-[80px] tracking-[-0.07em] w-full text-center text-[#ffffff] font-bold'>
                        ENTER YOUR NAME
                    </div>
                    <div className='absolute top-[371px] left-[107px]'>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-[811px] h-[80px] bg-[#7f0b16] text-[#ffffff] text-[38px] px-4 border border-[#ffffff] rounded-full'
                        />
                    </div>
                    <Link to="/choose-graphics" className='absolute top-[489px] left-[417px] w-[203px] h-[61px] text-[#7f0b16] bg-[#ffffff] 
                            text-[32px] tracking-[-0.07em] text-center py-2 font-bold rounded-full'>
                        ENTER
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Details;