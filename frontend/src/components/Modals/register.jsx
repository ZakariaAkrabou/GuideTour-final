import { useState } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import backgroundRegister from '/login.jpg'; 

const RegisterModal = ({ setShowModal, setShowRegisterModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering with email:", formData.email, "and password:", formData.password);
    setShowRegisterModal(false);
    setShowModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none flex justify-center items-center">
        <div className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-4">
            <span className="text-2xl font-inter font-semibold">Create an account</span>
            <div className="flex flex-col gap-2 w-full relative">
              <label className="text-3x" htmlFor="email">Email</label>
              <div className="absolute text-gray-500 left-2 flex items-center text-xl">
                <MdAlternateEmail className="" />
              </div>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className={`border ${error ? 'border-red-500' : 'border-gray-600'} w-full p-1 border border-gray-400 rounded-md placeholder-font-light`} />
            </div>
            <div className="flex flex-col gap-2 w-full relative">
              <label className="text-3x" htmlFor="password">
                Password
              </label>
              <div className="flex items-center">
                <input name="password" value={formData.password} onChange={handleChange} className={`border ${error ? 'border-red-500' : 'border-gray-600'} w-full p-1 border border-gray-400 rounded-md placeholder-font-light`}
                  type={showPassword ? 'text' : 'password'}
                />
                <div className="absolute right-2 flex items-center text-xl">
                  <button type="button" onClick={handleTogglePasswordVisibility} className="">
                    {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                  </button>
                </div>
              </div>
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
            <div className="py-4">
              <button className="w-[300px] bg-primary text-white font-inter p-2 rounded-lg mb-4 hover:bg-black hover:text-white hover:font-inter hover:border-transparent">Register</button>
              <div className=" flex items-center justify-center">
                <span className="mr-2">Already have an account?</span>
                <button className="text-blue-500 hover:underline hover:text-black" onClick={() => setShowRegisterModal(false)}>Login</button>
              </div>
            </div>
          </form>
            <div className="relative">
              <img src={backgroundRegister} alt="img" className="w-[300px] h-[450px] hidden rounded-r-2xl md:block object-cover" />
            </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default RegisterModal;
