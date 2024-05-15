import { useState, useEffect } from 'react';
import { DASHBOARD_SIDEBAR_LINKS ,DASHBOARD_SIDEBAR_button_LINKS} from './navigation'
import { Link, useLocation } from 'react-router-dom';
import { RxDividerVertical } from "react-icons/rx";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Photo1 from "../../assets/guide2.jpg";
import { MdModeOfTravel } from "react-icons/md";
import classNames from 'classnames'
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";


const linkClass='flex items-center gap-2 px-3 m-2 py-2 hover:w-[204px] hover:bg-white py-2 hover:rounded-l-3xl hover:duration-300 rounded-sm text-base';

const dashbordLinkClass='bg-[#2E5D9F] text-white rounded-xl flex items-center px-2 py-2 w-36 rounded-sm text-base';
const defaultLinkClass = 'flex items-center px-3 m-2 py-2 hover:w-[204px] hover:bg-white py-2 hover:rounded-l-3xl hover:duration-300 rounded-sm text-base';
const sidebarMini = 'flex items-center px-3 m-2  hover:w-28 w-28 ';


export default function Sidebar() {

    const [open, setOpen] = useState(true)

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth <= 1030) {
              setOpen(false);
          } else {
              setOpen(true);
          }
      };
  
      // Call the handleResize function once to set the initial state
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);


  return (
    <div className={`${open ? "w-56" : "w-20"} duration-300 h-screen top-0  bg-[#6499E9] p-3 flex flex-col relative `}>
  <div className={` ${!open && "rotate-180 right-6"} absolute cursor-pointer top-20 right-[-20px] bg-[#6499E9] rounded-full`} onClick={() => setOpen(!open)}>
        <IoIosArrowDropleftCircle size={40} className='' />
  </div>
  <div className={`rounded-full ml-12 w-[92px] h-[92px]  items-center ${!open && "scale-0"}`}>

  <div className={`bg-yellow-500 rounded-full ml-4 lg:ml-0 ${open ? 'w-[72px]  h-[72px] lg:h-[92px] lg:w-[92px]' : ''}`}>
  <img
    src={Photo1}
    alt="Profile"
    className={` rounded-full ml-4 lg:ml-0 ${open ? 'w-[72px]  h-[72px] lg:h-[92px] lg:w-[92px]' : ''}`}
    // lg:w-full lg:h-full
     // lg:w-full lg:h-full
  />
  </div>
</div>

  <div className={`flex flex-col ${!open && "scale-0"}`}>
      <div className="text-center inline-block font-bold text-[24px] leading-[1] text-[#FFFFFF]">
      Indica Watson
      </div>
     <h2 className={`text-xl text-center font-bold m-1 ${!open && "scale-0"}`}>
      Manager
     </h2>
        <span className=' p-2 ml-2'>Analytics</span>
       
        <div className=''>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      
       <div className='relative top-[230px]'>
{DASHBOARD_SIDEBAR_button_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}

<div  className={ classNames ('text-red-500 cursor-pointer' , linkClass)} >
                <span><HiOutlineArrowRightStartOnRectangle /></span>
              Logout
            </div>
       </div>
 
      </div>
    </div>
  );
}

function SidebarLink({ item  }) {
  

        return (
           
            <Link to={item.path} className={ classNames (' cursor-pointer' , linkClass)}>
                <span>{item.icon}</span>
                {item.label}
            </Link>
     
        );
    }

