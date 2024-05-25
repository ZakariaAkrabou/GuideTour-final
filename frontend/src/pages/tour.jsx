import Header from "../assets/header-tour.jpeg";
import { useState, useEffect } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { IoSearch, IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineWhereToVote, MdModeOfTravel } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardTours, fetchCardToursById, fetchGuidesByIds } from '../features/Slices/tourSlice';

const Tour = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const dispatch = useDispatch();
    const tours = useSelector((state) => state.tours.cartTour);
    const guides = useSelector((state) => state.tours.guideIds);

console.log("guides",guides);
    useEffect(() => {
        if (tours.length > 0) {
            const guideIds = tours.map(tour => tour.guide_id);
            console.log("diptch id",guideIds);
            dispatch(fetchGuidesByIds(guideIds));
        }
    }, [tours, dispatch]);

    useEffect(() => {
        dispatch(fetchCardTours());
    }, [dispatch]);

    const bgheadertour = {
        backgroundImage: `url(${Header})`,
        backgroundSize: 'cover',
    };

    const handleTourId = (tourId) => {
        dispatch(fetchCardToursById(tourId));
    }

    const handleItemsPerPageChange = (e) => {
        setCurrentPage(1);
        setItemsPerPage(parseInt(e.target.value, 10));
    };

    const totalItems = tours.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
    const currentTours = tours.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="App">
            <div className="text-white h-screen flex items-center justify-center" style={bgheadertour}>
                <div className="max-w-xl">
                    <h1 className="text-9xl text-nowrap font-year text-center capitalize">travel with us</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="shadow-2xl lg:w-4/6 relative mt-6 top-[-50px] bg-white p-2">
                    <div className="grid grid-cols-2 lg:gap-32">
                        <div className="grid lg:grid-cols-2 gap-x-28 gap-5 z-30">
                            {currentTours.map((tour, index) => (
                                <Link to="/Landscapes" key={index} style={{ display: 'block' }}>
                                    <div onClick={() => handleTourId(tour._id)} className='relative bg-white p-1.5 h-max w-56 hover:scale-105 rounded-xl hover:shadow-2xl shadow-md duration-100'>
                                        <div className='relative'>
                                            <img src={tour.image} alt="Card" className='h-[260px] w-full rounded-2xl object-cover' />
                                            <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t via-black/50 from-black/60 to-transparent rounded-b-[15px]"></div>
                                            <div className="flex absolute top-2 right-1 gap-1 text-white px-0.5 bg-black rounded-full">
                                                <div className='flex items-center'>
                                                    <IoPricetagOutline size={15} />
                                                </div>
                                                <h2 className="">{tour.price} $</h2>
                                            </div>
                                            <div className='absolute bottom-0 z-10 p-1 right-0 w-full  rounded-b-2xl'>
                                                <div className='flex flex-col'>
                                                    <div className="flex text-white">
                                                        <div className='flex gap-2 items-center'>
                                                            <MdModeOfTravel size={20} />
                                                        <h2 className="capitalize text-xl font-medium">{tour.title}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between text-white">
                                                    <div className="flex text-white">
                                                        <div className='flex gap-2 items-center'>
                                                            <BsPersonVcard className=" ml-1" size={20} />
                                                        <h2 className="capitalize text-xl font-medium">{guides[index]?.firstName}</h2>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Plan Tour Card */}
                        <div className="w-full h-max bg-stone-100 rounded-lg p-4">
                            <div className="text-3xl font-semibold pb-2 text-blue_fance font-Volkhov">
                                <h1>Plan your tour</h1>
                            </div>
                            <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                            <div className="flex flex-col gap-4">
                                <div className="gap-1"></div>
                                <div className="relative">
                                    <input type="text" placeholder='Search Tour' className="w-full h-[60px] text-center border-none bg-white" />
                                    <IoSearch size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder='Where To?' className="w-full h-[60px] text-center border-none bg-white" />
                                    <MdOutlineWhereToVote size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder='Date' className="w-full h-[60px] text-center border-none bg-white" />
                                    <TbCalendarEvent size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                <h2 className="uppercase font-bold">filter by price</h2>
                                <input type="text" placeholder='' className="w-full h-[30px] text-center border-none bg-white" />
                                <h4 className="text-neutral-600 capitalize">price : 12dh-3600dh</h4>
                            </div>
                            <div className="flex justify-center py-4 w-full">
                                <button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-100 bg-primary py-3 px-6 text-white text-lg rounded-md w-48">Filter</button>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-3 p-2">
                        {totalPages > 1 && (
                            <div className="flex items-center gap-4">
                                <button onClick={goToPreviousPage} disabled={currentPage === 1} className="disabled:opacity-50">
                                    <IoIosArrowBack className='text-primary' size={25} />
                                </button>
                                <span className="px-2 flex gap-2 items-center">
                                    <div className='bg-primary px-[9px] rounded-full text-white'>{currentPage}</div>
                                    of {totalPages}
                                </span>
                                <button onClick={goToNextPage} disabled={currentPage === totalPages} className="disabled:opacity-50">
                                    <IoIosArrowForward className='text-primary' size={25} />
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="h-20 left-0 -top-20 absolute w-full bg-white/50 backdrop-filter backdrop-blur-sm">
                        <div className="text-2xl font-bold text-back text-center pt-5">
                            <h1>Tours Lists</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;
