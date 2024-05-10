import card from '../../assets/agadir.png';
import background1 from '../../assets/campingPng.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

import { RiStarSFill } from "react-icons/ri";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampingsById } from '../../features/Slices/campingSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



const Step1 = ({ nextStep, prevStep}) => {

  const dispatch = useDispatch();
  const SelectedCampingId = useSelector((state) => state.campingID);
  console.log("testID", SelectedCampingId);

  const [formData, setFormData] = useState({
    name: '',
    // location: '',
    date: '',
    // duration: '',
    // group_member: '',
    // isPrivate: '',
    price: '',
    // description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token') || null;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post('http://localhost:4000/api/booking/book', formData,config);
      // Dispatch the Booking action creator if the post request succeeds
      dispatch(Booking());
    } catch (error) {
      console.error(error);
    }
  }

 

  return (
    <div className='relative'>
 <div className=" h-20 -top-20 absolute w-full bg-white/10 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                    <button className=" w-2/4 bg-white text-xl font-bold  flex  items-center justify-center capitalize " >
                        <IoInformationCircleOutline  size={30} className="mr-2 text-lg  " />
                        Information
                    </button>
                    <button className=" w-2/4  capitalize flex text-white text-xl font-bold items-center justify-center">
                        <MdOutlinePayment size={30} className=" mr-2  " />
                        Payment
                    </button>
                </div>
      <div className="grid grid-col-2 lg:grid-cols-2 gap-8 p-4 lg:h-[800px] ">
        <div className="grid lg:grid-cols-2 gap-4 h-[650px]">
          <div className='flex flex-col'>
            <div className='flex'>
              <h1 className='pr-6 text-xl font-bold'>{SelectedCampingId.name}</h1>
              <h3 className='whitespace-nowrap'>{SelectedCampingId.price} DH /per couple</h3>
            </div>

            <div className='flex items-center pt-2'>
              <span className='flex items-center font-semibold'>
                <RiStarSFill size={20} className='mr-2 text-yellow-300'/> (2.3k)
              </span>
            </div>
            <div className='h-28 w-[350px] justify-center text-left pt-2'>
              <p>
              {SelectedCampingId.description}
              </p>
              <div className='grid grid-cols-2 gap-4 text-left pt-4'>
                <label htmlFor="name" className="text-blue-500 font-semibold text-lg">Name</label>
                <div id="name">{SelectedCampingId.name}</div>
                <label htmlFor="location" className="text-blue-500 font-semibold text-lg">Location</label>
                <div id="location">{SelectedCampingId.location}</div>
                <label htmlFor="description" className="text-blue-500 font-semibold text-lg">Start Date</label>
                <div id="description">{SelectedCampingId.start_date}</div>
                <label htmlFor="description" className="text-blue-500 font-semibold text-lg">End Date</label>
                <div id="description">{SelectedCampingId.end_date}</div>
                <label htmlFor="duration" className="text-blue-500 font-semibold text-lg">Duration</label>
                <div id="duration">{SelectedCampingId.duration}</div>
                <label htmlFor="group-members" className="text-blue-500 font-semibold text-lg">Group Members</label>
                <div id="group-members">{SelectedCampingId.group_member}</div>
                <label htmlFor="privacy" className="text-blue-500 font-semibold text-lg">Privacy</label>
                <div id="privacy">{SelectedCampingId.isPrivate}</div>
                <label htmlFor="price" className="text-blue-500 font-semibold text-lg">Price</label>
                <div id="price">{SelectedCampingId.price}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Your Tour Section */}
        <div className="flex justify-center">
          <div className="w-[350px] h-[450px] bg-stone-100 rounded-lg p-3 ">
            <div className="text-3xl text-center text-blue_fance font-Volkhov -mt-4 pt-1.5">
              <h1>Book your camping</h1>
            </div>
            <p className="text-center pb-1.5">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <input type="text" placeholder='Name' className="w-full h-10 text-center border-none bg-white" />
              {/* <input type="text" placeholder='Email' className="w-full h-10 text-center border-none bg-white" /> */}
              {/* <input type="text" placeholder='Phone' className="w-full h-10 text-center border-none bg-white" /> */}
              <input type="text" placeholder='Date' className="w-full h-10 text-center border-none bg-white" />
              {/* <input type="text" placeholder='Message' className="w-full h-10 text-center border-none bg-white" /> */}
            </div>
            <div className="text-center justify-between flex">
              <button className="bg-gray-400 p-1 text-white text-xl rounded-md mt-4" onClick={prevStep}>
                Back
              </button>
              <button className="bg-primary transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons p-1 text-white text-lg rounded-md mt-4 mr-28" onClick={handleSubmit} >
                Book Now
              </button>
            </div>
            <div className='mt-[30px] ml-10'>
              <img src={background1} alt="" className='lg:h-[300px] hidden md:block rounded-t-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
