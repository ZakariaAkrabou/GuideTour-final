import { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <nav className={`${
    isScrolled
      ? "backdrop-blur-sm bg-white/30 text-black"
      : "bg-transparent text-white "
  } fixed top-0 left-0 w-full h-20 flex justify-between items-center z-50`}
>
  <div className="container mx-auto lg:px-3">
    <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
      <img
        src={isScrolled ? "/blacklogo.png" : "/img_ellipse_621.png"}
        className="h-16 rounded-[103] object-cover mr-4"
        alt="Logo"
      />

      <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
        <Link
          to="/home"
          className="leading-normal no-underline text-xl hover:text-black"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="leading-normal no-underline text-xl hover:text-black"
        >
          About
        </Link>
        <Link
          to="/tour"
          className="leading-normal no-underline text-xl hover:text-black"
        >
          Tours
        </Link>
        <Link
          to="/camping"
          className="leading-normal no-underline text-xl hover:text-black"
        >
          Campings
        </Link>
      </ul>

      <div className="flex gap-4 max-lg:hidden">
        <button className="bg-primary rounded-2xl h-12 px-6 text-white hover:bg-white hover:text-primary transition-bg hover:border-primary">
          Login
        </button>
      </div>
      <div
        onClick={showDropdown}
        className="lg:hidden text-[22px] cursor-pointer text-black"
      >
        {dropdown ? <MdClose /> : <HiMenuAlt1 />}
      </div>
    </div>
    {dropdown && (
      <div className="lg:hidden w-full fixed top-20 bg-primary transition-all">
        <div className="w-full flex flex-col items-baseline gap-4">
          <ul className="flex flex-col justify-center w-full">
            <Link
              to="/home"
              className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
            >
              About
            </Link>
            <Link
              to="/tour"
              className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
            >
              Tours
            </Link>
            <Link
              to="/camping"
              className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
            >
              Campings
            </Link>
          </ul>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Header;



