import React from 'react';
import { MdPersonSearch, MdDeleteForever } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export default function Orders() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col p-2">
      <header className="bg-primary rounded-md h-20 flex items-center pl-8 mt-24">
        <h1 className="text-3xl font-bold text-white">Order History</h1>
          {/* <div className='  '>
          <button className=' bg-white p-2 rounded-full'>Export</button>
          </div> */}
        <div className="flex items-center gap-4">
          <div className=" absolute right-4">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
            <input className="pl-10 pr-4 py-2 rounded-md border-none bg-[#a6d8f5] text-white"
              placeholder="Search orders..."
              type="text" />
          </div>
        </div>
      </header>


      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">

          <table className="w-full table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-4 px-6 text-left font-medium">Order</th>
                <th className="py-4 px-6 text-left font-medium">Guide</th>
                <th className="py-4 px-6 text-left font-medium">Destination</th>
                <th className="py-4 px-6 text-left font-medium">Status</th>
                <th className="py-4 px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className=''>

              <tr className="hover:bg-[#f0f8ff] transition-colors duration-300">
                <td className="py-4 px-6 "></td>
                <td className="py-4 px-6 ">April 15, 2023</td>
                <td className="py-4 px-6 ">$99.99</td>
                <td className="py-4 px-6 ">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Paid</span>
                </td>
                <td className="">
                  <span className=" text-4xl">...</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
