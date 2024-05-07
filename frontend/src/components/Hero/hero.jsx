import { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import heroImg from '../../assets/hero1.jpg';
import UserProfile from "../UserProfile/UserProfile";
import Header from "../Header/header";
import BecomeGuide from "../BecomeGuide/BecomeGuide";
import Camping from "../../pages/camping";


const Hero = () => {
  const [showInput, setShowInput] = useState(false);
  const [destination, setDestination] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [modalProfile, setModalProfile] = useState(false);
  const [modalGuide, setModalGuide] = useState(false);

  const handleClick = () => {
    setShowInput(true);
  };

  const closeClick = () => {
    setShowInput(false);
  };

  const handleInputChange = (e) => {
    setDestination(e.target.value);
  };



  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full h-screen relative" >
      <div className="relative justify-center rounded-2xl lg:bp-32 lg:h-screen">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="lg:w-4/5 lg:pl-20 p-2 lg:h-screen h-full lg:mt-[-150px] mt-[-120px]">
          <div className="bg-white/40 backdrop-filter backdrop-blur-md rounded-md lg:h-20 lg:w-[700px] flex items-center justify-between p-4 ">
            {showInput ? (
              <input
                type="text"
                placeholder="Where?"
                className="bg-transparent border-2 border-white text-xl text-white rounded-2xl px-2 lg:w-[150px] w-[100px] placeholder:text-gray-100"
                value={destination}
                onChange={handleInputChange}
              />
            ) : (
              <button 
                onClick={handleClick}
                className="text-black font-bold flex items-center text-lg text-nowrap"
              >
                Where to?
                <RxDividerVertical size={45} className="hidden md:block ml-6 text-gray-200 "/>
              </button>          
            )}
            <div className="flex">
              <select value={selectedOption}  onChange={handleSelectChange} className="text-lg bg-transparent border-none text-black font-bold whitespace-nowrap">
                <option className="text-black" value="">Travel Type</option>
                <option className="text-black" value="option1">Option 1</option>
                <option className="text-black" value="option2">Option 2</option>
                <option className="text-black" value="option3">Option 3</option>
              </select>
              <RxDividerVertical size={45} className="hidden md:block text-gray-200"/>
            </div>
            <div className="flex">
              <select className="text-lg bg-transparent border-none text-black font-bold font-popp">
                <option className="text-black" value="">Duration</option>
                <option className="text-black" value="option1">Option 1</option>
                <option className="text-black" value="option2">Option 2</option>
                <option className="text-black" value="option3">Option 3</option>
              </select>
            </div>
            <button 
              onClick={closeClick}
              className="text-lg bg-blue-400 py-2 px-3 lg:px-8 lg:h-12 rounded-2xl text-white bg-primary  hover:bg-white hover:text-primary transition-bg hover:border-primary"
            >
              Submit
            </button>  
          </div>
          <div className="lg:-top-[270px] -top-[170px] w-[450px] relative lg:w-[500px]">
            <h1 className="text-white font-bold text-3xl lg:text-5xl">
              {` No matter where you're going, we'll take you there`}
            </h1>
          </div>  
        </div>
      </div>
      </div>
  );
};

export default Hero;
