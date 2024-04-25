import Header from "../assets/header-tour.jpeg";
import travel from '../assets/travel.png'
import telouet from '../assets/telouet.png'
import { useState } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

import { MdOutlineWhereToVote } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { PiStarThin } from "react-icons/pi";


const Tour = () => {

    const bgheadertour = {
        backgroundImage: `url(${Header})`,
        backgroundSize: 'cover',

    };
    const boxstyle = ' transition ease-in-out delay-150 hover:rounded hover:shadow-xl ';
    // const boxstyle='rounded-[16px] shadow-xl border-current';


    //input,button 
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setInputValue('trtf');
    };
    return (
        <div className="App">
            <div className=" text-white px-[450px] py-[200px] " style={bgheadertour}>
                <div className=" max-w-xl">
                    <h3 className=" text-center font-bold mb-8 uppercase">search tour</h3>
                    <h1 className="  text-8xl font-['Yesteryear'] text-center capitalize">travel white us</h1>
                </div>
            </div>
            <div className=" px-[250px] ">


                <div className=" shadow-xl w-[1000px] h-[1500px] border-slate-300 relative mt-6">


                    {/* cards */}

                    <div className=" grid grid-cols-2 gap-1 ">
                        <div className=" px-[30px] py-[10px] grid grid-cols-2  auto-rows-[400px] w-[600px] gap-4  ">
                            <div className={` ${boxstyle} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:rounded-xl`} >
                                <div className="px-[10px] pt-[10px]">
                                    <img className='hover:rounded-t-3xl pt-2  w-[250px] h-[150px] ' src={telouet} alt="" />
                                </div>

                                <div className=" px-[10px] h-[200px] ">
                                    <div className="bg-buttons flex p-2 text-white text-sm h-10 whitespace-nowrap ">
                                        <p className="">12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>

                                    <h3 className="text-blue_fance font-Volkhov text-3xl flex justify-center  ">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className=" text-1xl text-back flex gap-4 ">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                           <PiStarThin size={20} className="" />
                                        <p>5.0</p> 
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>

                            <div className={`${boxstyle} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:rounded-xl`} >
                                <img src="" alt="" />
                                <div className="px-[10px] pt-[10px]">
                                    <img className='hover:rounded-t-3xl pt-2  w-[250px] h-[150px] ' src={telouet} alt="" />
                                </div>

                                <div className=" px-[10px] h-[200px] ">
                                    <div className="bg-buttons flex p-2 text-white text-sm h-10 whitespace-nowrap ">
                                        <p className="">12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>

                                    <h3 className="text-blue_fance font-Volkhov text-3xl flex justify-center">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className=" text-1xl text-back flex gap-4 ">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                           <PiStarThin size={20} className="" />
                                        <p>5.0</p> 
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={`${boxstyle} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:rounded-xl`} >
                                <img src="" alt="" />
                                <div className="px-[10px] pt-[10px]">
                                    <img className='hover:rounded-t-3xl pt-2  w-[250px] h-[150px] ' src={telouet} alt="" />
                                </div>

                                <div className=" px-[10px] h-[200px] ">
                                    <div className="bg-buttons flex p-2 text-white text-sm h-10 whitespace-nowrap ">
                                        <p className="">12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>

                                    <h3 className="text-blue_fance font-Volkhov text-3xl flex justify-center">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className=" text-1xl text-back flex gap-4 ">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                           <PiStarThin size={20} className="" />
                                        <p>5.0</p> 
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className={`${boxstyle}transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:rounded-xl`} >
                                <img src="" alt="" />
                                <div className="px-[10px] pt-[10px]">
                                    <img className='hover:rounded-t-3xl pt-2  w-[250px] h-[150px] ' src={telouet} alt="" />
                                </div>

                                <div className=" px-[10px] h-[200px] ">
                                    <div className="bg-buttons flex p-2 text-white text-sm h-10 whitespace-nowrap ">
                                        <p className="">12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>

                                    <h3 className="text-blue_fance font-Volkhov text-3xl flex justify-center">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className=" text-1xl text-back flex gap-4 ">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                           <PiStarThin size={20} className="" />
                                        <p>5.0</p> 
                                        </div>
                                        
                                    </div>
                                    </div>
                            </div>
                            <div className={`${boxstyle}transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:rounded-xl`} >
                                <img src="" alt="" />
                                <div className="px-[10px] pt-[10px]">
                                    <img className='hover:rounded-t-3xl pt-2  w-[250px] h-[150px] ' src={telouet} alt="" />
                                </div>

                                <div className=" px-[10px] h-[200px] ">
                                    <div className="bg-buttons flex p-2 text-white text-sm h-10 whitespace-nowrap ">
                                        <p className="">12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>

                                    <h3 className="text-blue_fance font-Volkhov text-3xl flex justify-center">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className=" text-1xl text-back flex gap-4 ">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                           <PiStarThin size={20} className="" />
                                        <p>5.0</p> 
                                        </div>
                                        
                                    </div>
                                    </div>
                            </div>

                        </div >

                        {/* card planTour */}
                        <div className=" px-[90px] py-[40px] w-[500px] h-[1500px] bottom-2  ">
                            <div className="grid grid-rows-2 gap-8  ">
                                <div className=" px-[30px] py-[20px] w-[380px] h-[700px] bg-stone-100   ">
                                    <div className="  text-3xl text-center text-blue_fance font-Volkhov "><h1>Plan your tour</h1>

                                    </div><p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                                    <div className="  px-[10px] grid grid-col-1 gap-5 " >
                                        <div className="  grid grid-rows-6 gap-1" ></div>
                                        <div className="relative">
                                            <input type="text" placeholder=' Search Tour' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                                            <IoSearch size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        </div>

                                        <div className="relative">
                                            <input type="text" placeholder='Where To?' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                                            <MdOutlineWhereToVote size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        </div>
                                        <div className="relative">
                                            <input type="text" placeholder='Date' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                                            <TbCalendarEvent size={20} className="absolute left-[100px] top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        </div>


                                        <h2 className="uppercase font-bold ">filter by price</h2>

                                        <input type="text" placeholder='' className="w-[300px] h-[30px] text-center border-none  bg-white  " />
                                        <h4 className="text-neutral-600 capitalize">price : 12dh-3600dh</h4>

                                    </div>
                                    <div className="px-[50px] py-[50px] w-[300px] flex justify-between gap-10">
                                        <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons py-3 px-6 text-white text-lg rounded-md w-48">Filter</button>
                                        <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons py-3 px-6 text-white text-lg rounded-md w-48">Next</button>

                                    </div>
                                </div>
                                <img className='py-[50px] ' src={travel} alt="" />
                            </div>



                        </div>

                        <div className=" h-20 -top-20 absolute w-full bg-white/50 backdrop-filter backdrop-blur-sm  ">
                            <div className="  text-2xl  font-bold  text-back text-center pt-5 ">
                              
                                <h1>Tours Lists</h1>
                                
                              
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            /</div>
    );
}

export default Tour;
