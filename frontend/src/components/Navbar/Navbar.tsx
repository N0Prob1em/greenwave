//import React from "react";
import './Navbar.css';
import logo from '../../assets/images/logo-no-background.png';

const Navbar = () => {
  return (
    <>
      <div className="top-navbar">
        <div className="title">
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="searchbar">
          <input className="bar" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="bottom-navbar">
        <p>Home</p>
        <p>Phones</p>
        <p>Food</p>
        <p>Cars</p>
        <p>Jobs</p>
      </div>
    </>
  )
}

export default Navbar;