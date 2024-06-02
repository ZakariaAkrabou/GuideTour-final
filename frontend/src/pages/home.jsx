  import  { useEffect } from 'react';
  import Hero from "../components/Hero/hero";
  import About from "../components/about/aboutSection";
  import Component from "../components/review/testmonial"
  import SwipperHome from '../components/swipper/swipper'; 
  import Aos from 'aos';
  import 'aos/dist/aos.css';
  import { Link } from 'react-router-dom';

  const data1 = [
    {
      circleimage: "/img_ellipse_625.png",
      title: "Private guided tours",
      description:
        "No strangers on your tour.<br />It’s just you and your local host.",
    },
    {
      circleimage: "/img_ellipse_626.png",
      title: "Responsible",
      description:
        "Our tours are designed with<br />people, places & the planet in mind",
    },
    {
      circleimage: "/img_ellipse_627.png",
      title: "100% Customizable",
      description:
        "Let your local host tailor the tour<br />completely to your wishes.",
    },
  ];

  const data = [
    { 
      explorenature: "/img_line_3.svg", 
      explorenature1: "Explore Nature" ,
      backgroundImg: "/camping.jpg" 
    },
    { 
      explorenature: "/img_line_8.svg", 
      explorenature1: "Explore Cities" ,
      backgroundImg: "/cities.jpg"
    },
  ];

  const Home = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
    return (
      <>
        <Hero />
        <About />

        <div className='relative lg:top-0 -top-[350px] w-[500px] lg:w-full '>
            <div className="flex flex-col items-center justify-center gap-10 bg-gray-300  lg:h-[450px] bg-zinc-200">
            <p className="lg:text-4xl  text-2xl  py-4 lg:py-0 font-['volkhov'] text-center text-black-900">
                Why you should book a ”Journey Tour & Travel” tour
            </p>
          <div className="flex justify-center md:justify-start lg:gap-10 lg:pb-0 pb-8 gap-5 flex-wrap">
            {data1.map((d, index) => (
              <div key={"listdescription" + index} className="flex flex-col items-center gap-3 md:gap-5"  data-aos="zoom-out">
                  <img src={d.circleimage} className="w-20 h-20 rounded-full" alt="Icon"/>
                    <p className="text-lg font-bold text-center text-black-900">
                      {d.title}
                    </p>
                  <p className="text-lg text-center font-justify text-black-900" dangerouslySetInnerHTML={{ __html: d.description }} ></p>
              </div>
            ))}
          </div>
        </div>
        </div>
      


        {/* Packages */}
        <div className="flex flex-col lg:flex-row w-[500px]  lg:w-full relative lg:top-0 -top-[350px] bg-white-A700">         
          {data.map((d, index) => (
            <div key={"desktopOne" + index} className="flex flex-col justify-center items-center w-full bg-cover  bg-no-repeat md:w-1/2 md:h-auto md:p-5" style={{ backgroundImage: `url(${d.backgroundImg})` }} >
              <div className="relative h-[88px] self-stretch mb-4" data-aos="zoom-in">
                <img src={d.explorenature} alt="explore_nature" className="absolute bottom-[9.44px] right-[0.00px] m-auto h-[15px] w-[46%] md:w-auto" />
                <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center">
                  <div className=" flex flex-col items-center">
                    <h1 className="text-sm  uppercase tracking-[1.80px] font-volk font-bold text-white">
                      Promotion
                    </h1>
                    <h2 className="lg:text-3xl text-2xl md:text-2xl mt-[-3px] text-white font-volk font-bold">
                      {d.explorenature1}
                    </h2>
                  </div>
                </div>
              </div>
              <Link to={"/tour"}> 
              <div className='relative lg:-top-4 -top-6  '>
              <button
                shape="round"
                className="bg-primary rounded-full shadow h-10 lg:w-[200px] w-[150px] lg:px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary mt-4" data-aos="zoom-in">
                View Packages
              </button>
                </div> 
            
              </Link>
           
            </div>
          ))}
        </div>
        {/* end Packages */}
        <SwipperHome />
      <Component />
      </>
    );
  };

  export default Home;
