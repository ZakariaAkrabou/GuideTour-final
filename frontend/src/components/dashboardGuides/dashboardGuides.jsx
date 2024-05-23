import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbArrowGuide } from "react-icons/tb";
import PropTypes from 'prop-types';
import { fetchTours } from '../../features/Slices/guideSlice';

export default function DashboardGuides() {
  const dispatch = useDispatch();

  const Count = useSelector((state) => state.guides.tourCount);
  console.log("count",Count)
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  return (
    <BoxWrapper >
      <div className='flex items-center  justify-center lg:justify-start w-full '>
        <TbArrowGuide size={40} className='text-red-500'/>
        <div className='pl-4'>
          <span className='text-red-500 text-2xl pl-8 lg:pl-6 font-bold relative bottom-3'>Total Tours</span>
          <div className='flex items-center text-xl pl-20 lg:pl-20'>
            <strong>{Count}</strong>  {/* Use the dynamic tour count */}
          </div>
        </div>
      </div>
    </BoxWrapper>
  );
}

function BoxWrapper({ children }) {
  return <div className='bg-white shadow-md p-4 lg:flex-1 rounded-lg items-center mb-4 lg:mb-0 w-[800px]'>{children}</div>;
}

BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
