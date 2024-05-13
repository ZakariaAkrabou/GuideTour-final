import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import {Link} from 'react-router-dom';


function Tours() {
    const [tours,setTours]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/api/tours/allTours")
        .then((res)=>res.json())
        .then((data)=>setTours(data))
        .then((data)=>console.log(data))
        .catch((error) => console.error('Error fetching tours:', error));;
    },[]);
    // const filteredTours= tours.filter(user =>
    //     user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    //   );

    //   const [modalDelete, setModalDelete] = useState(false);
    //   const [selectedUserId, setSelectedUserId] = useState(null);
    //   const [currentPage, setCurrentPage] = useState(1);
    //   const [itemsPerPage, setItemsPerPage] = useState(10);
    //   const [lastClicked, setLastClicked] = useState('');
    //   const [searchTerm, setSearchTerm] = useState('');
      
     
//   const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
//   const indexOfLastItem = users ? Math.min(indexOfFirstItem + itemsPerPage, tours.length) : 0;


//     const currentItems = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

    // const guide = fetchGuideData(guide_id);
    // const toursDuGuide = tours.filter(tour => tour.guide_id === user_id);



    //     // <tr key={ _id}>
    //    <tr >
        
    //           <td>{tour.title}</td>
            
    //        </tr>   
    //           ));
    //           const showTours2 =tours.map((tour ,index)=>(

    //             <tr >
                
                  
    //                   <td>{tour.description}</td>
    //                </tr>   
    //                   ));
  
     
       
    return (
        <div className='w-[1000px] h-screen bg-gray-300 shadow-xl'>
            <div className='flex items-center gap-[200px]'>
                  <p className='text-primary text-3xl p-6' >Tours</p>
            <div className="relative">
                <input type="text" placeholder=' Search Tour' className="w-[300px] h-[40px] text-center border-2 border-slate-400 rounded bg-white  " />
                <IoSearch size={20} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <Link to="/dashboard/CreateTour">
             <button className='bg-primary w-[100px] h-[40px] rounded text-white font-blond'>Add New</button>
            </Link>
           
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

                    {/* <tbody>

                        <tr className='  border-b-2 border-slate-300'>
                            <td>
                                <button className={`rounded-full border-black border-2 w-[22.6px] h-[15.7px] ml-2 mr-2`}></button>
                            </td>
                            <td>{showTours} </td>
                            <td>{showTours2} </td>
                        
                            <td className='p-3 text-sm text-gray-700'>uu</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>ww</td>
                            <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                    <IoCreate size={30} className='text-primary' /><MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>

                        </tr>
                        

                        
                            
                    

                    </tbody> */}
                    <tbody>
              {tours.map((tour, index) => (
                <tr key={index} className=' border-b-2 border-slate-300'>
                  <td>
                 
                  </td>
                  <td className="p-3 text-sm text-gray-700">{tour.title}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.description}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.category}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.duration}</td>
                  <td className="p-3 text-sm text-gray-700">{tour.price}</td>
                  <td className="p-3 "><img className='rounded w-20 h-20' src={`http://localhost:4000/${tour.image}` }/></td>
                  
                  <td className='p-3 text-sm text-gray-700'>
                                <div className='flex items-center'>
                                 <Link to="/dashboard/createTour">  <IoCreate size={30} className='text-primary' /></Link> 
                                    <MdOutlineDeleteForever size={30} className='text-red-600' />
                                </div>

                            </td>
              
               
                </tr>
              ))}
              </tbody>


                </table>
            </div>
        </div>
    )
}


export default Tours
