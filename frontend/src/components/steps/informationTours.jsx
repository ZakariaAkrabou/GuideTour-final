
import { MdOutlineWhereToVote } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
import souk2 from '../../assets/souk2.jpg'
import spice6 from '../../assets/spice6.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardToursById } from '../../features/Slices/tourSlice';
import { useState,useEffect } from 'react';





const Step1 = ({ nextStep }) => {


    const dispatch = useDispatch();
    const tour = useSelector((state) => state.tours.cartTourBuId);
    console.log("cartTourBuId",tour);

    useEffect(() => {
        dispatch(fetchCardToursById());
    }, [dispatch]);




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
                            <h3 className='text-3xl text-secondaire font-bold capitalize'>{tour.title}</h3>
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
                            <label htmlFor="name" className="text-primary font-semibold text-lg">Destination</label>
                            <div id="name">: Zurich, Switzerland</div>
                            <label htmlFor="location" className="text-primary font-semibold text-lg">Location:</label>
                            <div id="location">Data for Location</div>
                            <label htmlFor="duration" className="text-primary font-semibold text-lg">Duration:</label>
                            <div id="duration">Data for Duration</div>
                            <label htmlFor="group-members" className="text-primary font-semibold text-lg">Group Members:</label>
                            <div id="group-members">Group Members</div>
                            <label htmlFor="category" className="text-primary font-semibold text-lg">Category:</label>
                            <div id="category">Category</div>
                            <label htmlFor="price" className="text-primary font-semibold text-lg">Price:</label>
                            <div id="price">Data for Price</div>
                        </div>
                    </div>
                    {/* modified */}
                    <div className="   px-[90px] py-[60px] w-[500px] h-[1000px] bottom-2 ">

                    <div className="  relative  ">

                        <img src={souk2} alt="" className='  w-[300px] h-[500px]   rounded-full ouverllow-hidden drop-shadow-2xl ' />





                        <img className=' absolute top-[400px] w-[170px] h-[250px]   rounded-full ouverllow-hidden drop-shadow-2xl ' src={spice6} alt="" />
                    </div>

                </div>
                </div>
            </div>
        </>
    );
}

export default Step1;
