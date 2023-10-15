import React, { useState } from "react";
import Img from "../Assets/image1.svg";
import Img2 from "../Assets/image2.svg";
import Img3 from "../Assets/image4.svg";
import Img4 from "../Assets/image5.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import Connect from "../Components/Connect";
import Mission2 from "../Components/Mission2";
import { FadeIn } from "react-slide-fade-in";
import Partner1 from "../Assets/partner1.png";
import Partner2 from "../Assets/partner2.png";
import Partner3 from "../Assets/partner3.png";
import Partner4 from "../Assets/partner4.png";
import Partner5 from "../Assets/partner5.png";
import Partner0 from "../Assets/partner0.png";
import Partner6 from "../Assets/partner6.png";
import Img7 from "../Assets/image8.svg";
import { Helmet } from "react-helmet";
import axios from "axios";

import "animate.css";
const images = [
  Partner0,
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
];

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email);

    const data = {
      Name: name,
      Email: email,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/ea3c2e87-54d4-4490-bae7-1faa1cb3eda5",
        data
      )
      .then((response) => {
        // console.log(response);
        setName("");
        setEmail("");
        setSuccess("You have successfully joined the waitlist");
      })
      .catch((error) => {
        console.error("Errorssss:", error);
        // Handle the error
      });
  };

  return (
    <div className="container-box bg-secondary">
      {/* <Helmet>
        <script
          src="https://getlaunchlist.com/js/widget-diy.js"
          type="text/javascript"
          defer
        />
      </Helmet> */}
      <section className="lg:p-20 p-10 lg:grid grid-cols-7 lg-screen ">
        <div className="col-span-4 lg:mr-20 ">
          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={0}
          >
            <p className="text-primary home-head">
              A Global Portal for <br />
              General Healthcare Assistance
            </p>
          </FadeIn>
          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={200}
          >
            <p className="sub-head mt-10 ">
              The HealthGO Mobile App is available on Google Playstore and it’s
              coming soon to Apple App Store.
            </p>
          </FadeIn>
          <FadeIn
            from="left"
            positionOffset={400}
            q
            triggerOffset={200}
            delayInMilliseconds={300}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.healthgo"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <span className="mr-2">Download Now</span>
                <HiArrowNarrowRight />
              </button>
            </a>
          </FadeIn>
        </div>
        <div className="col-span-3 lg:pt-0 pt-10">
          <img src={Img} alt="Healthgo" className="animate__animated" />
        </div>
      </section>

      <div className="waitlist-section pt-36 lg:pt-72"></div>
      <section className="pb-10 bg-primary">
        <div className="lg:p-20  p-10 lg:grid grid-cols-7 lg-screen">
          <div className="col-span-4 mr-10">
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <p className="waitlist-head text-white">
                Iphone User? <br /> Join the Waitlist
              </p>
            </FadeIn>
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={200}
            >
              <p className="text-white pt-10">
                If you are an IOS user, Kindly Join the waitlist to get updated
                right in your inbox when the HealthGO mobile app is availble on
                Apple Store.
              </p>
            </FadeIn>
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={300}
            >
              <form className="w-full max-w-lg mt-10" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="label text-white  mb-10"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      placeholder="e.g Connell"
                      name="name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="tracking-wide text-white mb-20">
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none "
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      placeholder="Enter Your Email Address Here"
                      name="email"
                    />
                  </div>
                </div>
                <p className="text-white">{success}</p>
                <button
                  type="submit"
                  className="mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                >
                  <span className="mr-2">Join the waitlist</span>
                  <HiArrowNarrowRight />
                </button>
              </form>
            </FadeIn>
          </div>
          <div className="col-span-3 pt-20 lg:pt-0 animate__animated animate__bounce animate__infinite	infinite">
            <img src={Img2} alt="Waitlist" />
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-36 lg:pt-72 "></div>

      <section className="about-section lg-screen">
        <div className="lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7">
          <div className="col-span-3 relative">
            <img src={Img4} className="on-top hover:animate-spin" alt="Logo" />
            <img src={Img3} className="carry" alt="Logo" />
          </div>
          <div className="col-span-4 lg:pt-0 pt-20 lg:block hidden">
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <p className="text-primary about-head animate__animated animate__zoomInDown">
                What we do
              </p>
              <p className="text-primary about-sub mt-5 mb-5 animate__animated animate__flipInX">
                HealthGo is Africa’s gateway to quality, affordable and faster
                healthcare assistance leveraging blockchain and AI.
              </p>
            </FadeIn>
            <div className="offer text-blackk mt-10">
              <FadeIn
                from="right"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={200}
              >
                <p>At HealthGO, we offer: </p>
                <div className="list">
                  <p>1.</p>
                  <p className="ml-3">
                    Teletherapy and Consultations with Doctors and other health
                    personels.
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                from="right"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={400}
              >
                <div className="list">
                  <p>2.</p>
                  <p className="ml-3">
                    Online purchase of drugs, kits and other items from
                    Pharmacies via the HealthGO mobile App.
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                from="right"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
              >
                <div className="list">
                  <p>3.</p>
                  <p className="ml-3">
                    Health education in a dynamic and better way.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="col-span-4 lg:pt-0 pt-20  lg:hidden">
            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={0}
            >
              <p className="text-primary about-head animate__animated animate__zoomInDown">
                What we do
              </p>
              <p className="text-primary about-sub mt-5 mb-5 animate__animated animate__flipInX">
                HealthGo is Africa’s gateway to quality, affordable and faster
                healthcare assistance leveraging blockchain and AI.
              </p>
            </FadeIn>
            <div className="offer text-blackk mt-10">
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={200}
              >
                <p>At HealthGO, we offer: </p>
                <div className="list">
                  <p>1.</p>
                  <p className="ml-3">
                    Teletherapy and Consultations with Doctors and other health
                    personels.
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={400}
              >
                <div className="list">
                  <p>2.</p>
                  <p className="ml-3">
                    Online purchase of drugs, kits and other items from
                    Pharmacies via the HealthGO mobile App.
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
              >
                <div className="list">
                  <p>3.</p>
                  <p className="ml-3">
                    Health education in a dynamic and better way.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <Mission2 />
      <div className="lg:p-20 lg:pt-20 p-10">
        <p className="text-primary text-left about-head animate__animated animate__zoomInDown lg-screen">
          Our Partners
        </p>
        <div style={{ overflowX: "hidden" }}>
          <div className="mt-10 ticker">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                whiteSpace: "nowrap",
              }}
            >
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  className="ticker-item"
                  alt={`Partner ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="waitlist-section pt-36 lg:pt-72"></div>
      <section className="bg-primary">
        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={0}
        >
          <div className="lg:p-20 lg:pb-0 p-10 lg:grid grid-cols-7 lg-screen">
            <div className="col-span-4 mr-10">
              <p className="waitlist-head text-white">Partner with Us...</p>
              <div className="col-span-4">
                <p className="text-white about-sub mt-10 ">
                  HealthGo is Africa’s gateway to quality, affordable and faster
                  healthcare assistance leveraging blockchain and AI.
                </p>
              </div>
              <a href="mailto:hello@healthgotechnologies.com">
                <button className="mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                  <span className="mr-2"> Join Us</span> <HiArrowNarrowRight />
                </button>
              </a>
            </div>
            <div className="col-span-3 lg:pt-0 pt-20 animate__animated animate__wobble animate__infinite infinite">
              <img src={Img7} alt="Join us" />
            </div>
          </div>
        </FadeIn>
      </section>
      <div className="waitlist-section-down pt-36 lg:pt-72 "></div>
      <Connect />
    </div>
  );
};

export default Home;
