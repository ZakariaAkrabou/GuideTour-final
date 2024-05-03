import background1 from '../../assets/campingPlan.png';
import background2 from '../../assets/camping1.jpg';
import profile from '../../assets/Toubkal.jpg';
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import Pay from './Checkout'


const Step2 = ({ nextStep, prevStep }) => {
  return (
    <div className="grid grid-cols-2 gap-8 p-2 lg:p-6 relative">
      <div className="absolute">
        <div className="absolute -top-20 left-1/4">
          <div className="flex justify-center items-center">
            <div className="bg-white/30 backdrop-filter backdrop-blur-sm h-20 flex items-center justify-center">
              <button className="font-bold text-white flex items-center p-32" onClick={prevStep}>
                <IoInformationCircleOutline size={26} className="mr-1" />
                Information
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -top-20 lg:left-[376px]">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white backdrop-filter backdrop-blur-sm h-20 flex items-center text-nowrap justify-center">
              <button className="font-bold text-black flex items-center p-[178.8px] lg:p-[139px] ">
                <MdOutlinePayment size={26} className="mr-3" />
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className=' flex flex-col absolute'>
          <Pay />
        </div>
      </div>

      <div className="relative pl-1.5">
        <div className="lg:w-[350px] h-full bg-[#e5edfa] rounded-2xl p-2">
          <div className="lg:grid lg:grid-cols-1 gap-2 text-center">

            <img src={background2} alt="" className="w-full h-20 lg:h-[150px] rounded-t-2xl" />

            <div className="relative flex justify-center -top-12">
              <img src={profile} alt="" className="rounded-full h-24 w-24" />
            </div>

            <div className='relative -top-10'>
              <h1 className="lg:text-xl font-semibold">Camping: Amazon Jungle</h1>
              <h3 className="lg:text-lg text-[#021F86]">With Maria</h3>
              <div className=" justify-between p-2 lg:px-10 ">
                <div className=' flex justify-between pt-8 pb-2'>
                  <h2 className="flex items-center"><CiCalendarDate size={20} className="mr-1" />1 Mai</h2>
                  <h2 className="flex items-center"><FaPeopleGroup size={20} className="mr-2" />Members</h2>
                </div>
                <div className="bg-white/90 rounded-xl h-48 text-left p-2">
                  <h1 className="text-lg font-semibold">Payment details</h1>
                  <hr />
                  <div className="flex justify-between pb-20 pt-6">
                    <h1 className="font-semibold">Booking</h1>
                    <h2>1500Dh</h2>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Total</h1>
                    <h1 className=' font-semibold'>1500 Dh</h1>
                  </div>
                </div>
              </div>
              <div className="lg:p-8">

                <div className="lg:mt-6">
                  <button className="bg-blue-500 text-white text-lg font-semibold lg:px-24  p-2 hover:bg-blue-300 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-100 rounded-full">Pay Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Step2;
