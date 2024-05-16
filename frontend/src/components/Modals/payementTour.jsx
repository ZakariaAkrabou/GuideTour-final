
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { LiaCcVisa } from "react-icons/lia";
import background2 from '../../assets/camping1.jpg';
import profile from '../../assets/Toubkal.jpg';
import riad11 from '../../assets/riad11.jpg'
import hero2 from '../../assets/hero2.jpg'
import mousque from '../../assets/mousque.jpg'
import tanger from '../../assets/tanger.jpeg'
import riad15 from '../../assets/riad15.jpg'
import Photo1 from "../../assets/guide2.jpg";
import React, { useState, useEffect, useRef } from 'react';




function PayementTour({ onCancel, onClose }) {

    const modalRef = useRef();


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onCancel();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onCancel]);

    return (
        <>

            <div className='flex justify-center items-center  fixed left-0 top-0 w-[100%] h-[100%]   bg-black/40  inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none '>
                <div ref={modalRef} className='  w-[800px] h-[600px] relative flex flex-rows-2  bg-white shadow-2xl rounded-2xl ' >

                    <div className=' px-[40px] py-40 grid grid-cols-2  '>



                        <div className=' py-[10px] w-[350px] h-[300px] relative'>
                            <h1 className=' text-2xl text-primary px-7'>Checkout</h1>
                            <div className="border-2 border-primary h-4 w-4 rounded absolute  top-[20px] "></div>
                            <p className=' py-[10px] text-2xl font-bold'>Payement method</p>
                          
                            <div className="grid grid-rows-1 gap-4 ">
                                <div className=' border 2 border-slate-300 rounded w-[350px] '>
                                    <p className=' px-[10px] py-2   '>Debit Card</p>
                                </div>

                                <div className=' border 2 border-slate-300 rounded w-[350px]'>
                                    <p className='  px-[10px] py-2'>Debit card</p>
                                    <div className='border 2 border-slate-300 rounded  '>
                                        <div className='flex flex-cols-3 gap-2 justify-center items-center px-[10px] h-[50px] '>
                                      
                                            <p className='w-[150px]  '>Axim Bank</p>
                                            <input type="password" className='h-8 border 2 border-slate-300 rounded ' />
                                            <input type="radio" className='' name="radio"  />
                                        </div>

                                    </div>
                                 <div className='flex flex-cols-3 gap-2 justify-center items-center px-[10px]   border 2 border-slate-300 rounded w-[350px] h-[50px]'>
                                 {/* <LiaCcVisa size={100}  className='text-sky-600'/> */}
                                    <p className='w-[200px]  '>HDFC Bank</p>
                                    
                                    <input type="password" className='h-8 border 2 border-slate-300 rounded ' />
                                    <input type="radio" className='' name="radio" />
                                </div>

                                </div>
                               

                            </div>


                        </div>
                    </div>




                    <div className=" px-5 py-4 relative pl-1.5 ">
                        <div className=" w-[350px] h-full bg-[#e5edfa] rounded-2xl p-2  ">
                            <div className="lg:grid lg:grid-cols-1 gap-2 text-center">
                                <div className=' px-4 '>
                                    <img src={tanger} alt="" className="w-[350px]   lg:h-[150px] rounded-t-2xl" />

                                </div>

                                <div className="relative flex justify-center -top-12">
                                    <img src={Photo1} alt="" className="rounded-full h-24 w-24 shadow-2xl " />
                                </div>

                                <div className='relative -top-11'>
                                    <h1 className="lg:text-xl font-semibold">Tour : Telouet Kasbah</h1>
                                    <h3 className="lg:text-lg text-primary font-year ">With Maria</h3>
                                    <div className=" justify-between p-2 lg:px-10 ">
                                        <div className=' flex justify-between  pb-2 text-black'>
                                            <h2 className="flex items-center "><CiCalendarDate size={20} className="mr-1" />1 Mai</h2>
                                            <h2 className="flex items-center"><IoPricetagsOutline size={20} className="mr-2" />Members</h2>
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


                                    <div className="">
                                        <button className="bg-primary h-9 text-white text-center  font-inter font-bold lg:px-24 
                                                 p-2 hover:bg-blue-300 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-100 rounded" onClick={() => onCancel()}>Pay Now</button>
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