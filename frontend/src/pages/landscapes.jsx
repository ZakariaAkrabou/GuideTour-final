import Header from "../assets/header-tour.jpeg";
import travel from '../assets/travel.png'
import telouet from '../assets/telouet.png'
import { useState } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

const Landscapes = () => {

   

        const bgheadertour = {
            backgroundImage: `url(${Header})`,
            backgroundSize: 'cover',
            
    
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
                        <div className=" text-1xl text-back flex">
                         <p>1,100 DH</p>
                         <p>5.0</p>
                        </div>
                        </div>
                      
                    </div>
                    
                    <div className= {`${boxstyle} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:rounded-xl`} >
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
                        <div className="text-1xl text-back flex">
                         <p>1,100 DH</p>
                         <p>5.0</p>
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
                        <div className="text-1xl text-back flex">
                         <p>1,100 DH</p>
                         <p>5.0</p>
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
                        <div className="text-1xl text-back flex">
                         <p>1,100 DH</p>
                         <p>5.0</p>
                        </div></div>
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
                        <div className="text-1xl text-back flex">
                         <p>1,100 DH</p>
                         <p>5.0</p>
                        </div></div>
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
                                {/* <input type="text" placeholder='Search Tour' className="w-[300px] h-[60px] text-center border-none  bg-white  " /> */}
                                <input type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)}   className="border p-2" />
                                <input type="text" placeholder='Where To?' className="w-[300px] h-[60px] text-center border-none  bg-white  " />
                                <input type="text" placeholder='Date' className="w-[300px] h-[60px] text-center border-none  bg-white  " />

                                <h2 className="uppercase font-bold ">filter by price</h2>
                                <input type="text" placeholder='' className="w-[300px] h-[30px] text-center border-none  bg-white  " />
                                <h4 className="text-neutral-600 capitalize">price : 12dh-3600dh</h4>

                            </div>
                            <div className="px-[70px] py-[50px] ">
                                <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons py-3 px-6 text-white text-lg rounded-md w-48">book now</button>

                            </div>
                        </div>
                        <img className='py-[50px] ' src={travel} alt="" />
                    </div>



                </div>

            <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm  ">
                <div className="  text-1xl  font-Poppins flex  text-center ">
            <button className=" w-1/4  p-5  capitalize hover:bg-white/60  flex items-center ">
                <TbCalendarEvent size={20} className="mr-2"/>
                Date
            </button>
            <button className=" w-1/4 p-5  capitalize hover:bg-white/60 ">price low to High</button>
            <HiOutlineArrowsUpDown size={20} className="mr-2" />
            <button className=" w-1/4 p-5  capitalize hover:bg-white/60">Price High to low</button>
            <button className=" w-1/4 p-5   capitalize hover:bg-white/60">Name (A-z)</button>

                </div>
      
            </div>
           
            </div>
        </div>


    </div>
    /</div>
  );
}

export default Landscapes;