"use client";

import Link from "next/link";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/rooms">Rooms</Link>
      </li>
      <li>
        <Link href="/add-rooms">Add Rooms</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          Study Nook
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-center lg:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}

            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-end hidden lg:flex gap-2">
        <Link href="/login" className="btn btn-outline">
          Login
        </Link>

        <Link href="/register" className="btn btn-primary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;