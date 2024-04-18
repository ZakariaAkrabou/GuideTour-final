import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login";
import Tour  from "../pages/tour";
import Camping from "../pages/camping";
import Register from "../pages/register";



const Router = () => {
  return (

      
      <Routes>
        <Route path="/" element= { <Navigate to='/home' />} />
        <Route path="/home" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/services/tour" element= {<Tour/>} />
        <Route path="/services/camping" element= {<Camping/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/register" element= {<Register />} />
      </Routes>

  );
};

export default Router;