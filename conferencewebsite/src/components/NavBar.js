import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../components/Final_Logo_IIITL.png";
import { HiMenuAlt3 } from 'react-icons/hi';
const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  //handle click 
  const handleClick = () => {
    setMobileNav(!mobileNav)
  }
  //header change function 
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true)
    } else {
      setChangeHeader(false)
    }
  }

  //change header by scrolling
  window.addEventListener('scroll', onChangeHeader)
  return (
    <div className='flex flex-row px-20 py-4 h-32 poppins items-center bg-blue-300 shadow-lg shadow-blue-200'>
      <div className='max-w-4xl mx-auto mt-6'>
        <img className='rounded-full h-28 w-28 md:h-36 md:w-36 pb-1 border-white bg-white shadow-lg shadow-blue-300' src={logo}></img>
      </div>
      <div className='md:flex hidden gap-5 w-2/3'>
        <div className='hover:text-white transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
          <NavLink exact className={({ isActive }) => isActive ? "text-white shadow-lg shadow-blue-200 p-2 transition duration-500 border-b-2 border-t-2 w-full border-white" : "text-black"} to="/">Homepage</NavLink>
        </div>
        <div className='hover:text-white transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
          <NavLink exact className={({ isActive }) => isActive ? "text-white shadow-lg shadow-blue-200 p-2 transition duration-500 border-b-2 border-t-2 w-full border-white" : "text-black"} to="/importantDates">Important Dates</NavLink>
        </div>
        <div className='hover:text-white transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
          <NavLink exact className={({ isActive }) => isActive ? "text-white shadow-lg shadow-blue-200 p-2 transition duration-500 border-b-2 border-t-2 w-full border-white" : "text-black"} to="/submission">Submission</NavLink>
        </div>
        <div className='hover:text-white transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
          <NavLink exact className={({ isActive }) => isActive ? "text-white shadow-lg shadow-blue-200 p-2 transition duration-500 border-b-2 border-t-2 w-full border-white" : "text-black"} to="/committee">Committee</NavLink>
        </div>
        <div className='hover:text-white transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
          <NavLink exact className={({ isActive }) => isActive ? "text-white shadow-lg shadow-blue-200 p-2 transition duration-500 border-b-2 border-t-2 w-full border-white" : "text-black"} to="/program">Program</NavLink>
        </div>
        <div className='hover:text-white transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
          <NavLink exact className={({ isActive }) => isActive ? "text-white shadow-lg shadow-blue-200 p-2 transition duration-500 border-b-2 border-t-2 w-full border-white" : "text-black"} to="/previousEvents">Previous Events</NavLink>
        </div>
      </div>
        <div className="block md:hidden lg:hidden">
            <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
        </div>
      {
        mobileNav&&(
          <nav className="bg-white shadow-lg mx-6 mt-2 p-4 rounded-lg border border-gray-300 py-4 w-full block md:hidden lg:hidden z-50">
            <div className='text-black transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
              <NavLink exact className={({ isActive }) => isActive ? "text-black shadow-lg shadow-blue-200 p-2 transition duration-500 border-l-4 w-full border-black" : "text-black"} to="/">Homepage</NavLink>
            </div>
            <div className='text-black transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
              <NavLink exact className={({ isActive }) => isActive ? "text-black shadow-lg shadow-blue-200 p-2 transition duration-500 border-l-4 w-full border-black" : "text-black"} to="/importantDates">Important Dates</NavLink>
            </div>
            <div className='text-black transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
              <NavLink exact className={({ isActive }) => isActive ? "text-black shadow-lg shadow-blue-200 p-2 transition duration-500 border-l-4 w-full border-black" : "text-black"} to="/submission">Submission</NavLink>
            </div>
            <div className='text-black transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
              <NavLink exact className={({ isActive }) => isActive ? "text-black shadow-lg shadow-blue-200 p-2 transition duration-500 border-l-4 w-full border-black" : "text-black"} to="/committee">Committee</NavLink>
            </div>
            <div className='text-black transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
              <NavLink exact className={({ isActive }) => isActive ? "text-black shadow-lg shadow-blue-200 p-2 transition duration-500 border-l-4 w-full border-black" : "text-black"} to="/program">Program</NavLink>
            </div>
            <div className='text-black transition-all hover:ease-in-out hover:scale-105 p-2 hover:duration-700'>
              <NavLink exact className={({ isActive }) => isActive ? "text-black shadow-lg shadow-blue-200 p-2 transition duration-500 border-l-4 w-full border-black" : "text-black"} to="/previousEvents">Previous Events</NavLink>
            </div>
          </nav>
        )
      }
    </div>
  );
}
export default Navbar;