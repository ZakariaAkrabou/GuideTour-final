    import { useState } from "react";
    import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
    import { FaLocationPin, FaPerson } from "react-icons/fa6";

    const Hero = () => {
        const { active, setActive } = useState("Hostelry");
        return (
            <div className="container mx-auto px-1 pt-15"> 
                <div className="relative rounded-2xl lg:bp-32 lg:h-screen">
                    <div className="overflow-hidden relative h-full w-full">
                        <img src="/img_header.png" alt="hero" className="lg:absolute top-0 w-full h-full object-cover rounded-2xl hover:img" />
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
                            <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
                                Explore the Whole World and Enjoy its Beauty
                            </h1>
                        <p className="flex justify-center text-white mt-4 px-6 text-center">Find and Write About your Experience around the world</p>
                    </div>
                    <div className="lg:w-4/5 mx-auto lg:h-screen h-full">
                        <div className="backdrop-blur-sm bg-white/30  px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
                            <div className="lg:flex gap-4 gap-x-2">
                                <div className="flex flex-wrap gap-x-16 w-full">
                                    <button onClick={() => setActive('Hostelry')} className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre
                                    ${active === "Hostelry" ? "text-black border-b-2 border-solid border-black":"text-white hover:text-black"}`}>Hostelry</button>
                                    <button onClick={() => setActive('Flights')} className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre
                                    ${active === "Flights" ? "text-black border-b-2 border-solid border-black":"text-white hover:text-black"}`}>Flight</button>
                                    <button onClick={() => setActive('Bus & Shuttles')} className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre
                                    ${active === "Bus & Shuttles" ? "text-black border-b-2 border-solid border-black":"text-white hover:text-black"}`}>Bus & Shuttles</button>
                                    <button onClick={() => setActive('Cars')}className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre
                                    ${active === "Cars" ? "text-black border-b-2 border-solid border-black":"text-white hover:text-black"}`}>Cars</button>
                                </div>
                                    <button className="whitespaces-pre flex items-center gap-2 bg-transparent outline-none border-none text-white hover:text-black">
                                        Last Searching <FaArrowRight />
                                    </button>
                            </div>
                            <div className="flex flex-wrap items-end gap-4 justify-between border-t border-solid py-4">
                                <div>
                                    <p className="text-white text-lg font-bold">Destination</p>
                                    <div className="relative h-10 w-40 flex items-center">
                                        <FaLocationPin size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full" />
                                        <input type="text" placeholder= "Marrakech, Morocco"  className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none" />
                                    </div>
                                </div>
                                <div  className="relative h-10 w-40 flex items-center">
                                
                                        <FaCalendar size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full" />
                                        <input type="date"  defaultValue="2024-04-21" className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none" />
                                
                                </div>
                                <div  className="relative h-10 w-40 flex items-center">
                                
                                        <FaCalendar size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"/>
                                        <input type="date" defaultValue="2024-04-21"   className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"/>
                                
                                </div>
                                <div  className="relative h-10 w-40 flex items-center">
                                
                                        <FaPerson size={12} className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full" />
                                        <input type="text" placeholder= "1 Rooms, 2 Guest" className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none" />
                                
                                    <div  className="text-white h-10 w-40 flex items-center justify-center">
                                        <button className="rounded-lg bg-primary placeholder:text-white px-2 outline-none h-full w-full flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-bg shadow  ">
                                            <FaSearch />Search
                                        </button>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Hero;
