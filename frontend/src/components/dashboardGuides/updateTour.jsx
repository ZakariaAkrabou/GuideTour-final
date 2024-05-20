import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToursById, fetchUpdateTour } from '../../features/Slices/guideSlice';

function UpdateTour(id) {

  const dispatch = useDispatch();
  
  const tour = useSelector((state) => state.guides.getTour);
console.log(tour);
  
const [formData, setFormData] = useState({
  title: '',
  description: '',
  category: '',
  duration: '',
  price: '',
  image: null,
});

useEffect(() => {
  if (tour) {
    setFormData({
      title: tour.title || '',
      description: tour.description || '',
      category: tour.category || '',
      duration: tour.duration || '',
      price: tour.price || '',
      image: tour.image || null,
    });
  }
}, [tour]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleFileChange = (e) => {
  setFormData({
    ...formData,
    image: e.target.files[0],
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const id = tour._id;

  const data = new FormData();
  data.append('title', formData.title);
  data.append('description', formData.description);
  data.append('category', formData.category);
  data.append('duration', formData.duration);
  data.append('price', formData.price);

  if (formData.image) data.append('image', formData.image);

  try {
     dispatch(fetchUpdateTour({ id, data }));
    console.log("d",data);
  } catch (error) {
    console.error('Error updating tour:', error);
  }
};
  

  return (
    <div className='bg-slate-200 rounded shadow-lg w-[900px] h-[500px] p-9'>
      <div className='text-3xl text-primary'>Update tour</div>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          name='title'
          value={formData.title}
          type="text"
          onChange={handleChange}
          className=" w-full text-center border-none bg-white"
        />
        <p>Description</p>
        <input
          name='description'
          value={tour.description}
          type="text"
          onChange={handleChange}
          placeholder='Enter description'
          className="w-full text-center border-none bg-whit"
        />
        <p>Category</p>
        <input
          name='category'
          value={tour.category}
          type="text"
          onChange={handleChange}
          className="w-full text-center border-none bg-whit"
        />
        <p>Duration</p>
        <input
          name='duration'
          value={formData.duration}
          type="text"
          onChange={handleChange}
          className="w-full text-center border-none bg-whit"
        />
        <p>Price</p>
        <input
          name='price'
          value={formData.price}
          type="text"
          onChange={handleChange}
          className="w-full text-center border-none bg-whit"
        />
        <p>Image</p>
        <input
          name='image'
          type="file"
          onChange={handleFileChange}
          className="w-full text-center border-none bg-whit"
        />
        <div className='flex gap-7 relative left-[400px]'>
          <button type='submit' className='bg-primary rounded w-[150px] h-[40px] text-white'>Update</button>
          <Link to="/dashboard/Tours">
            <button type='button' className='bg-primary rounded w-[150px] h-[40px] text-white'>Dashboard</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateTour;
