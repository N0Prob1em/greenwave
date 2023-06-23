//import React from "react";
import { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo-no-background.png';

const Navbar = () => {
  const navBar = useRef<HTMLDivElement>(null);
  const bottomNav = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (!bottomNav.current) {
      return;
    }
    setOffset(bottomNav.current.offsetTop);
  }, [bottomNav, setOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!bottomNav.current) {
        return;
      }

      setSticky(window.scrollY > offset);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSticky, bottomNav, offset]);


  if (sticky) {
    bottomNav.current?.classList.add('fixed');
    bottomNav.current?.classList.add('top-0');
  } else {
    bottomNav.current?.classList.remove('fixed');
    bottomNav.current?.classList.remove('top-0');
  }
  console.log(sticky);
  



  return (
    <>
    <div className='w-full'>
      <div className="top-navbar" ref={navBar}>
        <div className="title">
          <img className="logo" src={logo} alt="" />
        </div>
  
        <div className="searchbar">
          <input className="bar px-2 rounded" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="bottom-navbar w-75" ref={bottomNav}>
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