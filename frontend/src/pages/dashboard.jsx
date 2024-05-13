import React from 'react'
import Sidebar from '../components/dashboardGuides/sideBar'
import TopBar from '../components/dashboardGuides/topBar'
import {Outlet} from 'react-router-dom'

function dashboard() {
  return (
    <>
<div> <Sidebar/></div>
    
    <div><TopBar/></div> 
    <div>{Outlet}</div>
    
    </>
   
  )
}

export default dashboard