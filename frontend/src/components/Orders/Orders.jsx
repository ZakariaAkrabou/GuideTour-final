import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

export default function Orders() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col p-2">
      <header className="bg-primary rounded-md h-20 flex items-center pl-8 mt-24">
        <h1 className="text-3xl font-bold text-white">My Orders</h1>
        <div className="flex items-center gap-4 absolute right-4">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
          <input 
            className="pl-10 pr-4 py-2 rounded-md border-none bg-[#a6d8f5] text-white"
            placeholder="Search orders..."
            type="text" 
          />
        </div>
      </header>

      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-primary text-white">
              <tr className='text-center'>
                <th className="font-medium py-3">Order</th>
                <th className="font-medium py-3">Guide</th>
                <th className="font-medium py-3">Destination</th>
                <th className="font-medium py-3">Status</th>
                <th className="font-medium py-3">Actions</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr className="hover:bg-[#f0f8ff] transition-colors duration-300 text-center">
                <td className="py-4">Rabata</td>
                <td className="py-4">Ayoub</td>
                <td className="py-4">6 hours</td>
                <td className="py-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Paid</span>
                </td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <button>
                    <BsThreeDots size={25}/>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
