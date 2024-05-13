import React from 'react'
import { Link } from 'react-router-dom'

 function CreateTour() {
  return (
    <>
   
    <div className='bg-slate-200 rounded shadow-lg w-[900px] h-[500px] p-9   '>
   
           <div className='text-3xl text-primary'>Create tour</div>
      <p>title </p>
      <input type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
    
      <p>description</p>
      <input type="text" placeholder=' enter description' className="  w-[300px]   border-none  bg-white  " />
      <p>category</p>
      <input type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <p>duration</p>
      <input type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <p>price</p>
      <input type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <p>image</p>
      <input type="text"  className=" pl-20 w-[300px]  text-center border-none  bg-white  " />
      <div className='flex gap-7 relative  left-[400px]'>
         <button className=' bg-primary rounded w-[150px] h-[40px] text-white'>create</button>
         <Link to="/dashboard/Tours">
          <button className=' bg-primary rounded w-[150px] h-[40px] text-white'>dashboard</button>
         </Link>
  
      </div>
  
    </div>
  
  
 
    </>
  

  )
}
export default CreateTour
