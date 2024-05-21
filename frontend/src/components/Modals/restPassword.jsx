import { useState, useEffect } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { restPassword } from "../../features/Slices/authPasswordSlice";
import { Link, useParams } from "react-router-dom";


const ResetPassword = ({ setShowModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
  });
  const dispatch = useDispatch();
  const { token } = useParams();

  useEffect(() => {
    console.log("Reset token:", token);
  }, [token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resetting password:", formData);
    console.log("tok:", token);
    dispatch(restPassword({ formData, token }));
    setShowModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none flex justify-center items-center">
        <div className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-4">
            <span className="text-2xl font-inter font-semibold">Reset Password</span>
            <div className="flex flex-col gap-2 w-full relative">
              <label className="text-3x" htmlFor="password">New Password</label>
              <div className="flex items-center">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`border ${error ? "border-red-500" : "border-gray-600"
                    } w-full p-1 border border-gray-400 rounded-md placeholder-font-light`}
                  type={showPassword ? "text" : "password"}
                />
                <div className="absolute right-2 flex items-center text-xl">
                  <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                    className=""
                  >
                    {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-4">
                <Link
                to={'/home'}>
              <button
                className="w-[300px] bg-primary text-white font-inter p-2 rounded-lg mb-4 hover:bg-black hover:text-white hover:font-inter hover:border-transparent"
              >
                Reset Password
              </button>
                </Link>
              <div className=" flex items-center justify-center">
                <button
                  className="text-blue-500 hover:underline hover:text-black"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ResetPassword;
