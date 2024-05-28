import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import blackLogo from "../../assets/blacklogo.png";
import FooterImage from "../../assets/Footer img.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Reset validation status on email change
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      setShowError(true);
      setShowSuccess(false); // Hide success message if email is not valid
    } else {
      // Do something with the valid email, like submitting the form
      setShowSuccess(true);
      setShowError(false); // Hide error message if email is valid
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <>
      <hr
        style={{
        filter: 'blur(1px)', 
      }}
      />
      <div className="ml-px w-full max-md:max-w-full bg-transparent"
        style={{ backgroundImage: `url(${FooterImage})`, backgroundSize: 'cover', backgroundPosition: 'bottom right',
             backgroundAttachment: 'fixed', }} >
        


      <div className="ml-px w-full max-md:max-w-full bg-transparent">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="w-1/2 max-md:ml-0 max-md:w-full flex justify-center items-end mt-4">
            <img
              src={blackLogo}
              alt="Logo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {/* <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full"> */}

                {/* <div className="flex flex-col max-md:mt-10"></div>
                </div> */}
                <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 mt-36 text-base font-medium leading-6 text-slate-900 max-md:mt-10">
                    <div className="text-xl font-bold leading-6">Company</div>
                    <Link to="/about">
                      <button className="mt-6">About Us</button>
                    </Link>
                    <div className="mt-5">Careers</div>
                    <div className="mt-5">Pricing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="mt-36 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 text-base font-medium leading-6 whitespace-nowrap text-slate-900 max-md:mt-10">
                    <div className="text-xl font-bold leading-6">
                      Destinations
                    </div>
                    <div className="mt-7">Marrakech</div>
                    <div className="mt-3">Tangier</div>
                    <div className="mt-3">Fez</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-5 text-base font-medium max-md:mt-10 max-md:max-w-full">
                    <div className="text-xl font-bold leading-6 text-slate-900 max-md:max-w-full">
                      Join Our Newsletter
                    </div>
                    <div className="flex gap-5 pl-5 mt-7 tracking-tight leading-[162.5%] max-md:flex-wrap max-md:max-w-full">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className={`flex-auto py-2 px-3 text-slate-900 bg-white border ${
                          isValidEmail ? "border-gray-300" : "border-red-500"
                        } rounded-l-md focus:outline-none focus:border-indigo-500`}
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <button
                        className="bg-primary px-4 py-2 text-black rounded-md"
                        onClick={handleSubmit}
                      >
                        Subscribe
                      </button>
                    </div>
                    {showError && !isValidEmail && (
                      <Alert severity="error" className="mt-2 ml-5">
                        Please enter a valid email address.
                      </Alert>
                    )}
                    {showSuccess && (
                      <Alert severity="success" className="mt-2 ml-5">
                        Thank you for subscribing!
                      </Alert>
                    )}
                    <div className="mt-7 tracking-tight leading-7 text-slate-900 max-md:max-w-full">
                      * Will send you weekly updates for your better
                      <br />
                      tour packages.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Footer;
