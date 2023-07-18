import React from 'react'
import Base from './Base';
import bgImage from '../assets/images/bgimage.png';
import path3 from '../assets/images/path3.png';
import path581 from '../assets/images/path581.png';
import welikeyourstyle from '../assets/images/welikeyourstyle.png';
import heading2 from '../assets/images/thank-you-h2.png';
import shareItOnSocialMedia from '../assets/images/content-share.png';
import logo from '../assets/images/logo.png';



const ThankyouPage = () => {
    return (
        <>
            <div className='relative'
                style={{
                    background: `transparent url(${bgImage})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', width: '100vw', height: '100vh'
                }}>
                <div className='w-[1026px] h-[499px] top-[112px] left-[0px] opacity-[0.6] absolute'
                    style={{
                        background: `transparent url(${path3})`, backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',
                        boxShadow: '0px 3px 6px #00000064',
                    }}>
                </div>
                <div className='w-[1026px] h-[403px] top-[167px] left-[0px] opacity-1 absolute'
                    style={{
                        background: `transparent url(${path581})`, backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',
                        boxShadow: '0px 3px 6px #00000064'
                    }}>
                </div>
                <div className='text-[#ffffff] top-[179px] left-[38px] w-[950px] h-[113px] text-[99px] opacity-1 absolute'
                    style={{
                        background: `transparent url(${welikeyourstyle})`, backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',
                    }}>
                </div>
                <div className='text-[#ffffff] top-[287px] left-[97px] w-[830px] h-[40px] text-[99px] opacity-1 absolute'
                    style={{
                        background: `transparent url(${heading2})`, backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',
                    }}>
                </div>
                <div className='text-[#ffffff] top-[345px] left-[228px] w-[568px] h-[215px] text-[99px] opacity-1 absolute'
                    style={{
                        background: `transparent url(${shareItOnSocialMedia})`, backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',
                    }}>
                </div>
                <div className='top-[627px] left-[406px] w-[213px] h-[108px] opacity-1 absolute'
                    style={{
                        background: `transparent url(${logo})`, backgroundRepeat: 'no-repeat', backgroundOrigin: 'padding-box',
                    }}>
                </div>
            </div>
        </>
    )
}


export default ThankyouPage;