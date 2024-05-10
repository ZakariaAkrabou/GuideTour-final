import background2 from '../../assets/camping1.jpg'
import { IoPerson, IoCloseSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard, FaInfo } from "react-icons/fa";
import { fetchProfile, updateProfile } from '../../features/Slices/userProfileSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';



function UserProfile({handleProfileClose, handleGuide}) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    setFormData({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      password: '',
      address: profile.address,
      phone: profile.phone,
    });
  }, [profile]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <div className=' p-2 h-[550px] flex justify-start items-center w-[700px] bg-white shadow-xl rounded-2xl relative' >
        <div className=' absolute top-0 right-0 m-3'>

        <button onClick={handleProfileClose}>
            <IoCloseSharp className=' text-gray/50' size={30}/>
        </button>
        </div>
    <div className=' justify-center  items-center grid grid-cols-2'>
        <div className="lg:w-[300px] h-[530px] bg-[#e5edfa] rounded-2xl p-2">
          <div className="lg:grid lg:grid-cols-1 gap-2 text-center">

            <img src={background2} alt="" className="w-full h-20 lg:h-[150px] rounded-t-2xl" />

            <div className="relative flex justify-center -top-12">
              <img src={background2} alt="" className="rounded-full h-24 w-24" />
            </div>

            <div className='relative -top-12'>
              <h1 className="lg:text-xl font-semibold">AYOUB</h1>
              <div className=" ">
                <div className=' flex flex-col items-start gap-1'>
                    <h1 className=' font-bold'>Country</h1>
                    <input type="text" value={profile.country} disabled className=' w-full rounded-2xl h-12 font-semibold bg-transparent border-2 border-black' />
                    <h1 className=' font-bold'>Role</h1>
                    <input type="text" value={profile.role} disabled className=' w-full rounded-2xl h-12 font-semibold bg-transparent border-2 border-black' />
                </div>
              </div>
     
            </div>
          </div>
          <div className='flex items-center justify-center mt-4'>
  <div className='relative' onClick={handleGuide}>
    <button className='bg-gray/50 text-white font-semibold px-6 py-2 rounded-full flex items-center'onClick={handleProfileClose}>
      <IoPerson size={20} className='mr-2' />
      Become a guide
    </button>
  </div>
</div>
        </div>

        <div className=''>
          <form onSubmit={handleSubmit}>
            <div className='flex items-center pb-3 gap-1'>
              <FaInfo className='text-blue-500' size={30} />
              <h1 className='font-semibold text-3xl pb- text-nowrap text-blue-400'>Personal Informations</h1>
            </div>
            <div className='gap-4 flex flex-col items-center'>
              <div className='w-full flex'>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Firstname' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg' />
                <IoPerson size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Lastname' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg' />
                <IoPerson size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg' />
                <MdAlternateEmail size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg' />
                <RiLockPasswordFill size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Address' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg' />
                <FaAddressCard size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone' className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg' />
                <BsFillTelephoneFill size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <button type='submit' className='w-36 p-2 text-white font-semibold rounded-full bg-primary'>Save</button>
            </div>
          </form>
        </div>
        </div>
    </div>
  )
}

export default UserProfile