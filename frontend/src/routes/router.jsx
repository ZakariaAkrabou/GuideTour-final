import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Tour from "../pages/tour";
import Camping from "../pages/camping";
import Login from "../pages/login";
import Register from "../pages/register";

const Router = () => {
  return (
    <Routes>

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/camping" element={<Camping />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
