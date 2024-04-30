import { useState } from 'react';
import travel from '../../assets/travel.png';
import telouet from '../../assets/telouet.png';
import { CiEdit } from "react-icons/ci";
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

const Step1 = ({ nextStep }) => {
    const boxstyle = ' transition ease-in-out delay-150 hover:rounded hover:shadow-xl ';
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setInputValue('trtf');
    };

    return (
        <>
            <div>
                <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                    <button className=" w-1/4 bg-white   flex  items-center justify-center capitalize " >
                        <HiOutlineInformationCircle  size={25} className="mr-2 text-lg  " />
                        information
                    </button>
                    <button className=" w-1/4 p-5 flex  items-center justify-center capitalize hover:bg-white/60" onClick={nextStep}>
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
                    <div className='px-8 py-[25px] '>
                        <div className='flex gap-8 '>
                            <h3 className='text-3xl text-secondaire font-bold capitalize'>marrakech</h3>
                            <h1 className='py-1 text-2xl text-primary capitalize '>1,000 $ </h1>
                            <h1 className='mr-2 py-2 text-1xl text-gray text-popp capitalize'>/per couple</h1>
                        </div>
                        <div className='flex '>   
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <h1 className='text-gray px-4'>(2.3k review)</h1>
                        </div>
                        <p className='py-[50px] text-pretty text-1xl '>
                            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? 
                            Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At 
                            praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam.
                            Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit 
                            et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? 
                            Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut 
                            libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio
                            ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti.
                        </p>
                        <div className='grid grid-cols-2 gap-4 text-left pt-4'>
                            <label htmlFor="name" className="text-blue-500 font-semibold text-lg">Destination</label>
                            <div id="name">: Zurich, Switzerland</div>
                            <label htmlFor="location" className="text-blue-500 font-semibold text-lg">Location:</label>
                            <div id="location">Data for Location</div>
                            <label htmlFor="duration" className="text-blue-500 font-semibold text-lg">Duration:</label>
                            <div id="duration">Data for Duration</div>
                            <label htmlFor="group-members" className="text-blue-500 font-semibold text-lg">Group Members:</label>
                            <div id="group-members">Group Members</div>
                            <label htmlFor="category" className="text-blue-500 font-semibold text-lg">Category:</label>
                            <div id="category">Category</div>
                            <label htmlFor="price" className="text-blue-500 font-semibold text-lg">Price:</label>
                            <div id="price">Data for Price</div>
                        </div>
                    </div>
                    <div className=" px-[30px] py-[25px] w-[500px] h-[1500px] bottom-2  ">
                        <div className="grid grid-rows-2 gap-8  ">
                            <div className=" px-[30px] py-[20px] w-[380px] h-[950px] bg-stone-100   rounded  ">
                                <div className="  text-3xl text-center text-secondaire font-Volkhov ">
                                    <h1>Book This Tour</h1>
                                </div>
                                <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
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
            </div>
        </>
    );
}

export default Step1;
