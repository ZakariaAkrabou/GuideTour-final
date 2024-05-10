import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";



function Tours() {
    const [tours,setTours]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/api/tours/allTours")
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((error) => console.error('Error fetching tours:', error));;
    },[]);

    // const showTours =tours.map(tour=>)
      // const showTours =tours.map(tour=>)
        // const showTours =tours.map(tour=>)
    return (
        <div className='w-[1000px] h-screen bg-gray-300 shadow-xl'>
            <div className='flex items-center gap-[400px]'>
                  <p className='text-primary text-3xl p-6' >Tours</p>
            <div className="relative">
                <input type="text" placeholder=' Search Tour' className="w-[300px] h-[40px] text-center border-2 border-slate-400 rounded bg-white  " />
                <IoSearch size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            </div>
          

            <div className='  p-6 w-[900px]'>
                <table className='w-full p-5   shadow-xl'>
                    <thead className='  bg-slate-200 border-b-2 border-slate-300 '>

                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '></th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>title</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>description</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'>category</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left'>duration</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>price</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>image</th>
                        <th className=' p-3 text-sm font-semibold tracking-wide text-left '>Action</th>

                    </thead>

                    <tbody>

                        <tr className='  border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>ti</td>

                            <td className='p-3 text-sm text-gray-700 '>vv</td>
                            <td className='p-3 text-sm text-gray-700 '>hh</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>

                        </tr>
                        <tr className='  border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>ti</td>

                            <td className='p-3 text-sm text-gray-700 '>vv</td>
                            <td className='p-3 text-sm text-gray-700 '>hh</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>

                        </tr>
                        <tr className='  border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>ti</td>
                            <td className='p-3 text-sm text-gray-700'>yyy</td>
                            <td className='p-3 text-sm text-gray-700'>vv</td>
                            <td className='p-3 text-sm text-gray-700'>hh</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>


                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>
                        </tr>
                        <tr className=' border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>ti</td>
                            <td className='p-3 text-sm text-gray-700'>yyy</td>
                            <td className='p-3 text-sm text-gray-700'>vv</td>
                            <td className='p-3 text-sm text-gray-700'>hh</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>

                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>
                        </tr>
                        <tr className='  border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>ti</td>

                            <td className='p-3 text-sm text-gray-700 '>vv</td>
                            <td className='p-3 text-sm text-gray-700 '>hh</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>

                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>
                        </tr>
                        <tr className='  border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td className='p-3 text-sm text-gray-700'>ti</td>

                            <td className='p-3 text-sm text-gray-700 '>vv</td>
                            <td className='p-3 text-sm text-gray-700 '>hh</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>uu</td>

                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>
                        </tr>


                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Tours