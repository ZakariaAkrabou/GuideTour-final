import { useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";

const Hero = () => {
  const [active, setActive] = useState("Hostelry");

  return (
    <div className="w-full h-screen relative">
      <div className="relative rounded-2xl lg:bp-32 lg:h-screen">
        <img src="/header.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-white h-full lg:w-4/5 mx-auto lg:absolute">
          <h1 className="text-4xl flex justify-center mb-60 top-0 font-bold text-center lg:w-3/4">
            Explore the Whole World and Enjoy its Beauty
          </h1>
          
        </div>

        <div className="lg:w-4/5 mx-auto lg:h-screen h-full mt-[-30px]">
   
          <div className="backdrop-blur-sm bg-blue-500/50  px-5  rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
            <div className="lg:flex gap-4 gap-x-2">
              <div className="flex flex-wrap gap-x-16 w-full">
                <button
                  onClick={() => setActive("Hostelry")}
                  className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre
                  ${
                    active === "Hostelry"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-white hover:text-black"
                  }`}
                >
                  Hostelry
                </button>
              </div>
              <button className="whitespaces-pre flex items-center gap-2 bg-transparent outline-none border-none text-white hover:text-black">
                Search <FaArrowRight />
              </button>
            </div>
            <div className="flex flex-wrap items-end gap-4 justify-between border-t border-solid py-4">
              <div>
                <p className="text-white text-lg font-bold">Destination</p>
                <div className="relative h-10 w-40 flex items-center">
                  <FaLocationPin
                    size={12}
                    className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                  />
                  <input
                    type="text"
                    placeholder="Marrakech, Morocco"
                    className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none text-black"
                  />
                </div>
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaCalendar
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="date"
                  placeholder="Marrakech, Morocco"
                  className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none text-black"
                />
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaCalendar
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="date"
                  defaultValue="2024-04-21"
                  className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none text-black"
                />
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaPerson
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="text"
                  placeholder="1 Rooms, 2 Guest"
                  className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none text-black"
                />
                <div className="text-white h-10 w-40 flex items-center justify-center">
                  <button className="rounded-lg bg-primary placeholder:text-white px-2 outline-none h-full w-full flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-bg shadow">
                    <FaSearch />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
