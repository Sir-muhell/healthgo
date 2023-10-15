import React from "react";
import Connect from "../Components/Connect";
import Img1 from "../Assets/image21.svg";
import Img2 from "../Assets/image22.svg";
import Img3 from "../Assets/image23.svg";
import Img4 from "../Assets/image24.svg";
import Img5 from "../Assets/image25.svg";
import Logo from "../Assets/image15.svg";
import Logos from "../Assets/image5.svg";

const WhyWeDoThis = () => {
  return (
    <div className="container-box bg-secondary overflow-hidden">
      <section className="lg:p-20 p-10 lg-screen">
        <p className="heading text-primary">Why we do this...</p>
        <div className="lg:grid grid-cols-7 mt-10 lg:mt-20">
          <div className="col-span-4 lg:pr-20 wwa">
            <p className=" text-blackk wwa-sub">
              When we act together to affect humanity positively, change
              happens.
            </p>
            <div className="relative">
              <img src={Logos} alt="Halthgo Logo" className="over-up" />
              <img src={Logos} alt="healthgo Logo" className="over-down" />
              <div className="wwa-text text-blackk mt-10">
                <p>
                  Looking at the world we live in today, our challenges are so
                  intertwined that we can only solve them together, with smart
                  responses across countries, cultures, and peoples.
                </p>
                <p>
                  As our world grows more connected and threats become more
                  complex, the success of having interoperable healthcare
                  services ready to be used by all is becoming more essential to
                  humanity. That is why the existence of HealthGo technologies
                  is essential for humanity.
                </p>
                <p>
                  HealthGo Technologies is committed to delivering on the
                  promise of providing accessible and interoperable healthcare
                  solutions. We are proud to have it in our name. We are
                  determined to see it succeed.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pt-0 pt-20">
            <img src={Img1} alt="Section Design" />
          </div>
        </div>
      </section>
      <div className="waitlist-section pt-36 lg:pt-72"></div>
      <section className="pb-10 bg-primary lg:p-20 p-10 lg:pt-0">
        <div className="lg-screen">
          <p className="product-head text-white">Our Focus</p>
          <p className="product-text text-white pt-10">
            Among other Sustainable Development Goals that our product covers in
            one way or the other, here are the main SDGs that we focus on
            achieving
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:pt-48">
            <div className="focus-card relative">
              <img src={Img2} alt="SDG 03" className="focus-card-img" />
              <p className=" focus-card-head text-primary">SDG 03</p>
              <p className="pt-10 text-blackk card-text">
                Good Health and WellBeing
              </p>
              <img src={Logo} alt="Healthgo Logo" className="card-logo" />
            </div>
            <div className="focus-card relative">
              <img src={Img3} alt="SDG 17" className="focus-card-img" />
              <p className=" focus-card-head text-primary">SDG 17</p>
              <p className="pt-10 text-blackk card-text">
                Partnership for The goals
              </p>
              <img src={Logo} alt="Healthgo Logo" className="card-logo" />
            </div>
            <div className="focus-card relative">
              <img src={Img4} alt="SDG 04" className="focus-card-img" />
              <p className=" focus-card-head text-primary">SDG 04</p>
              <p className="pt-10 text-blackk card-text">
                Quality Education (Health Education)
              </p>
              <img src={Logo} alt="Healthgo Logo" className="card-logo" />
            </div>
            <div className="focus-card relative">
              <img src={Img5} alt="SDG 08" className="focus-card-img" />
              <p className=" focus-card-head text-primary">SDG 08</p>
              <p className="pt-10 text-blackk card-text">
                Decent work and Economic Growth
              </p>
              <img src={Logo} alt="Healthgo Logo" className="card-logo" />
            </div>
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-40 lg:pt-60 "></div>
      <Connect />
    </div>
  );
};

export default WhyWeDoThis;
