import React from "react";
import Img1 from "../Assets/image14.svg";
import Logo from "../Assets/image15.svg";
import Img2 from "../Assets/image16.svg";
import Img3 from "../Assets/image17.svg";
import Img4 from "../Assets/image18.svg";
import Img5 from "../Assets/image19.svg";
import Img6 from "../Assets/image20.svg";
import Connect from "../Components/Connect";

import Logos from "../Assets/image5.svg";

const WhatWeDo = () => {
  return (
    <div className="container-box bg-secondary overflow-hidden">
      <section className="lg:p-20 p-10">
        <p className="heading text-primary">What We Do...</p>
        <div className="lg:grid md:grid grid-cols-7 lg:mt-20 mt-10">
          <div className="col-span-4 lg:pr-20 wwa">
            <p className=" text-blackk wwa-sub">
              We advance human dignity and protect the world through our work on
              transformational issues critical to humanity's shared future.
            </p>
            <div className="relative">
              <img src={Logos} alt="" className="over-up-alt" />
              <img src={Logos} alt="" className="over-down-alt" />
              <div className="wwa-text text-blackk mt-10">
                <p>
                  The world's health is a very critical part of humanity's
                  future and this is one of the great fears that International
                  bodies work daily to curb, fighting every epidemic or pandemic
                  in the world.
                </p>
                <p className="mt-5">
                  As a strategic startup in the healthcare industry leveraging
                  on blockchain technology, we bring together fresh thinking and
                  diverse voices around innovative ideas to drive progress and
                  tackle problems.
                </p>
                <p className="mt-5">
                  We build communities of support and nurture initiatives to
                  advance the dignity and well-being of people's health and
                  financial status by providing affordable and comfortable
                  healthcare systems, ensuring accurate data-keeping to stop
                  repeatitive payments for the diagnosis done before, and
                  enabling quick peer-to-peer cryptographic transactions on our
                  decentralized exchange.
                </p>
              </div>
              <div className="wwa-text-alt text-blackk mt-10">
                <p>
                  We work behind the scenes as a third-party, shaping
                  negotiations and connecting experts to clients in need of
                  their services. Other times, we drive public awareness and
                  involvement through communications, campaigns, and events.
                </p>
                <p className="mt-3">
                  We work to build collective action to drive great awareness
                  into effective healthcare systems and Blockchain adoption in
                  Africa. Blockchain- the only place where everyone on earth can
                  have a voice.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pt-0 pt-20">
            <img src={Img1} alt="" />
          </div>
        </div>
      </section>
      <div className="waitlist-section pt-20 lg:pt-60"></div>
      <section className="pb-10 bg-primary lg:p-20 p-10 lg:pt-0">
        <p className="product-head text-white">Our Products</p>
        <p className="product-text text-white pt-10">
          More than telemedicine and teletherapy, HealthGo is a personalized
          healthcare management service provider leveraging blockchain
          technology. We offer affordable access to medical specialists and
          general health care assistance.
        </p>
        <div className="lg:grid grid-cols-3 gap-10 lg:pt-48">
          <div className="product-card relative">
            <img src={Img2} alt="" className="card-img" />
            <p className="pt-20 card-head text-primary">
              In-app healthcare support
            </p>
            <p className="pt-10 text-blackk card-text">
              We coordinate with health workers of all kinds, caregivers to give
              users the best healthcare adherence plan to improve health
              outcomes.
            </p>
            <img src={Logo} alt="" className="card-logo" />
          </div>
          <div className="product-card relative">
            <img src={Img3} alt="" className="card-img" />
            <p className="pt-20 card-head text-primary">Virtual Follow Up</p>
            <p className="pt-10 text-blackk card-text">
              We have built a follow-up mechanism that ensures that we're
              tracking adherence, complications, and possible interactions in
              real-time through a dedicated team of care specialists performing
              virtual checks and in-house checks.
            </p>
            <img src={Logo} alt="" className="card-logo" />
          </div>
          <div className="product-card relative">
            <img src={Img4} alt="" className="card-img" />
            <p className="pt-20 card-head text-primary">
              Medication and Diagnosis Delivery
            </p>
            <p className="pt-10 text-blackk card-text">
              To save customers time, money, and effort, we provide doorstep
              delivery of medical care and test results, in-house testing to
              individual users, and virtual delivery of test results.
            </p>
            <img src={Logo} alt="" className="card-logo" />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 lg:pt-48">
          <div className="product-card relative">
            <img src={Img5} alt="" className="card-img" />
            <p className="pt-20 card-head text-primary">
              In-app healthcare support
            </p>
            <p className="pt-10 text-blackk card-text">
              We coordinate with health workers of all kinds, caregivers to give
              users the best healthcare adherence plan to improve health
              outcomes.
            </p>
            <img src={Logo} alt="" className="card-logo" />
          </div>
          <div className="product-card relative">
            <img src={Img6} alt="" className="card-img" />
            <p className="pt-20 card-head text-primary">Virtual Follow Up</p>
            <p className="pt-10 text-blackk card-text">
              We have built a follow-up mechanism that ensures that we're
              tracking adherence, complications, and possible interactions in
              real-time through a dedicated team of care specialists performing
              virtual checks and in-house checks.
            </p>
            <img src={Logo} alt="" className="card-logo" />
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-40 lg:pt-60 "></div>
      <Connect />
    </div>
  );
};

export default WhatWeDo;
