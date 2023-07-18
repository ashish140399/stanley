import CustomTextPage from './CustomTextPage';
import MonogramPage from './MonogramPage';
import GraphicPage from './GraphicPage';


const Content = ({ selectedOption, textTitle, setTextTitle, monogramTitle, setMonogramTitle, graphicImg, setGraphicImg, handleTextTitleFont, handleMonogramTitleFont, handleGraphicChoice }) => {

    if (selectedOption === 'text') {
        return <>
            <CustomTextPage textTitle={textTitle} setTextTitle={setTextTitle} handleTextTitleFont={handleTextTitleFont} />
        </>
    } else if (selectedOption === 'monogram') {
        return <>
            <MonogramPage monogramTitle={monogramTitle} setMonogramTitle={setMonogramTitle} handleMonogramTitleFont={handleMonogramTitleFont} />
        </>
    } else if (selectedOption === 'graphic') {
        return <>
            <GraphicPage graphicImg={graphicImg} setGraphicImg={setGraphicImg} handleGraphicChoice={handleGraphicChoice} />
        </>
    } else {
        return <>
            <CustomTextPage textTitle={textTitle} setTextTitle={setTextTitle} handleTextTitleFont={handleTextTitleFont} />
        </>
    }

}

export default Content;