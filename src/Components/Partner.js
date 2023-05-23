import React from "react";
import Img7 from "../Assets/image8.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FadeIn } from "react-slide-fade-in";

const Partner = ({ Question, Offer, Number, List }) => {
  return (
    <>
      <div className="waitlist-section pt-20 lg:pt-60"></div>
      <section className="pb-10 bg-primary">
        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={0}
        >
          <div className="lg:p-20 p-10 lg:grid grid-cols-7">
            <div className="col-span-4 mr-10">
              <p className="waitlist-head text-white">{Question}</p>
              <p className="waitlist-head text-white">Partner with Us...</p>
              <div className="col-span-4">
                <p className="text-white about-sub mt-10 ">
                  HealthGO Technologies is Africa’s gateway to quality,
                  affordable and faster Healthcare.
                </p>
                <div className="offer text-white mt-10">
                  <p>{Offer} </p>
                  <div className="list">
                    <p>{Number}</p>
                    <p className="ml-3">{List}</p>
                  </div>
                </div>
              </div>
              <button class="mt-8 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <span className="mr-2"> Learn More</span> <HiArrowNarrowRight />
              </button>
            </div>
            <div className="col-span-3 lg:pt-0 pt-20 animate__animated animate__wobble animate__infinite infinite">
              <img src={Img7} alt="" />
            </div>
          </div>
        </FadeIn>
      </section>
      <div className="waitlist-section-down pt-20 lg:pt-48 "></div>
    </>
  );
};

export default Partner;
