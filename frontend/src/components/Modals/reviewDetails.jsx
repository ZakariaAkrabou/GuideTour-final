import React from 'react'
import { AiOutlineComment } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { GoTriangleRight } from "react-icons/go";

export default function ReviewModal({handleReview}) {
  return (
      <div className=' flex flex-col gap- p-2 py-3 w-32 px- justify-center items- rounded-xl bg-white shadow-xl'>
        <div className=' gap-1 flex flex-col'>

        <div>
          <GoTriangleRight className=' absolute text-white bottom-1/3 -right-[19px]' size={30}/>
        </div>
        <div onClick={handleReview} className=' text-lg font-'>
            <button className=' items-center gap-1 flex'>
            <AiOutlineComment size={20}/>
              Review
            </button>
        </div>
        <div className=' text-lg font-'>
            <button className=' items-center gap-1 flex'>
            <CgDetailsMore size={20}/>
              Details
            </button>
        </div>
        </div>
      </div>
  )
}
