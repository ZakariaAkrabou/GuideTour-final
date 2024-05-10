import React from 'react'


import Sidebar from '../components/dashboardGuides/sideBar'
import TopBar from '../components/dashboardGuides/topBar'
// import Tours from '../components/dashboardGuides/Tours'
import {Outlet} from 'react-router-dom'
// import Dashboard from "../components/dashboardGuides/dashboard";


function Dashboard() {
  return (
    <>
    <TopBar/>
    <Sidebar/>
    <div className=' overflow-hidden px-[300px] absolute top-[250px] '>

<Outlet/>
{/* <Outlet/> */}

    </div>
    </>
  )
}

export default Dashboard