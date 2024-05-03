import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import background2 from '../../assets/camping1.jpg';
import profile from '../../assets/Toubkal.jpg';


function PayementTour({ onCancel, onClose }) {






    return (
        <>

            <div onClick={(e) => onClose()} className='flex justify-center items-center  fixed left-0 top-0 w-[100%] h-[100%]   bg-black/40  inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none '>
                <div className='  w-[800px] h-[500px] relative flex flex-rows-2  bg-white shadow-2xl rounded-2xl ' >

                    <div className='grid grid-cols-2  border 2 border-rose-500'>


                     
                            <div className='   w-[350px] h-[300px]  border 2 border-rose-500'>
                                <h1 className=' text-2xl text-primary'>Checkout</h1>
                                <p className='text-2xl font-bold'>Payement method</p>

                                <div className='border 2 border-slate-300 rounded  '>
                                    <p className='px-[10px]'>Debit Cared</p>
                                </div>

                                <div className=' border 2 border-slate-300 rounded'>
                                    <p className='px-[10px]'>Debit card</p>
                                    <div className='border 2 border-slate-300 rounded '>
                                        <div className='flex flex-cols-3 gap-2 justify-center items-center px-[10px] border 2 border-slate-300 rounded'>
                                            <p className='w-[200px]  '>Axim Bank</p>
                                            <input type="password" className='h-8 border 2 border-slate-300 rounded ' />
                                            <input type="radio" className='' />
                                        </div>

                                    </div>
                                    <div className='flex flex-cols-3 gap-2 justify-center items-center px-[10px] border 2 border-slate-300 rounded '>
                                        <p className='w-[200px]  '>HDFC Bank</p>
                                        <input type="password" className='h-8 border 2 border-slate-300 rounded ' />
                                        <input type="radio" className='' />
                                    </div>
                                    <p className='px-[10px]'>Add New Cards</p>
                                </div>
                                <div className='border 2 border-slate-300 rounded '>
                                    <p className='px-[10px] text-center '>Add New Method</p>
                                </div>

                            </div>
                           </div>
                      

                   

                        <div className="relative pl-1.5 border 2 border-rose-500">
                            <div className="lg:w-[350px] h-full bg-[#e5edfa] rounded-2xl p-2">
                                <div className="lg:grid lg:grid-cols-1 gap-2 text-center">

                                    <img src={background2} alt="" className="w-full h-20 lg:h-[150px] rounded-t-2xl" />

                                    <div className="relative flex justify-center -top-12">
                                        <img src={profile} alt="" className="rounded-full h-24 w-24" />
                                    </div>

                                    <div className='relative -top-10'>
                                        <h1 className="lg:text-xl font-semibold">Camping: Amazon Jungle</h1>
                                        <h3 className="lg:text-lg text-[#021F86]">With Maria</h3>
                                        <div className=" justify-between p-2 lg:px-10 ">
                                            <div className=' flex justify-between pt-8 pb-2'>
                                                <h2 className="flex items-center"><CiCalendarDate size={20} className="mr-1" />1 Mai</h2>
                                                <h2 className="flex items-center"><FaPeopleGroup size={20} className="mr-2" />Members</h2>
                                            </div>
                                            <div className="bg-white/90 rounded-xl h-48 text-left p-2">
                                                <h1 className="text-lg font-semibold">Payment details</h1>
                                                <hr />
                                                <div className="flex justify-between pb-20 pt-6">
                                                    <h1 className="font-semibold">Booking</h1>
                                                    <h2>1500Dh</h2>
                                                </div>
                                                <hr />
                                                <div className="flex justify-between">
                                                    <h1 className="font-semibold">Total</h1>
                                                    <h1 className=' font-semibold'>1500 Dh</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:p-8">

                                            <div className="lg:mt-6">
                                                <button className="bg-blue-500 text-white text-lg font-semibold lg:px-24  p-2 hover:bg-blue-300 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-100 rounded-full" onClick={() => onCancel()}>Pay Now</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
           




            <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>

        </>

    )
}

export default PayementTour