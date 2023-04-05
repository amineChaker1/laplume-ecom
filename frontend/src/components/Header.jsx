import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed  bg-black shadow-md w-full h-16 px-2 md:px-4">
      <div className="flex justify-between items-center h-full">
        <div className="h-12 ">
          <img src={logo} className="h-full" alt="" />
        </div>
        <div className="flex items-center gap-3 md:gap-8">
          <nav className="text-white flex gap-3 md:gap-8">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 md:h-6
              md:w-6 text-white cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div className="absolute -top-2 -right-2 text-white bg-green-700 h-4 w-3  md:h-5 md:w-4 rounded-full m-0 p-0  text-xs md:text-sm text-center">
              0
            </div>
          </div>
          <div className="">
            <svg
              onClick={() => setShowMenu(!showMenu)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 md:h-6 h-4 md:w-6 text-white cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md">
                <Link to="/signup" className="whitespace-nowrap cursor-pointer">
                  Signup
                </Link>{" "}
                <br />
                <Link to="login" className="whitespace-nowrap cursor-pointer">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
