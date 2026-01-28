import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/dashboards/UserDashboard.jsx";
import Riderdashboard from "./pages/dashboards/Riderdashboard.jsx";
import Resturantdashboard from "./pages/dashboards/Resturantdashboard.jsx";
import Admindashboard from "./pages/dashboards/Admindashboard.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/userdashboard" element={<UserDashboard />}></Route>
          <Route path="/rider-dashboard" element={<Riderdashboard />}></Route>
          <Route
            path="/resturant-dashboard"
            element={<Resturantdashboard />}
          ></Route>
          <Route path="/admin-dashboard" element={<Admindashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
