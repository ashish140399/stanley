import React from 'react';
import logo from '../assets/images/logo.png';
import '../style.css';


const Base = ({ title = "", className = "", children }) => {
    return (
        <>
            <div className='container  containerBorder w-[100%] h-[100vh]  bg-gradient-to-r from-[#b6d3d9] via-[#b6d3d9] to-[#c7dbc0] '>
                <div className=''>
                    <div className=' h-[120px] bg-gradient-to-r from-[#70b7c9] via-[#76bbc0] to-[#a7db66]'>
                        <h1 className='text-center pt-10 font-black text-5xl text-[#ffffff]'>
                            {title}
                        </h1>
                    </div>
                    <div className={`px-4 ${className}`}>
                        {children}
                    </div>
                    <footer className='absolute w-full h-[130px] bg-gradient-to-r from-[#70b7c9] via-[#70b7c9]  to-[#82c5aa]   bottom-0 '>
                        <div className='mt-2 flex items-center justify-around '>
                            <button className='py-2 px-6 mt-4 text-[#70b7c9] text-2xl font-black bg-[#ffffff]  rounded-full'>
                                Back
                            </button>
                            <div className='px-[15%]'>
                                <img src={logo} className='w-[190px]' alt="logo" />
                            </div>
                            <button className='py-2 px-6 mt-4 text-[#70b7c9] text-2xl font-black bg-[#ffffff] rounded-full'>
                                Next
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}


export default Base;