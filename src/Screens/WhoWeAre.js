import React from "react";
import Connect from "../Components/Connect";
import Mission2 from "../Components/Mission2";
import Img1 from "../Assets/image13.svg";
import Logo from "../Assets/image5.svg";

const WhoWeAre = () => {
  return (
    <div className="container-box bg-secondary overflow-hidden">
      <section className="lg:p-20 p-10 lg-screen">
        <p className="heading text-primary">Who We Are...</p>
        <div className="lg:grid grid-cols-7 lg:mt-20 mt-10">
          <div className="col-span-4 lg:pr-20  wwa">
            <p className=" text-blackk wwa-sub">
              HealthGo is founded on the belief that there can certainly be a
              moderate, affordable, and easily accessible healthcare system for
              all.
            </p>
            <div className="relative">
              <img src={Logo} alt="Healthgo Logo" className="over-up" />
              <img src={Logo} alt="Healthgo Logo" className="over-down" />
              <div className="wwa-text text-blackk mt-10">
                <p>
                  With this in mind, we have put more work into the research
                  process to get results in achieving this goal.
                </p>
                <p>
                  In this, we discovered that integrating Blockchain technology
                  into the healthcare industry would bring great change and
                  adaptive adherence solutions to reduce fatal illness and also
                  reduce the cost of quality healthcare solutions, which is a
                  necessity of life, and offer job opportunities to health
                  practitioners and reduce the unemployment rate.
                </p>
                <p>
                  We also act as a third-party educational platform that
                  educates the public about health care and shares the latest
                  updates on health care and Blockchain technology around the
                  world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pt-0 pt-20">
            <img src={Img1} alt="WWA design" />
          </div>
        </div>
      </section>
      <Mission2 />
      <Connect />
    </div>
  );
};

export default WhoWeAre;
