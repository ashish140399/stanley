import React from 'react';
import ArsenalLogo from '../assets/images/ArsenalLogo2x.png';
import Gooner from '../assets/images/Gooner2x.png';
import Cannon from '../assets/images/Cannon2x.png';
import Arsenal from '../assets/images/Arsenal2x.png';
import Gunners from '../assets/images/Gunners2x.png';
import AdidasLogo from '../assets/images/AdidasLogo2x.png';

const Artboard = () => {
    return (
        <>
            <div className='relative grid grid-cols-2'>
                <div>
                    <img src={Gooner} className='absolute w-[310px] h-[258px] top-[95px] left-[75px]' />
                    <img src={Gunners} className='absolute w-[321px] h-[308px] top-[237px] left-[75px]' />
                    <img src={Cannon} className='absolute w-[328px] h-[323px] top-[418px] left-[75px]' />
                </div>
                <div>
                    <img src={ArsenalLogo} className='absolute w-[265px] h-[265px] top-[56px] left-[576px]' />
                    <img src={AdidasLogo} className='absolute w-[296px] h-[290px] top-[300px] left-[554px]' />
                    <img src={Arsenal} className='absolute w-[258px] h-[256px] top-[588px] left-[587px]' />
                </div>
            </div>
        </>
    )
}

export default Artboard;