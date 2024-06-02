
import  { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';




const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='relative  lg:py-0 py-[40px] -top-[270px] left-[90px] lg:left-0 lg:top-0'>
<div className="container lg:mx-auto px-1 lg:pt-15   ">
      <section className="flex flex-col gap-[100px] md:flex-row items-center justify-center mb-3 relative "  data-aos="fade-up">
        <div className="lg:py-[40px]">
          <img
            src="/img_rectangle_19367.png"
            alt="Desert"
            className="lg:h-[500px] h-[300px] rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2  lg:top-0 relative lg:py-0 py-[20px] -top-[90px]  ">
          <h2 className="lg:text-2xl lg:mb-4 text-xl text-primary font-bold">Information</h2>
          <h3 className="lg:text-4xl text-xl lg:mt-8 mt-2 font-Volkhov font-bold text-secondaire">
            What is “Journey Tour & Travel“?
          </h3>
          <br></br>
          <p className="text-sm mb-4 text-justify lg:pb-4 ">
          Dive into Moroccan adventure and culture with our dedicated travel website. Explore the wonders of Marrakech, the historic treasures of Fez,
           and the majestic dunes of the Sahara. We offer personalized tours, unique camping experiences, and guided excursions for all tastes.
            Enjoy our user-friendly platform to easily book your next Moroccan adventure. Discover breathtaking landscapes, 
          rich traditions, and the warm hospitality of Morocco. With us, your journey becomes an unforgettable experience
          </p>
          <Link to={"/about"}> 
          <button  className="bg-primary rounded-full shadow lg:h-12  h-8 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary relative z-10">
            Read More
          </button>
          </Link>
         
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default About;
