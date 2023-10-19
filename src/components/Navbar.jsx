import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
    const [sideNav, setSideNav] = useState(false)
    const changeSideNavHandler = () => {
        setSideNav(() => !sideNav)
    }

    let sideNavClasses = `fixed top-0 h-screen w-[300px] z-10 bg-white  duration-300 ${sideNav ? 'left-0' : 'left-[-100%]'}`
    

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={changeSideNavHandler} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="p-2 bg-black text-white rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex items-center p-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25}/>
        <input type="text" className="bg-transparent focus:outline-none w-100 p-2 w-full" placeholder='Search foods'/>
      </div>

      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2"/> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
        {
            sideNav && <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>
        }

        {/* Side drawer menu */}
        <div className={sideNavClasses}>
            <AiOutlineClose onClick={changeSideNavHandler} size={30} className="absolute top-4 right-4 cursor-pointer p-1 rounded-full bg-black/600 hover:bg-black hover:text-white duration-100"/>
            <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="flex items-center text-xl py-4">
                        <TbTruckDelivery size={25} className="mr-4"/> Orders
                    </li>
                    <li className="flex items-center text-xl py-4">
                        <MdFavorite size={25} className="mr-4"/> Favorites
                    </li>
                    <li className="flex items-center text-xl py-4">
                        <FaWallet size={25} className="mr-4"/> Wallet
                    </li>
                    <li className="flex items-center text-xl py-4">
                        <MdHelp size={25} className="mr-4"/> Help
                    </li>
                    <li className="flex items-center text-xl py-4">
                        <AiFillTag size={25} className="mr-4"/> Promotion
                    </li>
                    <li className="flex items-center text-xl py-4">
                        <BsFillSaveFill size={25} className="mr-4"/> Best One
                    </li>
                    <li className="flex items-center text-xl py-4">
                        <FaUserFriends size={25} className="mr-4"/> Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;
