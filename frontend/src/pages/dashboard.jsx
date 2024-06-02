import React from 'react'
import Sidebar from '../components/dashboardGuides/sideBar'
import TopBar from '../components/dashboardGuides/topBar'
import {Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <>
   <div className=' h-[800px] bg-slate-100'>
    <div className=' '>
      <div className='relative top-20 h-screen '><Sidebar/></div>
    <div className='relative  -top-[700px]'><TopBar/></div>
    </div>
    <div className='relative left-[300px] -top-[710px] h-[100px] w-52  '>{<Outlet/>}</div>
   </div> 
    </>
   
  )
}

export default Dashboard