// import { useState } from 'react';
import card from '../../assets/agadir.png';
import background1 from '../../assets/camper.jpg';
import travel from '../../assets/travel.png'
import telouet from '../../assets/telouet.png'
import riad4 from '../../assets/riad4.jpg'
import souk9 from '../../assets/souk9.jpg'
import riad11 from '../../assets/riad11.jpg'

import { useState } from 'react';



import { MdOutlineWhereToVote } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";


const Step3 = ({ nextStep, prevStep, prev2Step }) => {

  return (
    <>
    <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                    <button className=" w-1/4 bg-white/60   flex  items-center justify-center capitalize text-green-500 font-bold " onClick={prev2Step} >
                        <GrStatusGood  size={25} className="mr-2 text-lg  text-green-500 " />
                        information
                    </button>
                    <button className=" w-1/4 p-5 flex  items-center justify-center capitalize bg-white/60 text-green-500 font-bold" onClick={prevStep}>
                        <GrStatusGood size={25} className="mr-2 text-green-500 " />
                        guide
                    </button>
                    <button className=" w-1/4 flex  items-center justify-center capitalize bg-white">
                        <TbCalendarEvent size={25}  className=' mr-2 '/>
                        tour plan
                    </button>
                    <button className=" w-1/4  capitalize flex  items-center justify-center hover:bg-white/60" onClick={nextStep}>
                        <MdOutlineWhereToVote size={2} className=" mr-2  " />
                        location
                    </button>
                </div>
      <div className="  grid grid-cols-2 gap-1 ">
        <div className='px-5 py-6  '>
          <h3 className='py-5 text-3xl text-secondaire font-bold capitalize '>tour plan</h3>

<div className='flex gap-3  '>
 

  <label className='p-3 w-[30px] h-[30px] bg-primary rounded flex items-center justify-center text-white '>01</label>



  <div className=' pb-4'>
            <h3 className='py-4 font-bold text-lg w-3 text-secondaire '>Day1:Departure </h3>
            <p className='py-4'>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
            <ul className="list-disc px-4 ">
              <li  className=' '>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
              <li className=''>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
            </ul>
            </div>
           
         
          </div>
          <div className='flex gap-3   '>
 

  <label className='p-3 w-[30px] h-[30px] bg-primary rounded flex items-center justify-center text-white '>02</label>

          <div className=' pb-4'>
            <h3 className='py-4 font-bold text-lg text-secondaire'>Day 2: Visiting Zurich, Geneva and Zermatt </h3>
            <p className='py-4'>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
            <ul className="list-disc px-4 ">
              <li  className=' '>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
              <li className=''>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
            </ul>
          </div>
          </div>

          <div className='flex gap-3   '>

 <label className='p-3 w-[30px] h-[30px] bg-primary rounded flex items-center justify-center text-white '>03</label>

         <div className=' pb-4'>
            <h3 className='py-4 font-bold text-lg text-secondaire'>Day 3: Rest</h3>
            <p className='py-4'>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
            <ul className="list-disc px-4 ">
              <li  className=' '>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
              <li className=''>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
            </ul>
          </div>
          </div>


          
  
        </div>
        <div className=" relative  px-[10px] py-[90px] w-[500px] h-[1000px] bottom-2  ">
        <div className='flex gap-3 '>
 

 <label className='p-3 w-[30px] h-[30px] bg-primary rounded flex items-center justify-center text-white '>04</label>

         <div className=' pb-4'>
            <h3 className='py-4 font-bold text-lg text-secondaire'>Day 4: Historical Tour </h3>
            <p className='py-4 w-[300px]'>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
            <ul className="list-disc px-4 ">
              <li  className=' '>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
              <li className=''>5 Star Accommodation</li>
              <li className=''>Breakfast</li>
            </ul>
            
          </div>
          </div>
            
               
          <div className='flex gap-3   '>
 

 <label className='p-3 w-[30px] h-[30px] bg-primary rounded flex items-center justify-center text-white '>05</label>

         <div className=' pb-4'>
            <h3 className='py-4 font-bold text-lg text-secondaire'>Day 5: Return </h3>
            <p className='py-4 w-[300px]'>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
          
            
          </div>
        </div>

          <div className=' absolute left-[100px] top-[60%] w-[250px] h-[400px] '>
     <img src={souk9} alt="" className='  w-full h-full  rounded-full ouverllow-hidden drop-shadow-2xl ' />
   
          </div>
            
   

             

             

     


         
         
      

        </div>

      </div>
    </>
  );
};

export default Step3;
