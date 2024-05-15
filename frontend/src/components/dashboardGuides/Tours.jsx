import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours,fetchToursById } from '../../features/Slices/guideSlice';
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import {Link} from 'react-router-dom';
import axios from 'axios';

function Tours() {

    const dispatch = useDispatch();
    const tours = useSelector((state) => state.guides.guideTours);
    console.log("tours",tours);

    useEffect(() => {
        dispatch(fetchTours());
    }, [dispatch]);


    const handlDelete=(id)=>{
        console.log(id);
    }
    
    const handlid=(id)=>{
        console.log(id);
        dispatch(fetchToursById(id));
        dispatch(fetchUpdateTour(id));
    }
    
    const handldelete=async(id)=>{

        const token = localStorage.getItem('token') || null;

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
    
        try {
        const data=await axios.delete(`http://localhost:4000/api/tours/deleteTour/${id}`,config)
        console.log("jjj",config);
        console.log("tourid",id);
    } catch (error) {
        console.error('Error deleting user:', error);
      }}
 
    
   
            
   
  
     
       
    return (
        <div className='w-[1000px] h- bg-gray-300 shadow-xl'>
            <div className='flex items-center gap-[200px]'>
                  <p className='text-primary text-3xl p-6' >Tours</p>
            <div className="relative">
                <input type="text" placeholder=' Search Tour' className="w-[300px] h-[40px] text-center border-2 border-slate-400 rounded bg-white  " />
                <IoSearch size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <Link to="/dashboard/CreateTour">
             <button  className='bg-primary w-[100px] h-[40px] rounded text-white font-blond'>Add New</button>
            </Link>
           
            </div>
          

            <div className='  p-6 w-[900px]'>
                <table className='w-full p-5   shadow-xl'>
                    <thead className='  bg-slate-200 border-b-2 border-slate-300 '>
                        <tr>

                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '></th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>title</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>description</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'>category</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'>duration</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>price</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>image</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>Action</th>

                        </tr>

                    </thead>

                    
                    <tbody>
              {tours.map((tour, index) => (
                <tr key={index} className=' border-b-2 border-slate-300'>
                  <td>
                 
                  </td>
                  <td className="p-3 text-sm text-gray-700">{tour.title}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.description}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.category}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.duration}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.price}</td>
                  <td className="p-3 "><img className='rounded w-20 h-20' src={`${tour.image}` }/></td>
                  
                  <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                 <Link to={`/dashboard/UpdateTour` }> 
                                  <IoCreate onClick={() => handlid(tour._id)} size={30} className='text-primary' /></Link> 
                                    <button onClick={() => handldelete(tour._id)}>
                                    <MdOutlineDeleteForever size={30} className='text-red-600' />
                                    </button>
                                </div>

                            </td>
              
               
                </tr>
              ))}
              </tbody>


                </table>
            </div>
        </div>
    )
}


export default Tours
