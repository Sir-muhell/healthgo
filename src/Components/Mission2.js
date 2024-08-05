import React from "react";
import Img5 from "../Assets/image6.svg";
import Img6 from "../Assets/image7.svg";

const Mission2 = () => {
  return (
    <>
      <div className="waitlist-section pt-32 lg:pt-72"></div>
      <section className="pb-10 bg-primary">
        <div className="lg:p-20 lg:pb-40 p-10 lg-screen">
          <div className="grid grid-cols-7 mission-about">
            <div className="col-span-2 ">
              <img src={Img5} className="mission-img" alt="Mission" />
            </div>
            <div className="col-span-5 ">
              <p className="text-white about-text">
                We are committed to building interoperable and accessible
                healthcare solutions and rewarding users for being
                health-compliant.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-7 mission-about lg:mt-40 mt-20">
            <div className="col-span-5 ">
              <p className="text-white about-text">
                At, HealthGo our vision is to build economical healthcare
                gateway, ensuring easy access for low-income earners.
              </p>
            </div>
            <div className="col-span-2">
              <img src={Img6} className="mission-img" alt="Vision" />
            </div>
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-32 lg:pt-72 "></div>
    </>
  );
};

export default Mission2;
