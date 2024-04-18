import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


function AddUser({ closeModal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    age: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", formData);
      closeModal();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
  <div className=' bg-opacity-50 backdrop-filter backdrop-blur-sm fixed z-10 -left-5 top-0 w-screen h-screen flex items-center justify-center' onClick={closeModal}>
    <div className='shadow-2xl rounded-lg p-2 bg-white w-[600px] h-[500px]' onClick={(e) => e.stopPropagation()}>
    <h1 className='text-white font-bold bg-blue-500 rounded-lg h-9 flex items-center justify-center'>AddUser</h1>
    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
      {Object.entries(formData).map(([key, value]) => (
        <div className='flex flex-col text-center pt-1' key={key}>
          <label className=' text-xl font-medium mb-1' htmlFor={key}>{key}</label>
          <input
            name={key}
            value={value}
            onChange={handleChange}
            className='border-blue-500 border-2 rounded-lg w-full h-[40px] mb-2.5 font-semibold'
            type={key === 'password' ? 'password' : 'text'}
          />
        </div>
      ))}
      <div className='col-span-2 flex justify-center '>
        <button className='p-1 w-28 bg-blue-500 rounded-md text-lg text-white'>Add User</button>
        <button onClick={closeModal} className='ml-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md'>Cancel</button>

      </div>
    </form>
  </div>
</div>
  );
}

AddUser.propTypes = {
  closeModal: PropTypes.func.isRequired,
  // userId: PropTypes.string.isRequired,
};

export default AddUser;
