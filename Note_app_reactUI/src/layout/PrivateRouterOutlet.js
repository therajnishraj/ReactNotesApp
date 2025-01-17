import { React, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { isLogin } from "../auth/Auth";
import { Bounce, ToastContainer } from "react-toastify";

const PrivateRouterOutlet = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLogin());

  useEffect(() => {
    setIsUserLoggedIn(isLogin());
  }, []);

  return (
    <>
          
      {isUserLoggedIn ? (
        <>
    
          <Header />
          <div style={{ padding: "20px" }}>
            <Outlet />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Navigate to="/login" />
          {/* <Login /> */}
        </>
      )}
    </>
  );
};

export default PrivateRouterOutlet;
