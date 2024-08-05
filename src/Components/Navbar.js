import React, { useState, useEffect, useRef } from "react";

import { FaTimes } from "react-icons/fa";
import { HiArrowNarrowRight, HiMenuAlt1 } from "react-icons/hi";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.svg";
import Arrow from "../Assets/arrow.png";
// import Logo from "../Assets/logo2.png";
export default function Navbar() {
  const excludedRef = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  useEffect(() => {
    function handleClick(event) {
      // Check if the target element is within the excluded portion
      if (excludedRef.current && excludedRef.current.contains(event.target)) {
        // Click occurred within the excluded portion, do nothing
        return;
      }

      // Click occurred outside the excluded portion
      setIsButtonClicked(true);
    }

    // Attach event listener to document on component mount
    document.addEventListener("click", handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      {/* <div className="bg-secondary text-primary align-center content-center lg:pl-20 pl-10 pr-10 lg:pr-20 lg:grid lg:grid-cols-10">
        <p className="lg:text-2xl text-xl lg:pt-5 pt-2 font-semibold col-span-8 inline-flex ">
          <span className="mr-5 justify-center">
            <FaInfoCircle />
          </span>
          We are running a healthcare survey, kindly spare 2 minutes to give
          your feedback
        </p>

        <a
          href="https://docs.google.com/forms/d/14DXxnqA5LXkxq7T957pHAF8jhHZsyLXF-wJpxY8DjpQ/edit"
          target="_blank"
          rel="noreferrer"
          className="col-span-2 mt-3 pb-3 lg:mt-5 lg:mb-5 justify-center flex"
        >
          <button className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-2 px-4 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <span className="mr-2">Start Survey</span>
            <HiArrowNarrowRight />
          </button>
          <img src={Arrow} alt="arrow" className="h-10" />
        </a>
      </div> */}
      <nav
        className={click ? "navbar bg-primary" : "navbar hidden"}
        style={{ maxWidth: "1700px", margin: "0 auto", overflowX: "" }}
      >
        <div className="navbar-container bg-primary lg:pl-20 pl-10 pr-10 lg:pr-20">
          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img
                src={Logo}
                alt="Logo"
                className="logo lg:h-14"
                // style={{ height: "60px" }}
              />
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu hidden"}>
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
              <div className="nav-links" onClick={handleButtonClick}>
                <div className="flex items-center">
                  Learn More
                  {/* {!isButtonClicked && ( */}
                  <span
                    ref={excludedRef}
                    className="lg:ml-2 lg:hidden md:hidden chevron"
                  >
                    <BsChevronRight />
                  </span>
                  {/* )} */}
                  {/* {isButtonClicked && (
                    <span
                      ref={excludedRef}
                      className="lg:ml-2 lg:hidden md:hidden chevron"
                    >
                      <BsChevronDown />
                    </span>
                  )} */}
                  <span className="lg:ml-2 hidden lg:block chevron">
                    <BsChevronDown />
                  </span>
                </div>
              </div>
              <div className="dropdown-content">
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
                to="/partner"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  Become a Partner
                  <span className="lg:hidden md:hidden chevron">
                    <BsChevronRight />
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="header-icons-box">
            <a
              href="https://insurance.healthgotechnologies.com"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="bg-white hover:bg-secondary text-primary
              
              font-bold py-2 px-4 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                <span className="mr-2">Get Started</span>
                <HiArrowNarrowRight />
              </button>
            </a>
          </div>
          <div className="menu-icon text-white" onClick={handleClick}>
            {click ? <FaTimes /> : <HiMenuAlt1 />}
          </div>
        </div>
      </nav>
    </>
  );
}
