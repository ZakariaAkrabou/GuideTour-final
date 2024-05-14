import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Tour from "../pages/tour";
import Camping from "../pages/camping";
// import Login from "../pages/login";
import Register from "../pages/register";
import Landscapes from "../pages/landscapes";
import { AuthProvider } from "../contexts/AuthContext";
import Orders from "../components/Orders/Orders";
// import Layout from '../components/shared/Layout'
// import Users from '../components/Dashboard/users'
// import Orders from '../components/Dashboard/orders'
// import Dashboard from "../components/Dashboard/dashboard";

const Router = () => {
  return (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/camping" element={<Camping />} />
      <Route path="/orders" element={<Orders/>} />

      {/* <Route path="/dashboard" element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path="/dashboard/tours" element={<Users />} />
        <Route path="/dashboard/orders" element={<Orders/>} />
        </Route>
        Users route outside the Layout component */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/landscapes" element={<Landscapes/>}/>
    </Routes>
  </AuthProvider>
  );
};

export default Router;

