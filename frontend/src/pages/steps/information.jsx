import { useState } from 'react';
import card from '../../assets/agadir.png';
import background1 from '../../assets/camper.jpg';



const Step1 = ({ nextStep }) => {


  return (
    <div className="grid grid-cols-2 gap-8 p-6">
                        {/* Cards with Images */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className='bg-white hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl duration-100'>
                                <div className='m-2'>
                                    <img src={card} alt="Card" className='h-[160px] w-full hover:rounded-xl' />
                                    <div className='text-center relative'>
                                        <h2 className='mt-2 font-bold'>Telouet Kasbah</h2>
                                        <span className='text-xs block'>Qui tempore voluptate qui quia commodi rem praesentium alias et.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className='bg-white hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl duration-100'>
                                <div className='m-2'>
                                    <img src={card} alt="Card" className='h-[160px] w-full hover:rounded-xl' />
                                    <div className='text-center relative'>
                                        <h2 className='mt-2 font-bold'>Telouet Kasbah</h2>
                                        <span className='text-xs block'>Qui tempore voluptate qui quia commodi rem praesentium alias et.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className='bg-white hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl duration-100'>
                                <div className='m-2'>
                                    <img src={card} alt="Card" className='h-[160px] w-full hover:rounded-xl' />
                                    <div className='text-center relative'>
                                        <h2 className='mt-2 font-bold'>Telouet Kasbah</h2>
                                        <span className='text-xs block'>Qui tempore voluptate qui quia commodi rem praesentium alias et.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className='bg-white hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl duration-100'>
                                <div className='m-2'>
                                    <img src={card} alt="Card" className='h-[160px] w-full hover:rounded-xl' />
                                    <div className='text-center relative'>
                                        <h2 className='mt-2 font-bold'>Telouet Kasbah</h2>
                                        <span className='text-xs block'>Qui tempore voluptate qui quia commodi rem praesentium alias et.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Plan Your Tour Section */}
                        <div className="flex">
                            <div className="w-[350px] h-[450px] bg-stone-100 rounded-lg p-3 ">
                                <div className="text-3xl text-center text-blue_fance font-Volkhov -mt-4 pt-1.5">
                                    <h1>Book your camping</h1>
                                </div>
                                <p className="text-center pb-1.5">
                                    Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
                                </p>
                                <div className="grid grid-cols-1 gap-3">
                                    <input type="text" placeholder='Search Camping' className="w-full h-10 text-center border-none bg-white" />
                                    <input type="text" placeholder='Where To?' className="w-full h-10 text-center border-none bg-white" />
                                    <input type="text" placeholder='Date' className="w-full hh-10 text-center border-none bg-white" />
                                    <h2 className="uppercase font-bold -mb-3">Filter by price</h2>
                                    <input type="text" placeholder='' className="w-full h-10 text-center border-none bg-white" />
                                    <h4 className="text-neutral-600 capitalize">price : 12dh-3600dh</h4>
                                </div>
                                <div className="text-center">
                                    <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-buttons p-1  text-white text-lg rounded-md mt-2" onClick={nextStep}>
                                        Book Now

                                    </button>

                                </div>
                                <div className=' mt-[30px]'>
                                <img src={background1} alt="" className=' h-[300px] w-full rounded-t-full' />
                            </div>
                            </div>
                        </div>
              
                    </div>
  );
};

export default Step1;
