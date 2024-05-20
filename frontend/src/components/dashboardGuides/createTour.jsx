import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { createTours } from '../../features/Slices/guideSlice';
import { useDispatch } from 'react-redux';

 function CreateTour() {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    
    title: '',
    description: '',
    category: '',
    duration: '',
    price: '',
    image: null
   
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title,description,category,duration,price,image } = formData;
 

  const data = new FormData();
    data.append('title', title);
    data.append('description', description);
   data.append('category', category);
   data.append('duration', duration);
   data.append('price', price);


    if (image) data.append('image', image);

    try {
      dispatch(createTours(data));
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleCreat = async () => {
 

  
  if(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }
  try {
    await axios.post(`http://localhost:4000/api/tours/create`,formData, config);
    closeModal();
  } catch (error) {
    console.error('Error updating user:', error);
  }
}
 

  }
  return (
    <>
   
    <div className='bg-slate-200 rounded shadow-lg w-[900px] h-[500px] p-9   '>
   
     <div className='text-3xl text-primary'>Create tour</div>
           
      <p>title </p>
      <input name='title' value={formData.title} onChange={handleChange} type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
     
      <p>description</p>
      <input  name='description' value={formData.description} onChange={handleChange} type="text" placeholder=' enter description' className="  w-[300px]   border-none  bg-white  " />
      <p>category</p>
      <input name='category' value={formData.category} onChange={handleChange} type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <p>duration</p>
      <input name='duration' value={formData.duration} onChange={handleChange} type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <p>price</p>
      <input name='price' value={formData.price} onChange={handleChange}  type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <p>image</p>
      <input name='image'  onChange={handleFileChange} type="file"  className=" w-[300px]   border-none  bg-white  " />
      <div className='flex gap-7 relative  left-[400px]'>
         <button onClick={handleSubmit} className=' bg-primary rounded w-[150px] h-[40px] text-white'>create</button>
         <Link to="/dashboard/Tours">
          <button  className=' bg-primary rounded w-[150px] h-[40px] text-white'>dashboard</button>
         </Link>
  
      </div>
      
    </div>
  
  
 
    </>
  

  )
}
export default CreateTour
