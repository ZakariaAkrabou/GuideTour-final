import React from 'react'
import { TbLogout } from "react-icons/tb";


export default function Header() {
  return (
    <div className='bg-white px-4 py-2 lg:py-4 lg:flex lg:justify-between lg:items-center sm:flex sm:justify-between sm:items-center'>
    <div>
        <h1 className='font-bold text-lg lg:text-xl xl:text-2xl sm:text-md text-blue-400'>Admin Dashboard</h1>
    </div>
    <div className='flex items-center'>
        <h1 className='font-bold text-red-700 hidden lg:block'>Log Out</h1>
        <TbLogout size={24} className='cursor-pointer hover:text-red-700 ml-2 sm:block md:block' />
    </div>
</div>
  )
}
