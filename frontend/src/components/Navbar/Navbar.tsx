//import React from "react";
import { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo-no-background.png';

const Navbar = () => {
  const navBar = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const navbarStyle = navBar.current?.style;
    const navbarPos = navBar.current?.getBoundingClientRect().top;

    const handleScroll = () => {
      setScrollPosition(document.documentElement.scrollTop);
    }

    window.addEventListener("scroll", handleScroll);

    if (scrollPosition > 0) {
      navbarStyle!.fontSize = "0px";
    } else {
      navbarStyle!.backgroundColor = "";
      
    }

    console.log();
    

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollPosition])

  console.log(scrollPosition);

  return (
    <>
    <div className='sticky top-0'>
      <div className="top-navbar" ref={navBar}>
        <div className="title">
          <img className="logo" src={logo} alt="" />
        </div>
  
        <div className="searchbar">
          <input className="bar px-2 rounded" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="bottom-navbar">
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