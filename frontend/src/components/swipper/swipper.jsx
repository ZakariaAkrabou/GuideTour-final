import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDown } from 'react-icons/io';
import imageDakhla from '../../assets/dakhla.jpg';
import imageEssaouira from '../../assets/essaouira.jpeg';
import imageMarzouga from '../../assets/marzouga.jpg';
import imageOuarzazate from '../../assets/ouarzazate.jpg';
import imageTamezmout from '../../assets/tamezmout.jpg';
import { Link } from 'react-router-dom';



const data = [
  {
    id: 1,
    name: 'Dakhla ',
    category: 'burger',
    image:
    imageDakhla,
    price: "560 dh",
  },
  {
    id: 2,
    name: 'Essaouira',
    category: '',
    image:
    imageEssaouira,
    price: '$',
  },
  {
    id: 3,
    name: 'Marzouga',
    category: '',
    image:
    imageMarzouga,
    price: "500 dh"
  },
  {
    id: 4,
    name: 'Ouarzazate',
    category: '',
    image:
    imageOuarzazate,
    price: '$$$',
  },
  {
    id: 5,
    name: 'Tamezmout',
    category: 'pizza',
    image:
    imageTamezmout,
    price: '$$',
  },
];
const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};
const SwipperHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };
  return (
    <div>
      <div className="flex flex-col pt-12 gap-5 relative lg:top-0 -top-[350px] lg:w-full w-[500px] ">
        <div className="flex flex-col items-center justify-center">
        <h1 className="w-full  text-lg tracking-widest text-red-400 uppercase max-md:max-w-full text-center">
      Promotion
    </h1>
    <p className="mt- w-[500px] text-3xl  leading-[71px] text-secondaire font-['Volkhov'] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[63px] text-center">
      We Provide You Best Morocco Sightseeing Tours
    </p>
   
   
    
        </div>
        <div className=" ">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className=' p-20 '>
                <div className="shadow-2xl w-[330px] rounded-lg lg:mx-2 transition bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:shadow-2xl ">
                  <img
                    width={400}
                    height={300}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[300px] object-cover rounded-t-lg "
                  />
                  <div className="flex flex-col gap-2 px-2 py-4">
                    <div className="text-lg font-bold ">{item.name}</div>

                    <div className="flex flex-row justify-between items-center font-semibold">
                      <p className='text-orange'>500.00 MAD</p>
                    <Link to={"/tour"}>
                     <button className="bg-primary duration-200 p-1 text-sm rounded-full text-white  hover:bg-white hover:border hover:border-primary px-4 py-2 hover:text-primary">
                       Book now
                      </button>
                    </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        
      </div>
    </div>
  );
};

export default SwipperHome;
