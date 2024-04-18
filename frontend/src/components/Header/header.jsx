import "./header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <NavLink to="/home" className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300">Home</NavLink>
        <NavLink to="/about" className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300">About</NavLink>
        <div className="relative">
          <button className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300 focus:outline-none">Services</button>
          <div className="absolute top-full left-0 bg-gray-800 text-white rounded shadow-md hidden">
            
            <NavLink to="/services/tour" className="block px-4 py-2 hover:bg-gray-700">Tours</NavLink>
            <NavLink to="/services/camping" className="block px-4 py-2 hover:bg-gray-700">Camping</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
