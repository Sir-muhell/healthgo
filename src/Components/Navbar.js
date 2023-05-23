import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { HiArrowNarrowRight, HiMenuAlt1 } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.svg";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav
        className="navbar bg-primary"
        style={{ maxWidth: "1700px", margin: "0 auto" }}
      >
        <div className="navbar-container bg-primary lg:pl-20 pl-10 pr-10 lg:pr-20">
          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={Logo} alt="Logo" className="logo" />
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  Home
                  <span className="lg:hidden md:hidden chevron">
                    <BsChevronRight />
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  About Us
                  <span className="lg:hidden md:hidden chevron">
                    <BsChevronRight />
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  Events
                  <span className="lg:hidden md:hidden chevron">
                    <BsChevronRight />
                  </span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-links">
                <div className="flex items-center">
                  Learn More
                  <span className="lg:hidden md:hidden chevron">
                    <BsChevronRight />
                  </span>
                </div>
              </div>
              <div class="dropdown-content">
                <NavLink
                  to="/who-we-are"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center">
                    Who we are
                    <span className="lg:hidden md:hidden chevron">
                      <BsChevronRight />
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  to="/what-we-do"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center">
                    What we do
                    <span className="lg:hidden md:hidden chevron">
                      <BsChevronRight />
                    </span>
                  </div>
                </NavLink>
                <NavLink
                  to="/why-we-do-this"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center">
                    Why we do it
                    <span className="lg:hidden md:hidden chevron">
                      <BsChevronRight />
                    </span>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  Contact
                  <span className="lg:hidden md:hidden chevron">
                    <BsChevronRight />
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="header-icons-box">
            <button class="bg-white hover:bg-secondary text-primary font-bold py-2 px-4 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <span className="mr-2">Get Started</span>
              <HiArrowNarrowRight />
            </button>
          </div>
          <div className="menu-icon text-white" onClick={handleClick}>
            {click ? <FaTimes /> : <HiMenuAlt1 />}
          </div>
        </div>
      </nav>
    </>
  );
}
