import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Tour from "../pages/tour";
import Camping from "../pages/camping";
// import Login from "../pages/login";
import Register from "../pages/register";
import Landscapes from "../pages/landscapes";
import { AuthProvider } from "../contexts/AuthContext";
import dashboard from '../pages/dashboard'

const Router = () => {
  return (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/camping" element={<Camping />} />
      <Route path="/dashboard" element={<dashboard />} />

      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/landscapes" element={<Landscapes/>}/>
    </Routes>
  </AuthProvider>
  );
};

export default Router;

