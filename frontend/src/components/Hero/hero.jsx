import { useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import heroImg from '../../assets/hero1.jpg'

const Hero = () => {
  const [active, setActive] = useState("Hostelry");

  // test

  const [showInput, setShowInput] = useState(false);
  const [destination, setDestination] = useState("");

  const handleClick = () => {
    setShowInput(true);
  };
  const closeClick = () => {
    setShowInput(false);
  };

  const handleInputChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Destination:", destination);
  };


  const [options, setOptions] = useState("");
  const [showOption, setShowOption] = useState(false);

  const optionhandle = () => {
    setShowOption(true)
  } 
  const closeOption = () => {
    setShowOption(false);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

///test

  return (
    <div className="w-full h-screen relative">
      <div className="relative rounded-2xl lg:bp-32 lg:h-screen">
        {/* <img src="/header.jpg" alt="" className="w-full h-full object-cover" /> */}
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
                

        <div className="lg:w-4/5 lg:pl-12 p-2 lg:h-screen h-full mt-[-150px] ">
         
          {/* test */}
          <div className="bg-white/40 backdrop-filter backdrop-blur-md rounded-md lg:h-20 lg:w-[700px] flex items-center justify-between p-4 ">
            {showInput ? (
               <input
               type="text"
               placeholder="Where ?"
               className=" bg-transparent border-2 border-white text-xl text-white rounded-2xl  px-2 w-[150px]"
               value={destination}
               onChange={handleInputChange}
             />
             
            ) : (
             <button 
             onClick={handleClick}
             className="text-white flex items-center text-lg text-nowrap">
              Where to?
              <RxDividerVertical size={45} className=" ml-6 text-gray-200 "/>
              </button>          
            )}
            <div className="flex">

            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="text-lg bg-transparent border-none text-white"
            >
              <option className=" text-black" value="">Travel Type</option>
              <option className=" text-black" value="option1">Option 1</option>
              <option className=" text-black" value="option2">Option 2</option>
              <option className=" text-black" value="option3">Option 3</option>
            </select>
            <RxDividerVertical size={45} className=" text-gray-200"/>
            </div>

            <div className=" flex">
              <select className="text-lg bg-transparent border-none text-white">
                <option className=" text-black" value="">Duration</option>
                <option className=" text-black" value="option1">Option 1</option>
                <option className=" text-black" value="option1">Option 1</option>
                <option className=" text-black" value="option1">Option 1</option>
                <option className=" text-black" value="option1">Option 1</option>
                <option className=" text-black" value="option1">Option 1</option>
              </select>
            </div>
            
             <button 
             onClick={closeClick}
             className="text-lg bg-blue-400 h-12 px-8 rounded-2xl">
              Submit
              </button>  
          </div>
              <div className=" lg:-top-[270px] -top-[180px] relative lg:w-[500px]">
            <h1 className=" text-white font-bold text-2xl lg:text-5xl">
            No matter where you're going to, we'll take you there
            </h1>
          </div>   
          {/* test */}

          {/* <div className="backdrop-blur-sm bg-gray-500/50  px-5  rounded-[10px] lg:absolute bottom-16 lg:w-3/5 shadow-lg">
            <div className="lg:flex gap-4 gap-x-2">
              <div className="flex flex-wrap gap-x-16 w-full">
                <button
                  onClick={() => setActive("Hostelry")}
                  className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre
                  ${
                    active === "Hostelry"
                      ? "text-white border-b-2 border-solid border-black"
                      : "text-white hover:text-black"
                  }`}
                >
                  Find your Destination
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
