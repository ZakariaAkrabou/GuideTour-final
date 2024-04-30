import Header from "../assets/header-tour.jpeg";
import travel from '../assets/travel.png'
import telouet from '../assets/telouet.png'
import { useState } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import Tour from "./tour";
import { CiEdit } from "react-icons/ci";
import { MdOutlineWhereToVote } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import imgheader from'../assets/landscapes.jpeg'


import ProgressSteps from './steps/BookingSteps';
import Step1 from './steps/informationTours';
import Step2 from './steps/guides';
import Step3 from './steps/planTours';
import Step4 from './steps/locationTours';

const steps = [
  {
    step: 1,
  },
  {
    step: 2,
  },
  {
    step: 3,
  },
  {
    step: 4,
  }
];
const Landscapes = () => {
  const [currentStep, setCurrentStep] = useState(1);


  const bgheadertour = {
    backgroundImage: `url(${imgheader})`,
    backgroundSize: 'cover',


  };
  const renderStep = (step, nextStep, prevStep, prev2Step,prev3Step) => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 nextStep={nextStep} prevStep={prevStep} prev2Step={prev2Step} />;
      case 4:
        return <Step4 nextStep={nextStep} prevStep={prevStep} prev2Step={prev2Step}  prev3Step={prev3Step}  />;
      default:
        return null;
    }
  };

  return (
   

      <div className="App">
        <div className="relative">

          <div className="text-white px-[450px] py-[200px] w-full h-full" style={bgheadertour}>

            <div className=" max-w-xl">
              <h3 className=" text-center font-bold mb-8 uppercase">Explore</h3>
              <h1 className="  text-8xl font-yeste text-center capitalize">Landscapes</h1>
            </div>
          </div>
          <div className=" px-[300px] flex justify-center  ">


            <div className=" shadow-2xl w-[900px] h-[1500px]  bg-white relative mt-6  -top-[50px] ">

              <ProgressSteps steps={steps} renderStep={renderStep} />




              
              
              
            </div></div>
        </div>

      </div>

    


  );
}

export default Landscapes;