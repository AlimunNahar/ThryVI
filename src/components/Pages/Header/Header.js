import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const handleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Category
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/">Computer Science</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link className="btn text-center my-5" to="/login">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost normal-case text-3xl subpixel-antialiased font-bold text-black italic"
          to="/"
        >
          ThryVI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/">
              Category
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <Link to="/">Computer Science</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div
          onClick={handleTheme}
          className="btn rounded-full text-lg"
          data-choose-theme
        >
          {isDarkMode ? (
            <button data-set-theme="dark" data-act-class="ACTIVECLASS">
              <MdDarkMode />
            </button>
          ) : (
            <button data-set-theme="emerald" data-act-class="ACTIVECLASS">
              <MdLightMode />
            </button>
          )}
        </div>
        {/* <p className="mx-5 hidden"> Welcome! {"Moon"}</p> */}
        <div className="hidden lg:block">
          <Link className="btn mx-4" to="/login">
            Login
          </Link>
          <Link to="/register" className="btn mr-4 invisible lg:visible">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
