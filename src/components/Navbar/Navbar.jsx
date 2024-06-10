import React, { useState } from "react";
import "./Navbar.css";
import { CiUser,CiHeart,CiShoppingCart } from "react-icons/ci";

import { GiHamburgerMenu } from "react-icons/gi";


import { Link } from "react-router-dom";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>P</span>rakash
            <span>S</span>hop
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link "
          }>
          <ul className="text-uppercase">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/aboutus">aboutus</Link>
            </li>
            <li>
              <Link to="/locate">services</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="media">
          <ul className="media-desktop">
            <li>
            <Link to="/login"><CiUser /></Link>
            </li>
            <li>
             
            <CiHeart/>
            </li>
            <li>
            <Link to="/cart"><CiShoppingCart/></Link>
            
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
