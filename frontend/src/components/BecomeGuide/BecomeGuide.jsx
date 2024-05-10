import React, { useState } from 'react';
import background2 from '../../assets/camping1.jpg';
import { IoCloseSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { switchProfile } from '../../features/Slices/userProfileSlice';
import { useDispatch } from 'react-redux';

function BecomeGuide({ handleGuideClose }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    bio: '',
    specialization: '',
    identity: null,
    certificate: null,
    profile_picture: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { bio, specialization, identity, certificate, profile_picture } = formData;

    const data = new FormData();
    data.append('bio', bio);
    data.append('specialization', specialization);

    if (identity) data.append('identity', identity);
    if (certificate) data.append('certificate', certificate);
    if (profile_picture) data.append('profile_picture', profile_picture);

    try {
      dispatch(switchProfile(data));
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

  return (
    <div className='relative'>
      <div className='p-2 h-[550px] flex justify-start items-center w-[700px] bg-white shadow-xl rounded-2xl'>
        <div className='absolute top-0 right-0 m-3'>
          <button onClick={handleGuideClose}>
            <IoCloseSharp className=' text-gray/50' size={30}/>
          </button>
        </div>
        <div className='justify-center items-center grid grid-cols-2'>
          <div className="lg:w-[300px] h-[530px] flex flex-col bg-[#e5edfa] rounded-2xl p-2">
            <div className="lg:grid lg:grid-cols-1 gap-2 text-center">
              <div className="relative flex justify-center">
                <img src={background2} alt="" className="rounded-full h-24 w-24" />
              </div>
              <h1 className="lg:text-xl font-semibold">AYOUB</h1>
              <div className='flex flex-col items-start gap-1'>
                <div className='w-full flex'>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder='Bio'
                    className='w-full h-20 border-[1.5px] pl-8 border-gray-400 rounded-lg max-h-[75px] min-h-10 overflow-hidden'
                  ></textarea>
                  <FaAddressCard size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
                </div>
                <div className='w-full flex'>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder='Specialization'
                    className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'
                  />
                  <MdWork size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
                </div>
                <div className='w-full '>
                  <span>Upload your Identity file here</span>
                  <input
                    type="file"
                    name="identity"
                    onChange={handleFileChange}
                    className='w-full border-[1.5px]   border-gray-400 rounded-lg'
                  />
                </div>
                <div className='w-full '>
                  <span>Upload your Certificate file here</span>
                  <input
                    type="file"
                    name="certificate"
                    onChange={handleFileChange}
                    className='w-full border-[1.5px]  border-gray-400 rounded-lg'
                  />
                </div>
                <div className='w-full'>
                  <span>Upload your Specialization file here</span>
                  <input
                    type="file"
                    name="profile_picture"
                    onChange={handleFileChange}
                    className='w-full border-[1.5px]  border-gray-400 rounded-lg'
                  />
                </div>
              </div>
              <div className=''>
                <button onClick={handleSubmit} className='font-semibold text-white hover:scale-x-110 bg-primary rounded-full px-10 p-1'>
                  Switch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeGuide;
