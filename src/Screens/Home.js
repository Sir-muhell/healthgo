import React from "react";
import Img from "../Assets/image1.svg";
import Img2 from "../Assets/image2.svg";
import Img3 from "../Assets/image4.svg";
import Img4 from "../Assets/image5.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import Connect from "../Components/Connect";
import Partner from "../Components/Partner";
import Mission2 from "../Components/Mission2";
import { FadeIn } from "react-slide-fade-in";
import "animate.css";
import Ticker from "react-ticker";
import Partner1 from "../Assets/partner1.png";
import Partner2 from "../Assets/partner2.jpg";
import Partner3 from "../Assets/partner3.png";
import Partner4 from "../Assets/partner4.jpg";

const Home = () => {
  return (
    <div className="container-box bg-secondary">
      <section className="lg:p-20 p-10 lg:grid grid-cols-7 ">
        <div className="col-span-4 lg:mr-20 ">
          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={0}
          >
            <p className="text-primary home-head">
              A Portal for <br />
              Global Healthcare
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
            triggerOffset={200}
            delayInMilliseconds={300}
          >
            <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <span className="mr-2">Download Now</span> <HiArrowNarrowRight />
            </button>
          </FadeIn>
        </div>
        <div className="col-span-3 lg:pt-0 pt-10">
          <img
            src={Img}
            alt=""
            className="animate__animated animate__flip animate__slow animate__delay-1s"
          />
        </div>
      </section>

      <div className="waitlist-section pt-20 lg:pt-60"></div>
      <section className="pb-10 bg-primary">
        <div className="lg:p-20  p-10 lg:grid grid-cols-7">
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
              <form className="w-full max-w-lg mt-10">
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
                    />
                  </div>
                </div>
                <button className="mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                  <span className="mr-2">Join the waitlist</span>
                  <HiArrowNarrowRight />
                </button>
              </form>
            </FadeIn>
          </div>
          <div className="col-span-3 pt-20 lg:pt-0 animate__animated animate__bounce animate__infinite	infinite">
            <img src={Img2} alt="" />
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-20 lg:pt-60 "></div>

      <section className="about-section">
        <div className="lg:p-20 lg:pt-20 p-10 lg:grid grid-cols-7">
          <div className="col-span-3 relative">
            <img src={Img4} className="on-top animate-spin" alt="" />
            <img src={Img3} className="carry" alt="" />
          </div>
          <div className="col-span-4 lg:pt-0 pt-20">
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
                HealthGO Technologies is Africa’s gateway to quality, affordable
                and faster Healthcare.
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
        </div>
        <Mission2 />
      </section>
      <div className="lg:p-20 lg:pt-20 p-10">
        <p className="text-primary text-left about-head animate__animated animate__zoomInDown">
          Our Partners
        </p>
        <div className="mt-10">
          <Ticker>
            {({ index }) => (
              <>
                <h1>This is the Headline of element #{index}!</h1>
                <img src={Partner1} alt="" />
              </>
            )}
          </Ticker>
        </div>
      </div>
      <Partner
        Offer="At HealthGO, we offer:"
        Number="1."
        List="Teletherapy and Consultations with Doctors and other health personels."
      />
      <Connect />
    </div>
  );
};

export default Home;
