import React from 'react';
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";


const Checkout = () => {
  return (
    <div className=" py-8">
      <h2 className="text-3xl underline underline-offset-4 font-semibold mb-4">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 w-[700px] gap-4">
        
        {/* Billing Information */}
        <form className="bg-white p-4 rounded-lg shadow-2xl">
          <h3 className="text-base font-semibold mb-2">Billing Information</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            //   disabled
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium mb-1">
              Card Number:

            </label>
            <input
              type="password"
              id="number"
              name="number"
              className=" overflow-hidden w-full px-3 py-2 rounded-md border border-gray-300 "
              
              //   disabled
              />
              <div className=' flex justify-center space-x-7 pt-1'>
              <RiMastercardFill size={30} className=' text-orange-400'/>
              <RiVisaLine size={30} className='text-blue-400'/>
              </div>
          </div>
          <div className="mb-4 flex justify-between text-center">
            <div className=''>
                <h1>Expire Date</h1>
                <input type="text" name="" id="" className=' w-20 border-none h-8 flex mt-1 rounded-md' />
            </div>
            <div className=''>
                <h1>CVV</h1>
                <input type="text" name="" id="" className=' w-20 border-none h-8 flex mt-1 rounded-md' />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-200 disabled:cursor-not-allowed"
            // disabled
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
