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
import { BsFileEarmarkPerson } from "react-icons/bs";




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
                <button onClick={nextStep} className=" w-1/4 flex  items-center justify-center capitalize hover:bg-white/60">
                    <TbCalendarEvent size={20} className=' mr-2 ' />
                    tour plan
                </button>
                <button className=" w-1/4  capitalize flex  items-center justify-center hover:bg-white/60   ">
                    <MdOutlineWhereToVote size={20} className=" mr-2  " />
                    location
                </button>
            </div>
            

            <div className="grid grid-cols-3 w-full gap-8 p-4">
                {/* Main Profile Card */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-24 h-24 rounded-full mb-4"
                            src="https://via.placeholder.com/150"
                            alt="User"
                        />
                        <h2 className="text-xl font-bold mb-4">User Name</h2>
                        <div className="flex space-x-4 mb-4">
                            <button className="bg-primary text-white py-2 px-4 rounded">Follow</button>
                            <button className="border border-gray py-2 px-4 rounded">Message</button>
                        </div>
                    </div>
                </div>

                {/* Contact Information Card */}
                <div className="col-span-2 w-full relative bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Guide Information</h3>
                    <div className=' flex'>
                        <div className=' p-1 absolute items-center flex'>
                            <BsFileEarmarkPerson size={20} className=' opacity-40 absolute'/>
                            <h1 className=' p-2 pl-6 opacity-40 font-semibold pb-1'>Bio</h1>
                        </div>
                        <textarea className=' w-full pl-16 border-2 border-primary min-h-16 max-h-[130px]'></textarea>
                    </div>
                    <div className=' absolute bottom-2 flex items-center gap-2'>
                        <h1 className=' font-semibold'>Specialization :</h1>
                        <input disabled className=' w- rounded-full  border-none h-10' />
                    </div>
                </div>

                {/* Skills Card */}
                {/* <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Skills</h3>
                    <div>
                        <h4 className="font-semibold">Skill 1</h4>
                        <div className="bg-gray-300 h-4 mb-2">
                            <div className="bg-blue-600 h-4 w-3/4"></div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Skill 2</h4>
                        <div className="bg-gray-300 h-4 mb-2">
                            <div className="bg-blue-600 h-4 w-1/2"></div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Skill 3</h4>
                        <div className="bg-gray-300 h-4 mb-2">
                            <div className="bg-blue-600 h-4 w-2/5"></div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Skill 4</h4>
                        <div className="bg-gray-300 h-4 mb-2">
                            <div className="bg-blue-600 h-4 w-2/3"></div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-4 gap-4 mt-8">
                <div className=" bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">Website</h3>
                    <p className="text-gray-600">Website</p>
                </div>
                <div className="col-span- bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">Twitter</h3>
                    <p className="text-gray-600">Twitter id</p>
                </div>
                <div className="col-span- bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">Facebook</h3>
                    <p className="text-gray-600">Facebook id</p>
                </div>
                <div className="col-span- bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold">Instagram</h3>
                    <p className="text-gray-600">Instagram id</p>
                </div>
            </div>






        </>
    );
};

export default Step2;
