// Layout.jsx
import Header from "./../Header/header";
import Routers from "../../routes/router";
import Footer from "./../Footer/footer";
import UserProfile from "../UserProfile/UserProfile";
import React, { useState } from "react";
import BecomeGuide from "../BecomeGuide/BecomeGuide";


const Layout = ({ children }) => {

  const [modalProfile, setModalProfile] = useState(false);
  const [modalGuide, setModalGuide] = useState(false);

  const handleProfileClose = () => {
    setModalProfile(false);
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
      <Header handleProfile={handleProfile}  />
      {modalProfile && (
        <div className="bg-white/ backdrop-filter backdrop-blur-sm h-full fixed top-0 w-full z-50 flex justify-center items-center">
          <UserProfile handleProfileClose={handleProfileClose} handleGuide={handleGuide}/>
        </div>
      )}
       {modalGuide && (
        <div className="backdrop-filter backdrop-blur-sm 
        h-full fixed top-0 w-full z-50 flex justify-center items-center bottom-0 ">
        <BecomeGuide handleGuideClose={handleGuideClose} />
        </div>
        )}
      <main>{children}</main>
      
      <Routers handleProfile={handleProfile} handleGuide={handleGuide}/>
      <Footer />
    </>
  );
};

export default Layout;
