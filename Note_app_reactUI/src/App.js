import React from "react";

import "./style.css";
import Home from "./component/Home"; // Import the Home component
import About from "./component/About"; // Import the Home component
import AddData from "./component/AddData"; // Import the Home component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Service from "./component/Service";
import "primeicons/primeicons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./auth/Login";
import PrivateRouterOutlet from "./layout/PrivateRouterOutlet";
import { Bounce, ToastContainer } from "react-toastify";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/private" element={<PrivateRouterOutlet />}>
            <Route index element={<Home />} />
            <Route path="data" element={<AddData />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Router>
  );
}
