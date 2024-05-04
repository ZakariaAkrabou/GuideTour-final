import React from 'react'
import background2 from '../../assets/camping1.jpg'

import { IoPerson, IoCloseSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard, FaInfo } from "react-icons/fa";


function UserProfile({handleProfileClose}) {
  return (

    <div className=' p-2 h-[550px] flex justify-start items-center w-[700px] bg-white shadow-xl rounded-2xl' >
        <div className=' absolute top-0 right-[280px] text-black/20 m-4'>

        <button onClick={handleProfileClose}>
            <IoCloseSharp className='' size={25}/>
        </button>
        </div>
    <div className=' justify-center  items-center grid grid-cols-2'>
        <div className="lg:w-[300px] h-[530px] bg-[#e5edfa] rounded-2xl p-2">
          <div className="lg:grid lg:grid-cols-1 gap-2 text-center">

            <img src={background2} alt="" className="w-full h-20 lg:h-[150px] rounded-t-2xl" />

            <div className="relative flex justify-center -top-12">
              <img src={background2} alt="" className="rounded-full h-24 w-24" />
            </div>

            <div className='relative -top-12'>
              <h1 className="lg:text-xl font-semibold">AYOUB</h1>
              <div className=" ">
                <div className=' flex flex-col items-start gap-1'>
                    <h1 className=' font-bold'>Country</h1>
                    <input type="text" disabled className=' w-full rounded-2xl h-12 bg-transparent border-2 border-black' />
                    <h1 className=' font-bold'>Role</h1>
                    <input type="text" disabled className=' w-full rounded-2xl h-12 bg-transparent border-2 border-black' />
                </div>
              </div>
     
            </div>
          </div>
          <div className='flex items-center justify-center mt-4'>
  <div className='relative'>
    <button className='bg-gray-300 font-semibold px-6 py-2 rounded-full flex items-center'>
      <IoPerson size={20} className='mr-2' />
      Become a guide
    </button>
  </div>
</div>
        </div>

        <div className=''>
            <div className=' flex items-center pb-3 gap-1'>
            <FaInfo className=' text-blue-500' size={30}/>
            <h1 className=' font-semibold text-3xl pb- text-nowrap text-blue-400'>Personal Informations</h1>
            </div>
            <div className='gap-4 flex flex-col items-center'>
               <div className='w-full flex'>
                <input type="text" placeholder='Firstname' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'/>
                < IoPerson size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
               </div>
                
               <div className='w-full flex'>
                <input type="text" placeholder='Lastname' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'/>
                < IoPerson size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
               </div>
                
               <div className='w-full flex'>
                <input type="text" placeholder='Email' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'/>
                < MdAlternateEmail size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
               </div>
                
               <div className='w-full flex'>
                <input type="text" placeholder='Password' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'/>
                < RiLockPasswordFill size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
               </div>
                
               <div className='w-full flex'>
                <input type="text" placeholder='Address' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'/>
                < FaAddressCard size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
               </div>
                
               <div className='w-full flex'>
                <input type="text" placeholder='Phone' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'/>
                < BsFillTelephoneFill size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
               </div>
                
                <button className=' w-36 p-2 font-semibold rounded-full bg-gray-200'>Save</button>
                
            </div>
            </div> 
        </div>
    </div>
  )
}

export default UserProfile