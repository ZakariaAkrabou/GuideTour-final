import { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import DropDown from "../DropDown/DropDown";
import Modal from "../Modals/login";


const Header = ({ handleProfile }) => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleProfileDrop = () => {
    setProfileDrop((prevProfileDrop) => !prevProfileDrop);
  };
  const handleProfileDropClose = () => {
    setProfileDrop(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  return (
    <>
      <nav
        className={`${isScrolled
            ? "backdrop-blur-md text-black"
            : "bg-transparent text-white "
          } fixed top-0 left-0 w-full h-20 flex justify-between items-center z-40 `}
      >
        <div className="container mx-auto lg:px-3 ">
          <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
            <img
              src={isScrolled ? "/blacklogo.png" : "/img_ellipse_621.png"}
              className="h-28 rounded-[103] object-cover -ml-8"
              alt="Logo"
            />
            <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
              {isLoggedIn && (
                <div className=" right-20 lg:right-20 absolute flex" >
                  <button onClick={handleProfileDrop}>
                    <IoPerson size={25} />
                  </button>
                  {profileDrop && (
                    <DropDown
                      handleProfile={handleProfile}
                      closeModal={handleProfileDropClose}
                      handleProfileDropClose={handleProfileDropClose}
                    />
                  )}
                </div>
              )}
              <li>
                <Link
                  to="/home"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/tour"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/camping"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  Campings
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 max-lg:hidden">
              {!isLoggedIn && (
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-primary rounded-2xl h-12  px-6 text-white hover:bg-white hover:text-primary transition-bg hover:border-primary"
                >
                  Login
                </button>
              )}
            </div>
            <div
              onClick={showDropdown}

              className="lg:hidden text-[22px] cursor-pointer text-black">
              {dropdown ? <MdClose size={30} /> : <HiMenuAlt1 size={30} />}

            </div>

          </div>

          {dropdown && (
             <div   className={`${isScrolled
              ? "bg-white/80 "
              : "backdrop-blur-md "
            } lg:hidden w-full p-4 fixed  top-20 backdrop-filter backdrop-blur-md transition-all`}>
              <div className="w-full flex flex-col items-baseline gap-4">
                <ul className="flex flex-col justify-center w-full">
                  <li>
                    <Link
                      to="/home"
                      className={`px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg ${isScrolled ? "text-black" : "text-white"
                        } hover:text-black text-[15px]`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about"
                      className={`px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg ${isScrolled ? "text-black" : "text-white"
                        } hover:text-black text-[15px]`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tour"
                      className={`px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg ${isScrolled ? "text-black" : "text-white"
                        } hover:text-black text-[15px]`}
                    >
                      Tours
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/camping"
                      className={`px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg ${isScrolled ? "text-black" : "text-white"
                        } hover:text-black text-[15px]`}
                    >
                      Campings
                    </Link>
                  </li>
                  <li className="p-3">
                    {!isLoggedIn && (
                      <button
                        onClick={() => setShowModal(true)}
                        className="bg-primary rounded-2xl h-12 px-6  text-white hover:bg-white hover:text-primary transition-bg hover:border-primary"
                      >
                        Login
                      </button>
                    )}
                  </li>

                  <li className="relative -top-[18px]">
                    {isLoggedIn && (
                      <div>
                        <div className={`px-6  h-8  flex items-center leading-normal no-underline font-bold text-lg ${isScrolled ? "text-black" : "text-white"
                          } hover:text-black text-[15px]`}>
                          <button onClick={handleProfile}>Settings</button>
                          </div>
                        <div className={`px-6 py-6 h-10 flex items-center leading-normal no-underline font-bold text-lg ${isScrolled ? "text-black" : "text-white"
                          } hover:text-black text-[15px]`}>
                          <button onClick={logout} >Logout</button>
                          </div>

                      </div>
                    )}
                  </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
