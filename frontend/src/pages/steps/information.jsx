import card from '../../assets/agadir.png';
import background1 from '../../assets/campingPng.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampingsById } from '../Slices/campingSlice';
import { useEffect } from 'react';




const Step1 = ({ nextStep, prevStep}) => {

  const dispatch = useDispatch();
  const SelectedCampingId = useSelector((state) => state.campingID);
  console.log("testID", SelectedCampingId);

  useEffect(() => {
    dispatch(fetchCampingsById());
}, [dispatch]);

  return (
    <div className='relative'>
      <div className='absolute -top-20'>
        <div className='flex justify-center items-center h-full'>
          <div className='bg-white h-20 flex items-center justify-center'>
            <button className='font-bold text-black flex items-center p-32'>
              <IoInformationCircleOutline size={26} className='mr-1'/>
              Information
            </button>
          </div>
        </div>
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
                <label htmlFor="description" className="text-blue-500 font-semibold text-lg">Date</label>
                <div id="description">{SelectedCampingId.date}</div>
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
              <input type="text" placeholder='Email' className="w-full h-10 text-center border-none bg-white" />
              <input type="text" placeholder='Phone' className="w-full h-10 text-center border-none bg-white" />
              <input type="text" placeholder='Date' className="w-full h-10 text-center border-none bg-white" />
              <input type="text" placeholder='Message' className="w-full h-10 text-center border-none bg-white" />
            </div>
            <div className="text-center justify-between flex">
              <button className="bg-gray-400 p-1 text-white text-xl rounded-md mt-4" onClick={prevStep}>
                Back
              </button>
              <button className="bg-blue-500 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons p-1 text-white text-lg rounded-md mt-4 mr-28" onClick={nextStep}>
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
