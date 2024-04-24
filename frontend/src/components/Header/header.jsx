import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown); 
  };

  return (

    <nav className=" w-[1100px] h-20 flex flex-col justify-center items-center top-0 left-[90px] z-50  relative  -mb-24">
      <div className="container mx-auto lg:px-3 w-full">

//     <nav className="backdrop-blur-sm bg-white/30 w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 ">
//       <div className="relative h-[976px] self-stretch  bg-cover bg-no-repeat pb-[55px] pr-[55px] shadow-xs md:pb-5 md:pr-5">

        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              {/* <h2 className="text-primary font-bold text-lg">Travler</h2> */}
              <img src="/img_ellipse_621.png" className="absolute left-[0.00px] top-[0.00px] m-auto h-[120px] w-[10%] rounded-[103] object-cover" />
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <Link to="/home" className="leading-normal no-underline text-white text-xl font-bold hover:text-primary">Home</Link>
            <Link to="/about" className="leading-normal no-underline text-white text-xl font-bold hover:text-primary">About</Link>
            <Link to="/tour" className="leading-normal no-underline text-white text-xl font-bold hover:text-primary">Tours</Link>
            <Link to="/camping" className="leading-normal no-underline text-white text-xl font-bold hover:text-primary">Campings</Link>
            {/* <Link to="/camping" className="leading-normal no-underline text-black text-lg hover:text-primary">Campings</Link> */}

          </ul>

          <div className="flex  gap-4 max-lg:hidden">
              
              <button className="bg-primary rounded-2xl h-12 px-6 text-white font-bold hover:bg-white hover:text-primary  transition-bg  hover:border-primary">
                Login
              </button>
          </div>
               {dropdown ? (
                  <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                    <MdClose />
                  </div>
               ) :(
                <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                    <HiMenuAlt1 />
                    </div>
               )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <Link to="/home" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Home</Link>
                <Link to="/about" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">About</Link>
                <Link to="/tour" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Tours</Link>
                <Link to="/camping" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Campings</Link>

              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;