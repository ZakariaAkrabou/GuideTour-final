import { useState } from 'react';
import card from '../../assets/agadir.png';
import background1 from '../../assets/campingPng.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbFlagPin, TbCalendarEvent } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

const Step1 = ({ nextStep }) => {
  return (
    <div className="grid grid-cols-2 gap-8 p-6">
      {/* Cards with Images */}
      <div className="grid grid-cols-2 gap-4">
        <div className='flex flex-col'>
          <div className='flex'>
            <h1 className='pr-6 text-xl font-bold'>Marrakech</h1>
            <h3 className='whitespace-nowrap'>1,000$/per couple</h3>
          </div>
          <div className='flex items-center pt-2'>
            <span className='flex items-center font-semibold'>
              <RiStarSFill size={20} className='mr-2 text-yellow-300'/> (2.3k)
            </span>
          </div>

            {/* Table */}

          <div className='h-28 w-[350px] text-left pt-2'>
            <p>
              Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt?
            </p>
            <div className='grid grid-cols-2 gap-4 text-left pt-4'>
              <label htmlFor="name" className="text-blue-500 font-semibold text-lg">Name:</label>
              <div id="name">Data for Name</div>
              <label htmlFor="location" className="text-blue-500 font-semibold text-lg">Location:</label>
              <div id="location">Data for Location</div>
              <label htmlFor="duration" className="text-blue-500 font-semibold text-lg">Duration:</label>
              <div id="duration">Data for Duration</div>
              <label htmlFor="group-members" className="text-blue-500 font-semibold text-lg">Group Members:</label>
              <div id="group-members">Group Members</div>
              <label htmlFor="privacy" className="text-blue-500 font-semibold text-lg">Privacy:</label>
              <div id="privacy">Data for Privacy</div>
              <label htmlFor="price" className="text-blue-500 font-semibold text-lg">Price:</label>
              <div id="price">Data for Price</div>
              <label htmlFor="description" className="text-blue-500 font-semibold text-lg">Description:</label>
              <div id="description">Data for Description</div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Your Tour Section */}
    <div className="flex">
        <div className="w-[350px] h-[450px] bg-stone-100 rounded-lg p-3 ">
          <div className="text-3xl text-center text-blue_fance font-Volkhov -mt-4 pt-1.5">
            <h1 className=' font-semibold pb-0.5'>Book your camping</h1>
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
          <div className="text-center">
            <button className="bg-blue-500 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons p-1 text-white text-lg rounded-md mt-4">
              Book Now
            </button>
          </div>
          <div className='mt-[30px] ml-10'>
            <img src={background1} alt="" className='h-[300px] rounded-t-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
