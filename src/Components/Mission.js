import React from "react";
import Img5 from "../Assets/image6.svg";
import Img6 from "../Assets/image7.svg";

const Mission = () => {
  return (
    <div className="lg:p-20 lg:pt-20 p-10 ">
      <p className="h-about-header lg:text-primary text-primary text-center">
        About Us
      </p>
      <div className="mt-10 grid grid-cols-7 mission">
        <div className="col-span-2 ">
          <img src={Img5} className="mission-img" alt="" />
        </div>
        <div className="col-span-5 ">
          <p className="text-blackk about-text">
            We are committed to building interoperable and accessible healthcare
            solutions and rewarding users for being health-compliant.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-7 mission lg:mt-40 mt-20">
        <div className="col-span-5 ">
          <p className="text-blackk about-text">
            At HealthGO, Our vision is to ensure that we grow our users’
            finances while keeping them healthy.
          </p>
        </div>
        <div className="col-span-2">
          <img src={Img6} className="img5 mission-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
