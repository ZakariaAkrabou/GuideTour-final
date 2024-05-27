import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TbArrowGuide } from "react-icons/tb";
import PropTypes from 'prop-types';
import { fetchTours } from '../../features/Slices/guideSlice';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function DashboardGuides() {
  const dispatch = useDispatch();
  const Count = useSelector((state) => state.guides.tourCount);
  const tours = useSelector((state) => state.guides.guideTours);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  
  const data = {
    labels,
    datasets: [
      {
        label: 'Tours',
        data: [3,10,6,10,4,15,23,7,11,20,13,6], 
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Booking',
        data: [0,4,3,7,4,10,21,5,9,17,10,2], 
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <BoxWrapper  >
        <div className='flex items-center justify-center  lg:justify-start w-full  '>
          <TbArrowGuide size={40} className='text-rose-400'/>
          <div className='pl-4 p-5'>
            <span className='text-rose-400 text-2xl pl-8 lg:pl-6 font-bold relative bottom-3'>Total Tours</span>
            <div className='flex items-center text-xl pl-20 lg:pl-20'>
              <strong className='text-primary'>{Count}</strong>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <div className='mt-8 w-[800px] h-[400px] bg-white shadow-2xl rounded-xl'>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return <div className='bg-white shadow-md p-4 lg:flex-1 rounded-lg items-center mb-4 lg:mb-0 w-[700px]'>{children}</div>;
}

BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
