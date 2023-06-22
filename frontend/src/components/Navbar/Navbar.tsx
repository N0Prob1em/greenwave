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
          <input className="bar px-2 rounded" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="bottom-navbar">
        <div className='w-1/2 flex justify-center justify-between'>
          <button>Home</button>
          <button>Phones</button>
          <button>Food</button>
          <button>Cars</button>
          <button>Jobs</button>
        </div>
      </div>
    </>
  )
}

export default Navbar;