import React from "react";
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

const Footer = () => {
  return (
    <div className="bg-secondary pt-10">
      <div className="waitlist-section pt-20 lg:pt-52"></div>
      <section className="bg-primary">
        <div className="footer lg:p-20 lg:pt-0 p-10 lg:grid grid-cols-2 gap-10 lg:block md:block hidden">
          <div className="lg:grid grid-cols-2  gap-5">
            <div>
              <img src={Img} alt="" />
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
                  Lagos, Nigeria
                </li>
                <li>
                  <a
                    href="tel:+2349074026790"
                    className="flex items-center text-white"
                  >
                    <span className="mr-3">
                      <BsTelephoneFill className="icon " />
                    </span>
                    +234 907 402 6790
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
                  <li>Download the App</li>
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
              <input
                class="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none"
                type="text"
                placeholder="Your email address"
              />
              <button class="bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-2">Subscribe</span>
                <HiArrowNarrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="footer lg:p-20 lg:pt-0 p-10 lg:grid grid-cols-2 gap-10 block lg:hidden md:hidden">
          <div className="">
            <p className="footer-head text-white">STAY UPDATED!</p>
            <p className="mail text-white">
              Join our mailing list to get the latest updates in your mail.
            </p>
            <input
              class="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none"
              type="text"
              placeholder="Your email address"
            />
            <button class="bg-white hover:bg-secondary text-primary mt-5 font-bold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-2">Subscribe</span>
              <HiArrowNarrowRight />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 pt-10">
            <div>
              <p className="footer-head text-white">QUICK LINKS</p>
              <ul className="text-white">
                <li>Download the App</li>
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
                Lagos, Nigeria
              </li>
              <li className="flex items-center text-white">
                <span className="mr-3">
                  <BsTelephoneFill className="icon " />
                </span>
                +234 907 402 6790
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
              <img src={Img} alt="" />
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

export default Footer;
