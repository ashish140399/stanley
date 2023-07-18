import React, { useState } from 'react';
import Base from './Base';
import item1 from '../assets/images/item1.png';
import item2 from '../assets/images/item2.png';
import item3 from '../assets/images/item3.png';
import item4 from '../assets/images/item4.png';
import item5 from '../assets/images/item5.png';
import item6 from '../assets/images/item6.png';
import item7 from '../assets/images/item7.png';
// import { Link } from "react-router-dom";
// import logo from '../assets/images/logo.png';


const Home = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleChooseItem = (e) => {
    const chooseItem = e.target.getAttribute("data-name");
    setSelectedItem(chooseItem);
  }


  return (
    <>
      <Base title="CHOOSE YOUR ITEM" prevPage="/" nextPage="/customize-item">
        <div className='pl-6 pr-2 py-10'>
          <div className='grid grid-cols-7 gap-x-2 items-center'>
            <img
              src={item1}
              data-name="item1"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item1" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
            <img
              src={item2}
              data-name="item2"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item2" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
            <img
              src={item3}
              data-name="item3"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item3" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
            <img
              src={item4}
              data-name="item4"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item4" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
            <img
              src={item5}
              data-name="item5"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item5" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
            <img
              src={item6}
              data-name="item6"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item6" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
            <img
              src={item7}
              data-name="item7"
              className={`hover:border-2 hover:border-red-600 hover:rounded-2xl p-5 hover:p-5 cursor-pointer border-box 
            ${selectedItem === "item7" ? "border-2 border-red-600 rounded-2xl" : "border-2 border-white-700 border-transparent rounded-2xl"}`}
              onClick={handleChooseItem}
              alt=""
            />
          </div>
        </div>
        {/* <footer className='absolute w-full h-[130px] bg-gradient-to-r from-[#70b7c9] via-[#70b7c9]  to-[#82c5aa]   bottom-0 '>
          <div className='mt-2 flex items-center justify-around '>
            <Link to="/" className='py-2 px-6 mt-4 text-[#70b7c9] text-2xl font-black bg-[#ffffff]  rounded-full'>
              Back
            </Link>
            <div className='px-[15%]'>
              <img src={logo} className='w-[190px]' alt="logo" />
            </div>
            <Link to="/customize-item" className='py-2 px-6 mt-4 text-[#70b7c9] text-2xl font-black bg-[#ffffff] rounded-full'>
              Next
            </Link>
          </div>
        </footer> */}
      </Base>
    </>
  )
}


export default Home;