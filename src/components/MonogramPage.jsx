import React, { useState } from 'react';


const MonogramPage = ({ monogramTitle, setMonogramTitle, handleMonogramTitleFont }) => {

    const [selectedMonogramFont, setSelectedMonogramFont] = useState("");

    const handleChooseMonogramFontStyle = (e) => {
        const fontSelected = e.target.getAttribute("data-monogram-font");
        setSelectedMonogramFont(fontSelected);
    }


    return (
        <>
            <div>
                <div>
                    <div className='mt-4 font-bold text-gray-500'>
                        ENTER YOUR MONOGRAM (3 LETTERS)
                    </div>
                    <input
                        type="text"
                        value={monogramTitle}
                        onChange={(e) => setMonogramTitle(e.target.value)}
                        className='mt-3 py-2 w-[40%] border-2 border-gray-400 text-center text-gray-700 text-5xl font-bold uppercase'
                        maxLength="3"
                    />
                </div>
                <div className='mt-3 flex gap-x-2'>
                    <div onClick={(e) => {handleMonogramTitleFont(e); handleChooseMonogramFontStyle(e)}}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl 
                        font-semibold bg-[#ffffff] border-2 border-gray-400 cursor-pointer rounded-full  
                        ${selectedMonogramFont === "monogramFont1" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-monogram-font="monogramFont1">
                        ACB
                    </div>
                    <div onClick={(e) => {handleMonogramTitleFont(e); handleChooseMonogramFontStyle(e)}}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl 
                    font-semibold bg-[#ffffff] border-2 border-gray-400 cursor-pointer rounded-full  
                    ${selectedMonogramFont === "monogramFont2" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-monogram-font="monogramFont2">
                        ACB
                    </div>
                    <div onClick={(e) => {handleMonogramTitleFont(e); handleChooseMonogramFontStyle(e)}}
                        className={`w-[50px] h-[50px] flex items-center justify-center text-xl 
                    font-semibold bg-[#ffffff] border-2 border-gray-400 cursor-pointer rounded-full  
                    ${selectedMonogramFont === "monogramFont3" ? "bg-[#a9d969]" : "bg-[#ffffff]"} `}
                        data-monogram-font="monogramFont3">
                        ACB
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonogramPage;