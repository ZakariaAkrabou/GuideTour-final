import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours, fetchToursById } from '../../features/Slices/guideSlice';
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import ConfirmDeleteModal from '../Modals/confirm-Dlete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tours() {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.guides.guideTours);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
  const [tourIdToDelete, setTourIdToDelete] = useState(null);
  const [current, setCurrent] = useState(1);
  const [expandedDescription, setExpandedDescription] = useState({});
  const items = 4;

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const NbPage = Math.ceil(tours.length / items);
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const DataPerPage = tours.slice(startIndex, endIndex);

  const handlePagination = (event, page) => {
    setCurrent(page);
  };

  const handleDeleteClick = (id) => {
    setTourIdToDelete(id);
    setIsConfirmDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    const token = localStorage.getItem('token') || null;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.delete(`http://localhost:4000/api/tours/deleteTour/${tourIdToDelete}`, config);
      toast.success('Tour deleted successfully');
      dispatch(fetchTours());
      setIsConfirmDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };

  const toggleDescription = (index) => {
    setExpandedDescription(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className='w-[1000px] h-[650px] bg-white shadow-xl overflow-x-auto rounded-xl'>
      <ToastContainer />
      <div className='flex items-center justify-between px-10 py-4'>
        <p className='text-primary font-bold text-3xl'>Tours</p>
        <Link to="/CreateTour">
          <button className='bg-primary rounded-lg w-[150px] h-[40px]  border 2 border-primary text-white hover:bg-white hover:text-primary hover:border-primary'>Add New</button>
        </Link>
      </div>

      <div className='p-6 w-full'>
        <table className='w-full p-5 shadow-xl'>
          <thead className='bg-slate-200 border-b-2 border-slate-300'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Title</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Duration</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Image</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {DataPerPage.map((tour, index) => (
              <tr key={index} className='border-b-2 border-slate-300'>
                <td></td>
                <td className="p-3 text-sm text-gray-700">{tour.title}</td>
                <td className="p-3 text-sm text-gray-700">
                  <div className="text-balance overflow-hidden text-ellipsis" style={{ maxWidth: '200px' }}>
                    {expandedDescription[index] ? tour.description : `${tour.description.substring(0, 10)}...`}
                    <button  onClick={() => toggleDescription(index)} className="  text-primary text-blue-500 ml-2">
                      {expandedDescription[index] ? 'View Less' : 'View More'}
                    </button>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700">{tour.category}</td>
                <td className="p-3 text-sm text-gray-700">{tour.duration}</td>
                <td className="p-3 text-sm text-gray-700">{tour.price} DH</td>
                <td className="p-3">
                  <img className='rounded w-20 h-20' src={`${tour.image}`} alt={tour.title} />
                </td>
                <td className='p-3 text-sm text-gray-700'>
                  <div className='flex items-center'>
                    <Link to={`/UpdateTour`}>
                      <IoCreate onClick={() => dispatch(fetchToursById(tour._id))} size={30} className='text-primary' />
                    </Link>
                    <button onClick={() => handleDeleteClick(tour._id)}>
                      <MdOutlineDeleteForever size={30} className='text-red-600' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex items-center py-5 justify-center gap-4 text-gray'>
          <Pagination count={NbPage} page={current} color="primary" onChange={handlePagination} />
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={isConfirmDeleteModalOpen}
        onClose={() => setIsConfirmDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default Tours;
