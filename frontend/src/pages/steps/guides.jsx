// import { useState } from 'react';
import card from '../../assets/agadir.png';
import background1 from '../../assets/camper.jpg';
import travel from '../../assets/travel.png'
import telouet from '../../assets/telouet.png'
import guide from '../../assets/imgguide.png'

import { useState } from 'react';

import { MdOutlineWhereToVote , MdOutlineMail} from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsTelephone, BsCalendar2Date} from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";




const Step2 = ({ nextStep, prevStep }) => {

  return (
    <>
    <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                    <button className=" w-1/4 hover:bg-white/60  bg-white/60 flex  items-center justify-center capitalize text-green-500 font-bold " onClick={prevStep} >
                        <GrStatusGood  size={25} className="mr-2 text-lg text-green-500 "  />
                        information
                    </button>
                    <button className=" w-1/4 p-5 flex  items-center justify-center capitalize bg-white" >
                        <FiFlag size={20} className="mr-2 " />
                        guide
                    </button>
                    <button className=" w-1/4 flex  items-center justify-center capitalize hover:bg-white/60">
                        <TbCalendarEvent size={20}  className=' mr-2 '/>
                        tour plan
                    </button>
                    <button className=" w-1/4  capitalize flex  items-center justify-center hover:bg-white/60   ">
                        <MdOutlineWhereToVote size={20} className=" mr-2  " />
                        location
                    </button>
                </div>
     <div className=" grid grid-cols-2 gap-1 ">
     

       <div className=' 'onClick={nextStep}> 
        <div className='relative left-[30px] top-[50px]  grid grid-cols-2 gap-3 bg-stone-50 '>
           <div className='relative top-3 left-[20px] '> 
           <img src={guide} alt="" className='w-[170px] h-[140px] rounded'/>
            <div className='text-gray-200'>Hello,I m</div>
          
            <div className='flex '>   
            <div className='  font-bold text-black'>Maria Ahmed</div>
                        <RiStarSFill size={20} className='text-yellow-300  relative left-2 '/> 
                        <RiStarSFill size={20} className='text-yellow-300 relative left-2'/> 
                        <RiStarSFill size={20} className='text-yellow-300 relative left-2'/> 
                        <RiStarSFill size={20} className='text-yellow-300 relative left-2'/> 
                        <RiStarSFill size={20} className='text-yellow-300 relative left-2'/>
                        
                        </div>
            <h2 className='text-primary '>The Professional Guide food</h2>
            
            </div>
          
            <div className='bg-blue'> 
                <h3 className='text-black font-bold text-center'>about Me</h3>
                <p className='flex justify-center'>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p></div>
            
        </div>
        </div>
      
    <div className=" px-[30px] py-[25px] w-[500px] h-[1500px] bottom-2  ">
    <div className="grid grid-rows-2 gap-8  ">
        <div className=" px-[30px] py-[20px] w-[380px] h-[950px] bg-stone-100   rounded  ">
            <div className="  text-3xl text-center text-secondaire font-Volkhov "><h1>Book This Tour</h1>

            </div><p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
            <div className="  px-[10px] grid grid-col-1 gap-5 " >
                <div className="  grid grid-rows-8 gap-1" ></div>
                <div className="relative">
                    <input type="text" placeholder='Name' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                    <CgProfile  size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                    
                </div>

                <div className="relative">
                    <input type="text" placeholder='Email' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                    <MdOutlineMail size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                </div>
                <div className="relative ">
                    <input type="text" placeholder='Confirm Email' className=" pl-20 w-[300px] h-[60px] text-center border-none  bg-white  " />
                    <MdOutlineMail size={20} className="absolute  left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                </div>

                <div className="relative">
                    <input type="text" placeholder=' Phone' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                    <BsTelephone size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                </div>
                
                <div className="relative">
                    <input type="text" placeholder=' dd-mm-yy' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                    < BsCalendar2Date size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                </div>

                <div className="relative">
                    <input type="text" placeholder=' Number of ticket' className=" pl-20 w-[300px] h-[60px] text-center border-none  bg-white  " />
                    < IoPricetagsOutline size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                </div>
                <div className="relative">
                    <input type="text" placeholder=' Message' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                    <  AiOutlineMessage size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-slate-500" />
                </div>
                
                <div className="px-[50px]  w-[300px] grid grid-col-2 gap-4 items-center ">
                <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-primary py-3 px-6 text-white text-lg rounded-md w-48 "  onClick={nextStep}>Check Availability</button>
                <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-primary py-3 px-6 text-white text-lg rounded-md w-48 "  onClick={nextStep}>Next</button>

            </div>
                
            </div>

           
        </div>
        <img className='py-[20px] px-[0px]  ' src={travel} alt="" />
    </div>
   
    </div>

</div>
</>
  );
};

export default Step2;
