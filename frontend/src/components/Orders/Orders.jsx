import React from 'react'
import { MdPersonSearch, MdDeleteForever } from "react-icons/md";



export default function Orders() {
  return (
    <div className="overflow-x-auto bg-primary/30 h-screen p-8">
      <table className="w-full whitespace-nowrap bg-[#e5e7eb] mt-20 rounded-xl">
        <thead className=''>
          <tr className=' flex justify-between p-1 px-6'>
            <th className=" font-bold text-[16px] ">Tour Name</th>
            <th className=" font-bold text-[16px]">Guide</th>
            <th className="font-bold text-[16px] ">Destination</th>
            <th className=" font-bold text-[16px] ">status</th>
            <th className=" font-bold text-[16px] ">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white  ">
          <tr className='flex justify-between px-6'>
            <th className="py-1 font-bold text-[16px] ">Tour Name</th>
            <th className="py-1 font-bold text-[16px] ">Guide</th>
            <th className="py-1 font-bold text-[16px] ">Destination</th>
            <th className="py-1 font-bold text-[16px] ">status</th>
            <th className="py-1 font-bold text-[16px] ">Price</th>
          </tr>      
          </tbody>
      </table>
    </div>
  )
}
