// Layout.jsx
import Header from "./../Header/header";
import Routers from "../../routes/router";
import Footer from "./../Footer/footer";
import UserProfile from "../UserProfile/UserProfile";
import Orders from "../Orders/Orders";
import React, { useState } from "react";
import BecomeGuide from "../BecomeGuide/BecomeGuide";


const Layout = ({ children }) => {

  const [modalProfile, setModalProfile] = useState(false);
  const [modalGuide, setModalGuide] = useState(false);
  const [modalOrder, setModalOrder] = useState(false);

  const handleProfileClose = () => {
    setModalProfile(false);
  };

  const handleOrder = () => {
    setModalOrder(true);
  };

  const handleProfile = () => {
    setModalProfile(true);
  };
  const handleGuide = () => {
    setModalGuide(true);
  };

  const handleGuideClose = () => {
    setModalGuide(false);
  };


  return (
    <>
      <Header handleProfile={handleProfile} handleOrder={handleOrder} />
      {modalProfile && (
        <div className="bg-white/ backdrop-filter backdrop-blur-sm h-full fixed top-0 w-full z-50 flex justify-center items-center">
          <UserProfile handleProfileClose={handleProfileClose} handleGuide={handleGuide} handleOrder={handleOrder}/>
        </div>
      )}
       {modalGuide && (
        <div className="backdrop-filter backdrop-blur-sm 
        h-full fixed top-0 w-full z-50 flex justify-center items-center bottom-0 ">
        <BecomeGuide handleGuideClose={handleGuideClose} />
        </div>
        )}

       {modalOrder && (
        <div className="backdrop-filter backdrop-blur-sm 
        h-full fixed top-0 w-full z-50 flex justify-center items-center bottom-0 ">
        <Orders  />
        </div>
        )}
      <main>{children}</main>
      <Routers handleProfile={handleProfile} handleGuide={handleGuide} handleOrder={handleOrder}/>
      <Footer />
    </>
  );
};

export default Layout;
