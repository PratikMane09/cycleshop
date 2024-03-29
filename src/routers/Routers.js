import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Locate from "../pages/Locate";
import Shop from "../components/UI/Shop";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/locate" element={<Locate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
