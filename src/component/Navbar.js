// Navbar.js


import logo from './Assets/logo.png';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from './Assets/cart_icon.png'
import { ShopContext } from '../Context/ShopContext';

const Navbar = ({ name, loggedIn, handleLogoutClick }) => {
  const [menu, setMenu] = useState('shop'); // Initialize menu state
const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar fixed top-0 left-0 right-0 z-50 flex justify-around p-16 shadow-[0 1 3 -2 bg-slate-950] py-4 sm:py-0 sm:p-5 sm:w-fit sm:gap-0 sm:px-1 md:px-5 bg-white '>
      <div className='nav-logo flex gap-3  '>
      <img className='py-5 h-20 sm:h-15' src={logo} alt='' />
       <Link to="/" ><p className='text-black text-xl font-semibold mt-7 sm:text-base sm:mt-8 sm:me-3 sm:-ml-2  md:-ml-2'>SHOPPER</p> </Link> 
      </div>
      <ul className="nav-menu flex py-8 list-none gap-10 text-slate-500 text-sm font-medium  sm:gap-2">
        <li onClick={() => setMenu('shop')} className='hover:text-slate-700 cursor-pointer md:-mr-2 '>
          <Link to="/">shop</Link>
          {menu === 'shop' ? <hr className='border-none w-5 h-1 border-r-2 bg-red-600' /> : null}
        </li>
        <li onClick={() => setMenu('mens')} className='hover:text-slate-700 cursor-pointer md:-mr-2'>
          <Link to="/mens">Men</Link>
          {menu === 'mens' ? <hr className='border-none w-5 h-1 border-r-2 bg-red-600' /> : null}
        </li>
        <li onClick={() => setMenu('womens')} className='hover:text-slate-700 cursor-pointer md:-mr-2'>
          <Link to="/womens">Women</Link>
          {menu === 'womens' ? <hr className='border-none w-5 h-1 border-r-2 bg-red-600' /> : null}
        </li>
        <li onClick={() => setMenu('kids')} className='hover:text-slate-700 cursor-pointer md:-mr-2'>
          <Link to="/kids">Kids</Link>
          {menu === 'kids' ? <hr className='border-none w-5 h-1 border-r-2 bg-red-600' /> : null}
        </li>
      </ul>
      
      <div className="nav-login-cart flex items-center">
        {loggedIn ? (
          <>
            <p className="text-gray-700">Welcome, {name}</p>
            <button
              onClick={handleLogoutClick}
              className="w-24 h-7 m-8 outline-none border-solid border-2 border-zinc-400 text-sm font-medium bg-white rounded-md cursor-pointer hover:bg-slate-700 hover:text-zinc-200 focus:outline-none"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className='w-24 h-7 m-8 outline-none border-solid border-2 border-zinc-400 text-sm font-medium bg-white rounded-md cursor-pointer hover:bg-slate-700 hover:text-zinc-200 focus:outline-none'>
              Login
            </button>
          </Link>
        )}
        <Link to='/cart'> 
          <img className='h-7' src={cart_icon} alt="" />
        </Link>
       
        <div className="nav-cart-count w-5 h-5 flex justify-center items-center -mt-7 rounded-full font-normal bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
