import React from 'react';

import { useState,useEffect } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, Booking} from '../../features/Slices/bookingSlice';


const Step3 = ({ nextStep, prevStep, prev2Step }) => {

  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tours.cartTourBuId);
  const userId = useSelector((state) => state.bookings.profile._id);
  const checkoutUrl = useSelector((state) => state.bookings.checkoutUrl)

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  console.log("tou", tour);
  console.log("userId", userId);

  const handleBooking = () => {
    const amount = tour.price;
    dispatch(Booking({ tourId: tour._id, userId, amount }));
  };

  React.useEffect(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  return (
    <>
      <div className="h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl font-Poppins flex text-center">
        <button
          className="w-1/3 bg-white/60 flex items-center justify-center capitalize text-green-500 font-bold"
          onClick={prev2Step}
        >
          <GrStatusGood size={25} className="mr-2 text-lg text-green-500" />
          information
        </button>
        <button
          className="w-1/3 p-5 flex items-center justify-center capitalize bg-white/60 text-green-500 font-bold"
          onClick={prevStep}
        >
          <GrStatusGood size={25} className="mr-2 text-green-500" />
          guide
        </button>
        <button className="w-1/3 flex items-center justify-center capitalize bg-white">
          <TbCalendarEvent size={25} className="mr-2" />
          tour plan
        </button>
      </div>
      <div className="my-4 p-4 rounded grid grid-cols-1 md:grid-cols-2">
        <img
          className="w-full h-full object-cover"
          src={tour.image}
          alt="Tour destination"
        />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2">{tour.title}</div>
            <p className="text-gray-700 text-base mb-4">
            {tour.description}            </p>
          <div>
            <h1>{tour.duration}</h1>
          </div>
          <div>
            <h1>Location</h1>
          </div>
          <div>
            <h1>Price</h1>
          </div>
          </div>
          <button onClick={handleBooking} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;
