import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <FlowbiteFooter container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FlowbiteFooter.Brand
                            Link=""
                            src="/img_ellipse_621.png"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FlowbiteFooter.Title title="about" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                        <div>
                            <FlowbiteFooter.Title title="Follow us" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                        <div>
                            <FlowbiteFooter.Title title="Legal" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <FlowbiteFooter.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <FlowbiteFooter.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
                            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
                        
                        </div>
                    </div>
                </div>
            </FlowbiteFooter>
        );
    }

<<<<<<< HEAD
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
=======
    export default Footer;
>>>>>>> 23c04d69b593632edc03c1448d503a3b553f9c0e
