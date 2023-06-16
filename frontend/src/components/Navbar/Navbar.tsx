//import React from "react";
import './Navbar.css';
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="title">GreenWave</div>

        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <Searchbar/>
      </div>
    </>
  )
}

export default Navbar;