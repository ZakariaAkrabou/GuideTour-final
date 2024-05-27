import React from 'react';
import { MdPersonSearch, MdDeleteForever } from "react-icons/md";

export default function Orders() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#87ceeb] py-6 px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Order History</h1>
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              {/* Search Icon */}
              {/* <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" /> */}
              {/* Input */}
              {/* <Input
                className="pl-10 pr-4 py-2 rounded-md border-none bg-[#a6d8f5] text-white focus:ring-0"
                placeholder="Search orders..."
                type="text"
              /> */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Table */}
          <table className="w-full table-auto">
            <thead className="bg-[#87ceeb] text-white">
              <tr>
                <th className="py-4 px-6 text-left font-medium">Order #</th>
                <th className="py-4 px-6 text-left font-medium">Date</th>
                <th className="py-4 px-6 text-left font-medium">Total</th>
                <th className="py-4 px-6 text-left font-medium">Status</th>
                <th className="py-4 px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Row */}
              <tr className="hover:bg-[#f0f8ff] transition-colors duration-300">
                <td className="py-4 px-6 "></td>
                <td className="py-4 px-6 ">April 15, 2023</td>
                <td className="py-4 px-6 ">$99.99</td>
                <td className="py-4 px-6 ">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Delivered</span>
                </td>
                <td className="py-4 px-6 ">
                  <span className="bg-green-100">...</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
