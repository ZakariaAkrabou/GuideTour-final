import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToursById, fetchUpdateTour } from '../../features/Slices/guideSlice';

function UpdateTour() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchToursById()); // Correct action to fetch tour data by ID
  }, [dispatch]);
  
  const tour = useSelector((state) => state.guides.getTour);
  console.log("Fetched tour data:", tour); // Check if tour data is fetched correctly

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
    price: '',
    image: null
  });

  useEffect(() => {
    if (tour) {
      setFormData({
        title: tour.title || '',
        description: tour.description || '',
        category: tour.category || '', // Assuming 'category' instead of 'email'
        duration: tour.duration || '',
        price: tour.price || '',
        image: null // Assuming image is being uploaded and not coming from tour data
      });
      console.log("Form data updated:", formData); // Check if form data is updated correctly
    }
  }, [tour]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSubmitted(false);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    dispatch(fetchUpdateTour(formData)); // Dispatch the correct form data
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

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
          className="pl-20 w-[300px] text-center border-none bg-white"
        />
        <p>Description</p>
        <input
          name='description'
          value={formData.description}
          type="text"
          onChange={handleChange}
          placeholder='Enter description'
          className="w-[300px] border-none bg-white"
        />
        <p>Category</p>
        <input
          name='category'
          value={formData.category}
          type="text"
          onChange={handleChange}
          className="pl-20 w-[300px] text-center border-none bg-white"
        />
        <p>Duration</p>
        <input
          name='duration'
          value={formData.duration}
          type="text"
          onChange={handleChange}
          className="pl-20 w-[300px] text-center border-none bg-white"
        />
        <p>Price</p>
        <input
          name='price'
          value={formData.price}
          type="text"
          onChange={handleChange}
          className="pl-20 w-[300px] text-center border-none bg-white"
        />
        <p>Image</p>
        <input
          name='image'
          type="file"
          onChange={handleFileChange}
          className="w-[300px] border-none bg-white"
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
