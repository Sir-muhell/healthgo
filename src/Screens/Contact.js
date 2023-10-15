import React from "react";
// import Icon1 from "../Assets/icon1.svg";
import Icon2 from "../Assets/icon2.svg";
import Icon3 from "../Assets/icon3.svg";
import Icon4 from "../Assets/icon4.svg";
import Icon5 from "../Assets/icon5.svg";
import Icon6 from "../Assets/icon6.svg";
import Img8 from "../Assets/image9.svg";
import Logo from "../Assets/image5.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div className="container-box bg-secondary lg:p-20 p-10">
        <div className="lg-screen">
          <p className="contact-head text-primary mb-10">Contact Us</p>
          <div className="pb-20">
            <div className="relative">
              <div className="contact-card ">
                <p className="contact-text">
                  We are always happy to form more partnerships and connect with
                  like minds for the advancement of humanity as a whole. We’d be
                  pleased to partner with you. Kindly contact us through any of
                  the means below.
                </p>
              </div>
              <img src={Logo} alt="Halthgo Logo" className="contact-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <section className="lg:p-20 lg:pt-40 lg:pb-0 p-10 pt-20 lg-screen">
          <div className="lg:grid grid-cols-7">
            <div className="col-span-4 lg:pl-20">
              <p className="waitlist-head text-primary ">Let's Connect</p>
              <div className="col-span-4">
                <p className="text-blackk  connect-text pt-10 ">
                  Connect with HealthGO on various social media platforms via
                  the links below...or send a mail.
                </p>
              </div>
              <div className="pt-10 icons">
                <a href="https://www.linkedin.com/company/healthgohq/">
                  <img src={Icon6} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/healthgohq/">
                  {" "}
                  <img src={Icon5} alt="instagram" />
                </a>
                <a href="https://twitter.com/healthgoHQ">
                  <img src={Icon3} alt="twitter" />
                </a>
                {/* <a href="https://"> <img src={Icon1} alt="facebook" /></a> */}
                <a href="https://t.me/HealthgoHQ">
                  <img src={Icon2} alt="telegram" />
                </a>
                <a href="https://medium.com/@HealthGO_HQ">
                  <img src={Icon4} alt="medium" />
                </a>
              </div>
              <button className="mt-8 bg-secondary border border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-6 rounded inline-flex items-center">
                <a
                  href="mailto:hello@healthgotechnologies.com"
                  className="inline-flex items-center"
                >
                  <span className="mr-2">Send a mail</span>{" "}
                  <HiArrowNarrowRight />
                </a>
              </button>
            </div>
            <div className="col-span-3 pt-20 lg:pt-0">
              <img src={Img8} alt="Contact" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
