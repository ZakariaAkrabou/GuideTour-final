import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDown } from 'react-icons/io';

const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const SwipperHome = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/tours/allTours');
        console.log("ggtg", response);
        setTours(response.data); // Set fetched data to the state
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

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
    <div className="px-4"> {/* Add padding to the container */}
      <Slider {...settings}>
        {tours.map((tour, index) => (
          <div key={index} className="px-2 relative"> {/* Add padding to each slide */}
            <div className="rounded-lg overflow-hidden relative backdrop-blur"> {/* Apply blurry border */}
              <img
                width={400}
                height={300}
                src={tour.image}
                alt={tour.title}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 rounded-lg border border-transparent"></div> {/* Add border */}
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-50 p-2 rounded-lg text-center"> {/* Add book now button */}
                <button className="text-primary font-semibold">Book now</button>
              </div>
              <div className="flex flex-col gap-2 px-4 py-4"> {/* Add padding to inner content */}
                <div className="text-lg">{tour.title}</div>
                <div className="flex flex-row justify-between items-center font-semibold">
                  <p>{tour.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SwipperHome;
