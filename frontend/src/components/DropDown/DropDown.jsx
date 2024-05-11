import React from 'react'
import { IoMdSettings, IoMdLogOut } from "react-icons/io";

function DropDown({handleProfile, handleGuide,handleProfileDropClose}) {
  const logout = () => {

    localStorage.removeItem('token'); 
  };
  return (
    <div className=' flex flex-col  absolute rounded-lg bg-white opacity-70 w top-10 -left-[11px] h-20 justify-center p-3'>
     <div className=' absolute -z-10 bg-white h-4 w-4 -top-[6px] left-4 rotate-45'></div>
        <div className=' flex flex-col gap-2 ' >
            <div className=' flex items-center ' onClick={handleProfileDropClose}>
            <IoMdSettings size={20} className=' text-black mr-2' />
            <button className=' text-black text-md font-semibold'onClick={handleProfile}>
                Settings
            </button>
            </div>
            <div className=' flex items-center'onClick={handleProfileDropClose}>
            <IoMdLogOut size={20} className='text-black mr-2' />

            <button onClick={logout} className=' text-black text-md font-semibold'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default DropDown