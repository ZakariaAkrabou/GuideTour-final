import React from 'react'

function PayementTour({onCancel,onClose }) {
  return (
    <>
    <div className='border 2 border-rose-600  ' onClick={(e) => onClose()}>
        
          <p onClick={()=>onClose()}>&times;</p>
     <div className=''>kokklm</div>
     <button className='bg-rose-700' onClick={()=>onCancel()}>cancel</button>
    </div>
  
    </>
   
  )
}

export default PayementTour