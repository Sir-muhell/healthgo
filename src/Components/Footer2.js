import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { MdLocationOn, MdMail } from "react-icons/md";
import { BsTelephoneFill, BsMedium } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import Img from "../Assets/image15.svg";
import axios from "axios";

const Footer2 = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);

    const data = {
      Email: email,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/cf5fe4b9-b70b-415c-9d68-0e71dfbc1ff3",
        data
      )
      .then((response) => {
        // console.log(response);
        setEmail("");
        setSuccess(
          "You have successfully subscribed to our mailing list. Thank you!"
        );
      })
      .catch((error) => {
        console.error("Errorssss:", error);
        // Handle the error
      });
  };
  return (
    <div>
      <section className="bg-primary pt-0">
        <div className="footer lg:p-20 lg:pt-0 p-10 lg:grid md:grid grid-cols-2 gap-10 lg:block md:block hidden lg-screen">
          <div className="lg:grid grid-cols-2  gap-5">
            <div>
              <img src={Img} alt="Healthgo Logo" />
              <p className="name mt-5 text-white">HealthGO Technologies</p>
              <p className="motto text-white">...quality healthcare for all</p>
              <p className="copyright pt-10 text-white">© Copyrights 2023</p>
            </div>
            <div className="pt-10">
              <p className="footer-head text-white">CONTACT</p>
              <ul>
                <li className="flex items-center text-white">
                  <span className="mr-3">
                    <MdLocationOn className="icon" />
                  </span>
                  Lagos, Nigeria | Delaware, USA
                </li>
                <li>
                  <a
                    href="tel:+2348131927155"
                    className="flex items-center text-white"
                  >
                    <span className="mr-3">
                      <BsTelephoneFill className="icon " />
                    </span>
                    +234 813 192 7155
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@healthgotechnologies.com"
                    className="flex items-center text-white"
                  >
                    <span className="mr-3">
                      <MdMail className="icon" />
                    </span>
                    hello@healthgotechnologies.com
                  </a>
                </li>
              </ul>
              <div className="flex text-white pt-5">
                <a href="https://www.linkedin.com/company/healthgohq/">
                  <FaLinkedinIn className="sm-icon" />
                </a>
                <a href="https://www.instagram.com/healthgohq/">
                  <FaInstagram className="sm-icon" />
                </a>
                <a href="https://twitter.com/healthgoHQ">
                  <FaTwitter className="sm-icon" />
                </a>
                <a href="https://t.me/HealthgoHQ">
                  <FaTelegramPlane className="sm-icon" />
                </a>
                <a href="https://medium.com/@HealthGO_HQ">
                  <BsMedium className="sm-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 gap-5">
            <div className="grid grid-cols-2 gap-5 pt-10">
              <div>
                <p className="footer-head text-white">QUICK LINKS</p>
                <ul className="text-white">
                  <li>
                    <a
                      href="https://insurance.healthgotechnologies.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <NavLink to="/"> Home </NavLink>
                  </li>
                  <li>
                    <NavLink to="about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="events">Events</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="help">Help</NavLink>
                  </li> */}
                </ul>
              </div>
              <div>
                <p className="footer-head text-white">LEARN MORE</p>
                <ul className="text-white">
                  <li>
                    <NavLink to="who-we-are">Who we are</NavLink>
                  </li>
                  <li>
                    <NavLink to="what-we-do">What we do</NavLink>
                  </li>
                  <li>
                    <NavLink to="why-we-do-this">Why we do this</NavLink>
                  </li>
                  <li>
                    <NavLink to="privacy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="careers">Careers</NavLink>
                  </li>
                  <li>
                    <a
                      href="https://docs.healthgotechnologies.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-10">
              <p className="footer-head text-white">STAY UPDATED!</p>
              <p className="mail text-white">
                Join our mailing list to get the latest updates in your mail.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  className="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Your email address"
                />
                <p className="text-white mt-3">{success}</p>
                <button className="bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-2">Subscribe</span>
                  <HiArrowNarrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer lg:p-20 lg:pt-0 p-10 lg:grid grid-cols-2 gap-10 block lg:hidden md:hidden">
          <div className="">
            <p className="footer-head text-white">STAY UPDATED!</p>
            <p className="mail text-white">
              Join our mailing list to get the latest updates in your mail.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Your email address"
              />
              <p className="text-white mt-3">{success}</p>
              <button className="bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-2">Subscribe</span>
                <HiArrowNarrowRight />
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-5 pt-10">
            <div>
              <p className="footer-head text-white">QUICK LINKS</p>
              <ul className="text-white">
                <li>
                  <a
                    href="https://insurance.healthgotechnologies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="events">Events</NavLink>
                </li>
                {/* <li>
                  <NavLink to="help">Help</NavLink>
                </li> */}
              </ul>
            </div>
            <div>
              <p className="footer-head text-white">LEARN MORE</p>
              <ul className="text-white">
                <li>
                  <NavLink to="who-we-are">Who we are</NavLink>
                </li>
                <li>
                  <NavLink to="what-we-do">What we do</NavLink>
                </li>
                <li>
                  <NavLink to="why-we-do-this">Why we do this</NavLink>
                </li>
                <li>
                  <NavLink to="privacy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="careers">Careers</NavLink>
                </li>
                <li>
                  <a
                    href="https://docs.healthgotechnologies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10">
            <p className="footer-head text-white">CONTACT</p>
            <ul>
              <li className="flex items-center text-white">
                <span className="mr-3">
                  <MdLocationOn className="icon" />
                </span>
                Lagos, Nigeria | Delaware, USA
              </li>
              <li className="flex items-center text-white">
                <span className="mr-3">
                  <BsTelephoneFill className="icon " />
                </span>
                +234 813 192 7155
              </li>
              <li className="flex items-center text-white">
                <span className="mr-3">
                  <MdMail className="icon" />
                </span>
                hello@healthgotechnologies.com
              </li>
            </ul>
            <div className="flex text-white pt-5">
              <a href="https://www.linkedin.com/company/healthgohq/">
                <FaLinkedinIn className="sm-icon" />
              </a>
              <a href="https://www.instagram.com/healthgohq/">
                <FaInstagram className="sm-icon" />
              </a>
              <a href="https://twitter.com/healthgoHQ">
                <FaTwitter className="sm-icon" />
              </a>
              <a href="https://t.me/HealthgoHQ">
                <FaTelegramPlane className="sm-icon" />
              </a>
              <a href="https://medium.com/@HealthGO_HQ">
                <BsMedium className="sm-icon" />
              </a>
            </div>
          </div>
          <div className="text-center mt-14 ">
            <div className="inline-flex items-center">
              <img src={Img} alt="Healthgo Logo" />
              <div className="pl-3">
                <p className="name text-white">HealthGO Technologies</p>
                <p className="motto text-white">
                  ...quality healthcare for all
                </p>
              </div>
            </div>
            <p className="copyright pt-3 text-white">© Copyrights 2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer2;
