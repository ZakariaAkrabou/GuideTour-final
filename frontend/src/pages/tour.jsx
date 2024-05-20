import Header from "../assets/header-tour.jpeg";
import travel from '../assets/travel.png';
import { useState, useEffect } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { IoSearch,IoPricetagOutline } from "react-icons/io5";
import { MdOutlineWhereToVote, MdModeOfTravel } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";

import { HiArrowsUpDown } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { PiStarThin } from "react-icons/pi";
import { LiaCampgroundSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardTours, fetchCardToursById } from '../features/Slices/tourSlice';

const Tour = () => {
    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tours.cartTour);
    console.log("cardtours", tours);

    useEffect(() => {
        dispatch(fetchCardTours());
    }, [dispatch]);

    const bgheadertour = {
        backgroundImage: `url(${Header})`,
        backgroundSize: 'cover',
    };

    const handelTourId = (tourId) => {
        dispatch(fetchCardToursById(tourId));
    }

    return (
        <div className="App">
            <div className="text-white h-screen flex items-center justify-center" style={bgheadertour}>
                <div className="max-w-xl">
                    <h1 className="text-9xl text-nowrap font-year text-center capitalize">travel with us</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="shadow-2xl lg:w-4/6 relative mt-6 top-[-50px] bg-white p-2">
                    <div className="grid grid-cols-3 gap-2">
                        {/* Tour Cards */}
                        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-3 z-30">
                            {tours.map((tour, index) => (
                                <Link to="/Landscapes" key={index} style={{ display: 'block' }}>
                                    <div onClick={() => handelTourId(tour._id)} key={index} className='relative bg-white p-2  h-max w-[250px] hover:scale-105 rounded-xl hover:shadow-2xl shadow-md duration-100'>
                                        <img src={tour.image} alt="Card" className='h-[200px] w-full rounded-t-xl' />
                                        <div className='bottom-0 z-0 p-1 rounded-t-lg w-full bg-primary'>
                                            <div className=' flex flex-col'>
                                                <div className=" flex justify-between font-bold text-white">
                                                    <div className='flex items-center'>
                                                        <MdModeOfTravel size={20} />
                                                        <h1 className='pl-1'>Tour</h1>
                                                    </div>
                                                    <h2 className="capitalize font-semibold">{tour.title}</h2>
                                                </div>
                                                <div className="flex justify-between font-bold text-white">
                                                    <div className='flex items-center'>
                                                        <BsPersonVcard size={20} />
                                                        <h1 className='pl-1'>Guide</h1>
                                                    </div>
                                                    <h2 className="capitalize font-semibold">{tour.name}</h2>
                                                </div>

                                                <div className="flex justify-between font-bold text-white">
                                                    <div className='flex items-center'>
                                                        <IoPricetagOutline size={20} />
                                                        <h1 className='pl-1'>Price</h1>
                                                    </div>
                                                    <h2 className="capitalize font-semibold">{tour.price}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='p-0.5 relative'>
                                            <div className="text-center relative"></div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Plan Tour Card */}
                        <div className="w-full h-max bg-stone-100 rounded-lg p-4">
                            <div className="text-3xl font-semibold pb-2 text-blue_fance font-Volkhov">
                                <h1>Plan your tour</h1>
                            </div>
                            <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                            <div className="flex flex-col gap-4">
                                <div className="gap-1"></div>
                                <div className="relative">
                                    <input type="text" placeholder='Search Tour' className="w-full h-[60px] text-center border-none bg-white" />
                                    <IoSearch size={20} className="absolute left-2  top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder='Where To?' className="w-full h-[60px] text-center border-none bg-white" />
                                    <MdOutlineWhereToVote size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder='Date' className="w-full h-[60px] text-center border-none bg-white" />
                                    <TbCalendarEvent size={20} className="absolute left-2  top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <h2 className="uppercase font-bold">filter by price</h2>
                                <input type="text" placeholder='' className="w-full h-[30px] text-center border-none bg-white" />
                                <h4 className="text-neutral-600 capitalize">price : 12dh-3600dh</h4>
                            </div>
                            <div className="flex justify-center py-4 w-full">
                                <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-primary py-3 px-6 text-white text-lg rounded-md w-48">Filter</button>
                            </div>
                        </div>

                    </div>

                    <div className="h-20 left-0 -top-20 absolute w-full bg-white/50 backdrop-filter backdrop-blur-sm">
                        <div className="text-2xl font-bold text-back text-center pt-5">
                            <h1>Tours Lists</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;
