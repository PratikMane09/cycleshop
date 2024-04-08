import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Locate from "../pages/Locate";
import Shop from "../components/UI/Shop";
import Privacy from "../pages/Privacy";
import Refund from "../pages/Refund";
import Shipping from "../pages/Shipping";
import TermsCondition from "../pages/TermsCondition";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/locate" element={<Locate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/termscondition" element={<TermsCondition />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
