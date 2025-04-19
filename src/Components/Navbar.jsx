import React from 'react';
import { NavLink } from 'react-router';
import { MdShoppingCart } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm max-w-screen-8xl mx-auto px-8 md:p-12 lg:p-16 xl:p-24 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/cart'><MdShoppingCart size={20} /></NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/favorites'><FaBookmark size={20} /></NavLink>
      </li>
      </ul>
    </div>
    <NavLink to='/' className="font-bold text-xl">FlagshipFaceOff</NavLink>
  </div>
  
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
      
  <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/cart'><MdShoppingCart size={20} /></NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>(isActive?'text-blue-600':'')} to='/favorites'><FaBookmark size={20} /></NavLink>
      </li>
      
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;