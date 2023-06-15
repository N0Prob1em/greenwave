import React from "react";
import './Navbar.css';
import logo from '../../assets/logo-no-background.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="title">
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="searchbar">
          <input className="bar" type="text" placeholder="Search" />
        </div>
      </div>
    </>
  )
}

export default Navbar;