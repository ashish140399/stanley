import React, { useState } from 'react';


const CustomTextPage = ({ textTitle, setTextTitle, handleTextTitleFont }) => {

    const [selectedTextFont, setSelectedTextFont] = useState("");

    const handleChooseFontStyle = (e) => {
        const fontSelected = e.target.getAttribute("data-font");
        setSelectedTextFont(fontSelected);
    }


    return (
        <>
            <div>
                <div>
                    <div className='mt-4 font-bold text-gray-500'>
                        ENTER TEXT HERE (12 CHARACTER MAX)
                    </div>
                    <input
                        type="text"
                        value={textTitle}
                        onChange={(e) => setTextTitle(e.target.value)}
                        className='py-3 w-full border-2 border-gray-400 rounded text-center text-gray-700 text-2xl font-bold uppercase'
                        maxLength="12"
                    />
                </div>
                <div className='mt-4 flex gap-x-2'>
                    <div
                        onClick={(e) => { handleTextTitleFont(e); handleChooseFontStyle(e) }}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full z-index 
                    ${selectedTextFont === "font1" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-font="font1" style={{ fontFamily: 'HelveticaNeue' }}>
                        Aa
                    </div>
                    <div
                        onClick={(e) => { handleTextTitleFont(e); handleChooseFontStyle(e) }}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full z-index 
                    ${selectedTextFont === "font2" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-font="font2">
                        Aa
                    </div>
                    <div
                        onClick={(e) => { handleTextTitleFont(e); handleChooseFontStyle(e) }}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full z-index 
                    ${selectedTextFont === "font3" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-font="font3">
                        Aa
                    </div>
                    <div
                        onClick={(e) => { handleTextTitleFont(e); handleChooseFontStyle(e) }}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full z-index 
                    ${selectedTextFont === "font4" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-font="font4">
                        Aa
                    </div>
                    <div
                        onClick={(e) => { handleTextTitleFont(e); handleChooseFontStyle(e) }}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl font-semibold  
                    border-2 border-gray-400 cursor-pointer rounded-full z-index dancing  
                    ${selectedTextFont === "font5" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-font="font5">
                        Aa
                    </div>
                </div>
            </div>
        </>
    )
}


export default CustomTextPage;