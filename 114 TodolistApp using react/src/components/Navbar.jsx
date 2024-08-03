import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex  justify-between md:justify-around bg-indigo-900 text-white py-2">
        <div className="logo">
            <span className='font-bold text-xl cursor-pointer mx-8'>iTask</span>
        </div>
        <ul className='flex gap-8 mx-9 '>
            <li className='cursor-pointer hover:text-2xl hover:pt-1 transition-all text-1xl pt-2'><IoHomeOutline /></li>
            <li className='cursor-pointer hover:text-2xl hover:pt-1 transition-all text-1xl pt-2 '><FaTasks /></li>
        </ul>
    </nav>
  )
}

export default Navbar
