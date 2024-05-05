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
import { Link } from "react-router-dom";


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
            <div className=" text-white h-screen flex items-center justify-center" style={bgheadertour}>
                <div className=" max-w-xl">
                    <h1 className="  text-9xl text-nowrap  font-year text-center capitalize">travel white us</h1>
                </div>
            </div>
            <div className=" flex justify-center ">


                <div className=" shadow-2xl w-[900px] relative mt-6 top-[-50px] bg-white">


                    {/* cards */}

                    <div className=" p-4 grid grid-cols-2 gap-28 ">
                        <div className=" grid grid-cols-2 w-[480px] gap-4   ">
                           <Link to="/Landscapes" style={{ display: 'block' }}>
                            <div className={` ${boxstyle} transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl shadow-2xl`}>
                                <div className="p-2">
                                    <img className="hover:rounded-t-3xl w-[250px] h-[150px]" src={telouet} alt="" />
                                    <div className="bg-primary flex justify-center items-center text-white text-sm h-10 whitespace-nowrap">
                                        <p>12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>
                                </div>

                                <div className="-mt-3 p-2 flex flex-col justify-start">
                                    <h3 className="text-blue_fance font-Volkhov text-3xl font-semibold">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className="text-1xl text-back flex gap-4">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                            <PiStarThin size={20} />
                                            <p>5.0</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                           <Link to="/Landscapes" style={{ display: 'block' }}>
                            <div className={` ${boxstyle} transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl`}>
                                <div className="p-2">
                                    <img className="hover:rounded-t-3xl w-[250px] h-[150px]" src={telouet} alt="" />
                                    <div className="bg-primary flex justify-center items-center text-white text-sm h-10 whitespace-nowrap">
                                        <p>12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>
                                </div>

                                <div className="-mt-3 p-2 flex flex-col justify-start">
                                    <h3 className="text-blue_fance font-Volkhov text-3xl font-semibold">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className="text-1xl text-back flex gap-4">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                            <PiStarThin size={20} />
                                            <p>5.0</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                           <Link to="/Landscapes">
                            <div className={` ${boxstyle} transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl`}>
                                <div className="p-2">
                                    <img className="hover:rounded-t-3xl w-[250px] h-[150px]" src={telouet} alt="" />
                                    <div className="bg-primary flex justify-center items-center text-white text-sm h-10 whitespace-nowrap">
                                        <p>12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>
                                </div>

                                <div className="-mt-3 p-2 flex flex-col justify-start">
                                    <h3 className="text-blue_fance font-Volkhov text-3xl font-semibold">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className="text-1xl text-back flex gap-4">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                            <PiStarThin size={20} />
                                            <p>5.0</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                           <Link to="/Landscapes">
                            <div className={` ${boxstyle} transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl`}>
                                <div className="p-2">
                                    <img className="hover:rounded-t-3xl w-[250px] h-[150px]" src={telouet} alt="" />
                                    <div className="bg-primary flex justify-center items-center text-white text-sm h-10 whitespace-nowrap">
                                        <p>12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>
                                </div>

                                <div className="-mt-3 p-2 flex flex-col justify-start">
                                    <h3 className="text-blue_fance font-Volkhov text-3xl font-semibold">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className="text-1xl text-back flex gap-4">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                            <PiStarThin size={20} />
                                            <p>5.0</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                           <Link to="/Landscapes">
                            <div className={` ${boxstyle} transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl`}>
                                <div className="p-2">
                                    <img className="hover:rounded-t-3xl w-[250px] h-[150px]" src={telouet} alt="" />
                                    <div className="bg-primary flex justify-center items-center text-white text-sm h-10 whitespace-nowrap">
                                        <p>12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>
                                </div>

                                <div className="-mt-3 p-2 flex flex-col justify-start">
                                    <h3 className="text-blue_fance font-Volkhov text-3xl font-semibold">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className="text-1xl text-back flex gap-4">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                            <PiStarThin size={20} />
                                            <p>5.0</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                           <Link to="/Landscapes">
                            <div className={` ${boxstyle} transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl`}>
                                <div className="p-2">
                                    <img className="hover:rounded-t-3xl w-[250px] h-[150px]" src={telouet} alt="" />
                                    <div className="bg-primary flex justify-center items-center text-white text-sm h-10 whitespace-nowrap">
                                        <p>12, September 2022</p>
                                        <p className="ml-2">120+ People</p>
                                    </div>
                                </div>

                                <div className="-mt-3 p-2 flex flex-col justify-start">
                                    <h3 className="text-blue_fance font-Volkhov text-3xl font-semibold">Telouet Kasbah</h3>
                                    <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
                                    <div className="text-1xl text-back flex gap-4">
                                        <p>1,100 DH</p>
                                        <div className="flex gap-2">
                                            <PiStarThin size={20} />
                                            <p>5.0</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            

                        </div >
                        

                        {/* card planTour */}
                        <div className=" w-[500px]  bottom-2">
                            <div className=" ">
                                <div className=" p-4 w-[380px] h-full bg-stone-100 rounded-lg  flex flex-col justify-center items-center">
                                    <div className="  text-3xl font-semibold pb-2 text-blue_fance font-Volkhov "><h1>Plan your tour</h1>

                                    </div><p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                                    <div className=" flex flex-col gap-4 " >
                                        <div className="  gap-1" ></div>
                                        <div className="relative ">
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
                                    <div className=" flex justify-center py-4 w-[300px]">
                                        <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-primary py-3 px-6 text-white text-lg rounded-md w-48">Filter</button>
                                       

                                    </div>
                                </div>
                                <div className=" pt-3 w-[370px]">

                                <img className=' ' src={travel} alt="" />
                                </div>
                            </div>



                        </div>

                        <div className=" h-20 left-0 -top-20 absolute w-full bg-white/50 backdrop-filter backdrop-blur-sm  ">
                            <div className="  text-2xl  font-bold  text-back text-center pt-5 ">
                              
                                <h1>Tours Lists</h1>
                                
                              
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            
            </div>
    );
}

export default Tour;
