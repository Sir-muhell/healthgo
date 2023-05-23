import React from "react";
import Icon1 from "../Assets/icon1.svg";
import Icon2 from "../Assets/icon2.svg";
import Icon3 from "../Assets/icon3.svg";
import Icon4 from "../Assets/icon4.svg";
import Icon5 from "../Assets/icon5.svg";
import Icon6 from "../Assets/icon6.svg";
import Img8 from "../Assets/image9.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Connect = () => {
  return (
    <section className="lg:p-20 lg:pt-40 lg:pb-0 p-10 pt-20">
      <div className="lg:grid grid-cols-7">
        <div className="col-span-3">
          <img
            src={Img8}
            alt=""
            className="animate__animated animate__infinite	infinite animate__swing"
          />
        </div>
        <div className="col-span-4 lg:pl-20">
          <p className="waitlist-head text-primary ">Let's Connect</p>
          <div className="col-span-4">
            <p className="text-blackk  connect-text pt-10 ">
              Connect with HealthGO on various social media platforms via the
              links below...or send a mail.
            </p>
          </div>
          <div className="pt-10 icons animate__animated animate__shakeX animate__delay-5s ">
            <a href="https://www.linkedin.com/company/healthgohq/">
              <img src={Icon6} alt="" />
            </a>
            <a href="https://www.instagram.com/healthgohq/">
              <img src={Icon5} alt="" />
            </a>
            <a href="https://twitter.com/healthgoHQ">
              <img src={Icon3} alt="" />
            </a>
            {/* <a href="https://"> <img src={Icon1} alt="" /></a> */}
            <a href="https://t.me/HealthgoHQ">
              <img src={Icon2} alt="" />
            </a>
            <a href="https://medium.com/@HealthGO_HQ">
              <img src={Icon4} alt="" />
            </a>
          </div>
          <button class="mt-8 bg-secondary border border-primary hover:bg-primary hover:text-white text-primary font-bold py-3 px-6 rounded  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <a href="mailto:hello@healthgotechnologies.com" className="inline-flex items-center">
              <span className="mr-2">Send a mail</span> <HiArrowNarrowRight />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
