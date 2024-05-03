// import { useState } from 'react';
import card from '../../assets/agadir.png';
import background1 from '../../assets/camper.jpg';
import travel from '../../assets/travel.png'
import telouet from '../../assets/telouet.png'
import guide from '../../assets/imgguide.png'
import guide2 from '../../assets/guide2.jpg'
import Photo1 from "../../assets/guide2.jpg";
import Photo2 from "../../assets/guide2.jpg";
import Photo3 from "../../assets/guide2.jpg";
import Photo4 from "../../assets/guide2.jpg";
import { Slide, Fade } from "react-awesome-reveal";
import riad from '../../assets/riad.jpg'
import door from '../../assets/door.jpg'
import door2 from '../../assets/door2.jpg'
import riad2 from '../../assets/riad2.jpg'
import riad3 from '../../assets/riad3.jpg'
import riad4 from '../../assets/riad4.jpg'


import { useState } from 'react';

import { MdOutlineWhereToVote, MdOutlineMail } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsTelephone, BsCalendar2Date } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";




const CardsData = [
    {
        id: 1,
        img: Photo1,
        title: "Maria Ahmed",
        desc: "The Professional Guide ",
    },
    {
        id: 2,
        img: Photo2,
        title: "maha",
        desc: "Each character will appear one by one",
    },
    {
        id: 3,
        img: Photo3,
        title: "Sunrise",
        desc: "Each character will appear one by one",
    },
    {
        id: 4,
        img: Photo4,
        title: "Sunrise",
        desc: "Each character will appear one by one",
    },
];
const Step2 = ({ nextStep, prevStep }) => {


    return (
        <>
            <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                <button className=" w-1/4 hover:bg-white/60  bg-white/60 flex  items-center justify-center capitalize text-green-500 font-bold " onClick={prevStep} >
                    <GrStatusGood size={25} className="mr-2 text-lg text-green-500 " />
                    information
                </button>
                <button className=" w-1/4 p-5 flex  items-center justify-center capitalize bg-white" >
                    <FiFlag size={20} className="mr-2 " />
                    guide
                </button>
                <button className=" w-1/4 flex  items-center justify-center capitalize hover:bg-white/60">
                    <TbCalendarEvent size={20} className=' mr-2 ' />
                    tour plan
                </button>
                <button className=" w-1/4  capitalize flex  items-center justify-center hover:bg-white/60   ">
                    <MdOutlineWhereToVote size={20} className=" mr-2  " />
                    location
                </button>
            </div>
            <div className=" grid grid-cols-2 gap-1 ">




                <div className="container  relative left-4 top-12 ">
                    <div className='text-center  ' >
                        <h1 className="text-primary  font-bold font-volk text-3xl mb-14 mt-5 sm:mt-0">
                            Meet the local guides for this tour
                        </h1>
                    </div>

                    {/* cards section */}
                    <div className=" absolute left-6 top-[70px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center gap-6  ">

                        {CardsData.map(({ id, img, title, desc }) => {
                            return (
                                <div
                                    key={id}
                                    className="text-white shadow-md rounded-lg overflow-hidden relative group "
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full max-w-[200px] h-[200px] rounded-lg"
                                    />
                                    {/* overlay section */}
                                    <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                        <div className="space-y-2">
                                            <Slide cascade>
                                                <h1 className=" font-bold text-gray">Hello ,Im</h1>
                                                <h1 className="text-2xl font-bold  ">{title}</h1>

                                                <Fade cascade damping={0.05} className=''>
                                                    {desc}
                                                </Fade>
                                                <div className='py-4'>
                                                    <button className="border border-white  w-[80px] h-[40px] text-center rounded-lg bg-white/40 hover:bg-white/20 duration-300" onClick={nextStep}>
                                                        <h1 className='text-center'> selected</h1>
                                                    </button>
                                                </div>
                                            </Slide>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="   px-[90px] py-[60px] w-[500px] h-[1500px] bottom-2 ">

                    <div className="  relative  ">

                        <img src={riad4} alt="" className='  w-[300px] h-[500px]   rounded-full ouverllow-hidden drop-shadow-2xl ' />





                        <img className=' absolute top-[400px] w-[170px] h-[250px]   rounded-full ouverllow-hidden drop-shadow-2xl ' src={door2} alt="" />
                    </div>

                </div>

            </div>







        </>
    );
};

export default Step2;
