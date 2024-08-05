import React, { useState } from "react";
import Img from "../Assets/image1.svg";
import Img2 from "../Assets/image2.svg";
import Img3 from "../Assets/image4.svg";
import Img4 from "../Assets/image5.svg";
// import Img4 from "../Assets/logo3.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import Connect from "../Components/Connect";
import Mission2 from "../Components/Mission2";
import { FadeIn } from "react-slide-fade-in";
import Partner2 from "../Assets/partner3.png";
import Partner3 from "../Assets/partner6.png";
import Partner4 from "../Assets/partner7.svg";
import Partner5 from "../Assets/partner2.svg";
import Partner6 from "../Assets/partner8.png";
import Partner7 from "../Assets/partner9.png";
import Partner8 from "../Assets/partner10.png";
import Heart from "../Assets/heart.svg";
import Deposit from "../Assets/deposit.svg";
import Package from "../Assets/package.svg";
import Verified from "../Assets/verified.svg";
import Create from "../Assets/create.svg";
import Vision from "../Assets/vision.svg";
import Mission from "../Assets/mission.svg";
import Img7 from "../Assets/image8.svg";
import { Helmet } from "react-helmet";
import axios from "axios";

import "animate.css";
const images = [
  Partner8,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
];

const Home = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  function Submit(e) {
    e.preventDefault();
    const formEle = e.target;
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxUwgmdxriQS3IDmibFnciGCe6Ua0V8wtRvbsyvmixPGDcHV0bY56o_fXzAnRjVzSsoAQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })

      .catch((error) => {
        console.log(error);
      });

    formEle.reset();

    setSuccess("You have successfully joined our waitlist!");
  }

  return (
    <div className="container-box" style={{ backgroundColor: "#F5FFF8" }}>
      {/* <Helmet>
        <script
          src="https://getlaunchlist.com/js/widget-diy.js"
          type="text/javascript"
          defer
        />
      </Helmet> */}
      <section className=" lg-screen">
        <div className=" lg:p-20 p-10">
          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={0}
          >
            <div className="text-center  justify-center total">
              <p
                className="text-black lg:text-5xl lead"
                style={{ lineHeight: "60px" }}
              >
                Effortlessly-Affordable{" "}
                {/* <hr className="border-t-2 w-10 border-gray-300 mt-0.1 mb-0.1" /> */}
                <span className="health-text">Healthcare</span>{" "}
                {/* <hr className="border-t-2 w-10 border-gray-300 mt-0.1 mb-0.1" /> */}
                made for Everyone in Africa.
              </p>
              <p className="text-2xl mt-5 font-extralight lead-sub text-blackk">
                Get quality healthcare insurance at a very affordable price and
                pay gradually at your convenient time
              </p>
            </div>
          </FadeIn>

          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={300}
          >
            <div className="flex justify-center">
              <button className="lg:mt-10 mt-8 text-sm bg-primary text-white  font-light py-3 px-6 rounded  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <a
                  href="https://insurance.healthgotechnologies.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center"
                >
                  <span className="mr-2">Get Started</span>
                  <HiArrowNarrowRight />
                </a>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="bg-white lg:p-20 p-10">
        <div className="">
          <div className="flex justify-center text-center">
            <p className="new-head"> Here's how it works </p>
          </div>

          <p className="block mt-5">
            Just a few steps away from getting quality healthcare without
            spending more than necessary.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 how-sec pt-10">
          <div className="home-card lg:grid grid-cols-10">
            <img src={Create} className="col-span-3" />
            <div className="ml-3 col-span-7">
              <p className="home-card-head">Create your account</p>
              <p className="home-card-text mt-3">
                Fill in your basic details and create your account.
              </p>
            </div>
          </div>
          <div className="home-card  lg:grid grid-cols-10">
            <img src={Verified} className="col-span-3" />
            <div className="ml-3 col-span-7">
              <p className="home-card-head">Get Verified</p>
              <p className="home-card-text mt-3">
                Complete and verify your bio-data and other details.
              </p>
            </div>
          </div>
          <div className="home-card  lg:grid grid-cols-10">
            <img src={Package} className="col-span-3" />
            <div className="ml-3 col-span-7">
              <p className="home-card-head">Choose a package</p>
              <p className="home-card-text mt-3">
                Choose a package that meets all your healthcare needs.
              </p>
            </div>
          </div>
          <div className="home-card  lg:grid grid-cols-10">
            <img src={Deposit} className="col-span-3" />
            <div className="ml-3 col-span-7">
              <p className="home-card-head">Pay A Deposit</p>
              <p className="home-card-text mt-3">
                Pay a deposit as low as 25% of your chosen package.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className=" home-card-xl lg:grid grid-cols-10">
            <img src={Heart} className="col-span-3 m-auto" />
            <div className="ml-3 col-span-7 lg:text-left m-auto">
              <p className="home-card-head-xl">
                Start Enjoying Quality Healthcare
              </p>
              <p className="home-card-text-xl mt-3">
                Enjoy all the health benefits of your package right from Day 1.
              </p>
            </div>
          </div>
        </div>
        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={300}
        >
          <a
            href="https://insurance.healthgotechnologies.com"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center -mt-5"
          >
            <button className="mt-10 mb-20 bg-primary text-white text-sm  font-light py-3 p-20 lg:px-40 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <span className="mr-2">Get Started</span>
              <HiArrowNarrowRight />
            </button>
          </a>
        </FadeIn>
      </section>

      {/* <section className="pb-10 bg-primary">
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
              <form
                className="w-full max-w-lg mt-10 form"
                onSubmit={(e) => Submit(e)}
                method="post"
              >
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
                      type="text"
                      placeholder="e.g Connell"
                      name="Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="tracking-wide text-white mb-20">
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-primary border py-3 px-4 leading-tight focus:outline-none "
                      type="text"
                      placeholder="Enter Your Email Address Here"
                      name="Email"
                    />
                  </div>
                </div>
                <p className="text-white ">{success}</p>
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
      </section> */}

      <section className="about-section bg-primary">
        <div className="lg-screen">
          <div className="lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7">
            <div className="col-span-3 ">
              <img src={Img} alt="Logo" />
            </div>
            <div className="col-span-4 lg:pt-0 pt-20 ">
              <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={0}
              >
                <p className="text-white about-sub mt-5 mb-5 animate__animated animate__flipInX">
                  What we do
                </p>
                <p className="text-white offer mt-5 mb-5 animate__animated animate__flipInX">
                  HealthGo is Africa’s gateway to quality, affordable and faster
                  healthcare assistance leveraging blockchain and AI.
                </p>
              </FadeIn>
              <div className="offer text-white mt-10">
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
                      Affordable HealthCare Insurance to help you live
                      healthier.
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
                      A solution to help you pay for your healthcare needs
                      gradually.
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
                <FadeIn
                  from="right"
                  positionOffset={400}
                  triggerOffset={200}
                  delayInMilliseconds={800}
                >
                  <div className="list">
                    <p>4.</p>
                    <p className="ml-3">
                      Online purchase of drugs, kits and other items from
                      Pharmacies via the HealthGO mobile App.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:p-20 lg:pt-20 p-10 ">
          <p className="h-head">About Us</p>
          <p className="h-sub-head mt-5 mb-10 ">
            Here’s what drives the core of our products and services and what we
            believe in
          </p>
          <div className="lg:grid grid-cols-2">
            <div className="home-about-card grid grid-cols-10 ">
              <img
                src={Mission}
                alt="Mission Image"
                className="col-span-4 m-auto"
              />
              <div className="col-span-6 ml-3 m-auto">
                <p className="home-about-head">Our Mission</p>
                <p className="home-about-text mt-5">
                  We are committed to building interoperable and accessible
                  healthcare solutions and rewarding users for being
                  health-compliant.
                </p>
              </div>
            </div>
            <div className="home-about-card grid grid-cols-10 mt-10">
              <img
                src={Vision}
                alt="Vision Image"
                className="col-span-4 m-auto"
              />
              <div className="col-span-6 ml-3 m-auto">
                <p className="home-about-head">Our Vision</p>
                <p className="home-about-text mt-5">
                  At, HealthGo our vision is to build economical healthcare
                  gateway, ensuring easy access for low-income earners.
                </p>
                <p className="mt-6"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:p-20 lg:pt-20 p-10">
        <p className="text-primary text-left about-head animate__animated animate__zoomInDown lg-screen">
          Our Partners
        </p>
        <div style={{ overflowX: "hidden" }}>
          <div className="lg:mt-10 mt-5 ticker">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
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

      {/* <div className="waitlist-section pt-36 lg:pt-72"></div>
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
      <div className="waitlist-section-down pt-36 lg:pt-72 "></div> */}
      <Connect />
    </div>
  );
};

export default Home;
