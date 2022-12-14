import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeChange } from "theme-change";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const { user, logOut } = useContext(AuthContext);

  const handleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
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
            <li className="">
              {user?.uid ? (
                <>
                  <button onClick={handleLogOut} className="btn">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col">
                    <Link className="btn" to="/login">
                      Login
                    </Link>
                    <Link to="/register" className="btn">
                      Register
                    </Link>
                  </div>
                </>
              )}
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
          className="btn rounded-full text-lg mr-5"
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
        <div>
          {user?.uid ? (
            <div className="lg:flex hidden">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="rounded-full ring ring-success h-16 w-16"
                  src={user?.photoURL}
                  alt="avatar"
                />
              </div>
              <button
                onClick={handleLogOut}
                className="btn mx-4 hidden lg:block"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <div className="hidden lg:block">
                <Link className="btn mx-4" to="/login">
                  Login
                </Link>
                <Link to="/register" className="btn mr-4">
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// style={{ height: "50px", width: "50px" }}

export default Header;
