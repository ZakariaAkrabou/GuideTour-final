// import { useState } from 'react';
import card from '../../assets/agadir.png';
import background1 from '../../assets/camper.jpg';
import travel from '../../assets/travel.png'
import telouet from '../../assets/telouet.png'
import map from '../../assets/map.png'

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
import { GrStatusGood } from "react-icons/gr";

const Step4 = ({ nextStep, prevStep,prev2Step,prev3Step }) => {

  return (
    <>
    <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
    <button className=" w-1/4 bg-white/60   flex  items-center justify-center capitalize text-green-500 font-bold " onClick={prev3Step}>
                        <GrStatusGood  size={25} className="mr-2 text-lg  text-green-500 "  />
                        information
                    </button>
                    <button className=" w-1/4 p-5 flex  items-center justify-center capitalize bg-white/60 text-green-500 font-bold" onClick={prev2Step}>
                        <GrStatusGood size={25} className="mr-2 text-green-500 " />
                        guide
                    </button>
                    <button className=" w-1/4 flex  items-center justify-center capitalize bg-white/60 text-green-500 font-bold" onClick={prevStep}>
                        <GrStatusGood size={25}  className=' mr-2 text-green-500'/>
                        tour plan
                    </button>
                    <button className=" w-1/4  capitalize flex  items-center justify-center bg-white" >
                        <MdOutlineWhereToVote size={25} className=" mr-2  " />
                        location
                    </button>
                </div>
     <div className=" grid grid-cols-2 gap-1 ">
        <div className='px-6  '>
            <h1 className='py-5 text-2xl text-secondaire font-bold'> Tour plan</h1>
            <p className='pb-6'>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium</p>
            <img src={map} alt="" className='pb-6'/>
            <p className='pb-6'> Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil. Quo facere eveniet 33 sint rerum . </p>
            <p className='pb-6'>internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.</p>
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

export default Step4;
