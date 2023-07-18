import React, { useState } from 'react'
import Base from './Base';
import customTextItem from '../assets/images/customTextItem.png';
import Content from './Content';



const CustomizationPage = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [title, setTitle] = useState("ADD CUSTOM TEXT");
    const [textTitle, setTextTitle] = useState("");
    const [monogramTitle, setMonogramTitle] = useState("");
    const [graphicImg, setGraphicImg] = useState("");
    const [finalChoice, setFinalChoice] = useState("");


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === "text") {
            setTitle("ADD CUSTOM TEXT");
            setFinalChoice("");
            //todo - clear monogram input
        }
        else if (event.target.value === "monogram") {
            setTitle("ADD YOUR MONOGRAM");
            setFinalChoice("");
            //todo - clear text input
        }
        else if (event.target.value === "graphic") {
            setTitle("ADD YOUR GRAPHIC");
            setFinalChoice("");
        }
    }


    const handleTextTitleFont = () => {
        setFinalChoice(textTitle);
    }

    const handleMonogramTitleFont = () => {
        setFinalChoice(monogramTitle);
    }

    const handleGraphicChoice = (graphImg) => {
        setFinalChoice(graphImg);
    }



    return (
        <>
            <Base title={title} prevPage="/" nextPage="/thankyou">
                <div className='grid grid-cols-2 '>
                    <div>
                        <div className='relative flex items-center justify-center ml-[40%]'>
                            <img className=' h-[350px]' src={customTextItem} alt="" />
                            {selectedOption === "text" ? (
                                <div className='absolute top-[160px] text-[#ffffff] text-xl font-bold origin-center rotate-90 uppercase'>
                                    {finalChoice}
                                </div>
                            ) : selectedOption === "monogram" ? (
                                <div className='absolute top-[140px] text-[#ffffff] text-4xl font-bold origin-center rotate-0 uppercase'>
                                    {finalChoice}
                                </div>
                            ) :
                                selectedOption === "graphic" ? (
                                    finalChoice && <img src={finalChoice} className='absolute top-[120px]' alt="" />
                                )
                                    : null
                            }
                        </div>
                    </div>
                    <div className='px-2 max-w-[500px]'>
                        <div className='mt-4 font-bold text-gray-500'>
                            ENGRAVING TYPE (<span className='text-red-500 italic'>TAP ONE OF THE BELOW OPTIONS</span>)
                        </div>
                        <div className='flex items-center justify-between px-4 py-3 border-b-2 border-gray-400'>
                            <div className='inline-flex items-center'>
                                <input
                                    type="radio"
                                    value="text"
                                    checked={selectedOption === 'text'}
                                    onChange={handleOptionChange}
                                    id="textId"
                                    className='opacity-0 cursor-pointer'
                                />
                                <div className="w-5 h-5 border-[1.5px] border-gray-400 ml-[-14px]">
                                    {selectedOption === 'text' ? (
                                        <div className="w-[17.5px] h-[17.5px] bg-[#a9d969]"></div>
                                    ) : (
                                        <div className="w-[17.5px] h-[17.5px] bg-[#ffffff]"></div>
                                    )}
                                </div>
                                <label htmlFor="textId" className='ml-1'>Text</label>
                            </div>
                            <div className='inline-flex items-center'>
                                <input
                                    type="radio"
                                    value="monogram"
                                    checked={selectedOption === 'monogram'}
                                    onChange={handleOptionChange}
                                    id="monogramId"
                                    className='opacity-0 cursor-pointer'
                                />
                                <div className="w-5 h-5 border-[1.5px] border-gray-400 ml-[-14px]">
                                    {selectedOption === 'monogram' ? (
                                        <div className="w-[17.5px] h-[17.5px] bg-[#a9d969]"></div>
                                    ) : (
                                        <div className="w-[17.5px] h-[17.5px] bg-[#ffffff]"></div>
                                    )}
                                </div>
                                <label htmlFor="monogramId" className='ml-1'>Monogram</label>
                            </div>
                            <div className='inline-flex items-center'>
                                <input
                                    type="radio"
                                    value="graphic"
                                    checked={selectedOption === 'graphic'}
                                    onChange={handleOptionChange}
                                    id="graphicId"
                                    className='opacity-0 cursor-pointer'
                                />
                                <div className="w-5 h-5 border-[1.5px] border-gray-400 ml-[-14px]">
                                    {selectedOption === 'graphic' ? (
                                        <div className="w-[17.5px] h-[17.5px] bg-[#a9d969]"></div>
                                    ) : (
                                        <div className="w-[17.5px] h-[17.5px] bg-[#ffffff]"></div>
                                    )}
                                </div>
                                <label htmlFor="graphicId" className='ml-1'>Graphic</label>
                            </div>
                        </div>
                        <div>
                            <Content
                                selectedOption={selectedOption}
                                textTitle={textTitle}
                                setTextTitle={setTextTitle}
                                monogramTitle={monogramTitle}
                                setMonogramTitle={setMonogramTitle}
                                graphicImg={graphicImg}
                                setGraphicImg={setGraphicImg}
                                handleTextTitleFont={handleTextTitleFont}
                                handleMonogramTitleFont={handleMonogramTitleFont}
                                handleGraphicChoice={handleGraphicChoice}
                            />
                        </div>
                    </div>
                </div>
            </Base>
        </>
    )
}


export default CustomizationPage;