import camping from '../assets/camping.jpg';

import { IoInformationCircleOutline } from "react-icons/io5";
import { TbFlagPin, TbCalendarEvent } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";

//Process components
import ProgressSteps from './steps/BookingSteps';
import Step1 from './steps/cards';
import Step2 from './steps/information';
import Step3 from './steps/location';

const steps = [
    {
      step: 1,
    },
    {
      step: 2,
    },
    {
      step: 3,
    }
  ];



const Camping = () => {

    const renderStep = (step, nextStep, prevStep) => {
        switch (step) {
          case 1:
            return <Step1 nextStep={nextStep} />;
          case 2:
            return <Step2 nextStep={nextStep} prevStep={prevStep} />;
          case 3:
            return <Step3 nextStep={nextStep} prevStep={prevStep} />;
          default:
            return null;
        }
      };
    



    return (
        <div className="relative">
            {/* Background Image */}
            <section className="bg-cover bg-center h-[500px] flex items-center justify-center relative">
                <img src={camping} alt="Desert" className="object-cover w-full h-full" />
            </section>

            {/* Main Content */}
            <section className='pt-4'>
                <div className='bg-white shadow-2xl h-[800px] w-3/5 mx-auto absolute top-[475px] left-1/2 transform -translate-x-1/2'>
                <ProgressSteps steps={steps} renderStep={renderStep} />
                    </div>
                {/* White overlay div */}
                <div className='bg-white/50 backdrop-filter backdrop-blur-sm h-20 absolute w-3/5 left-1/2 top-2/3 transform -translate-x-1/2'>
                    <div className=' flex  justify-between items-center h-full p-10'>
                        <button className=' flex  items-center' >
                        <IoInformationCircleOutline className=' mr-2 text-lg bold'/>
                        Information
                        </button>
                        <button className=' flex  items-center'>
                        <TbFlagPin className=' mr-2 text-lg'/>
                        Guide
                        </button>
                        <button className=' flex  items-center'>
                        <TbCalendarEvent className=' mr-2 text-lg'/>
                        Camping Plan
                        </button>
                        <button className=' flex  items-center'>
                        <MdOutlineLocationOn className=' mr-2 text-lg'/>
                        Location
                        </button>
                        
                    </div>
                </div>
            </section>

            {/* Empty space at the bottom */}
            <section>
                <div className='w-full h-20'></div>
            </section>
        </div>
    );
}

export default Camping;
