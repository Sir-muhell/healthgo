import React from "react";
import Connect from "../Components/Connect";
import Img1 from "../Assets/image28.svg";
import Img2 from "../Assets/image27.svg";
import Img3 from "../Assets/image21.svg";
import Logo from "../Assets/image15.svg";
import Logos from "../Assets/image5.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Partner = () => {
  return (
    <div className="container-box bg-secondary overflow-hidden">
      <section className="lg:p-20 p-10 lg-screen">
        <div className="lg:grid grid-cols-7 mt-10 lg:mt-20">
          <div className="col-span-4 lg:pr-20 wwa">
            <p className=" text-primary partner">
              Become an Healthgo partner and get benefits made specifically for
              you.
            </p>
            <div className="relative">
              <img src={Logos} alt="Halthgo Logo" className="over-up" />
              <img src={Logos} alt="healthgo Logo" className="over-down" />
              <div className="wwa-text text-blackk mt-10">
                <p>
                  Whether you are a healthcare personnel or a non-healthcare
                  practitioner, partnering with HealthGO can help you accelerate
                  health growth and scale across financially. You can also earn
                  commissions by referring HealthGo across your network.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:pt-0 pt-20">
            <img src={Img3} alt="Section Design" />
          </div>
        </div>
      </section>
      <div className="waitlist-section pt-36 lg:pt-72"></div>
      <section className="pb-10 bg-primary lg:p-20 p-10 lg:pt-0 lg:pb-0 md:pb-0">
        <div className="lg-screen grid lg:grid-cols-11 md:grid-cols-10">
          <img src={Img2} alt="Section Design" className="col-span-5" />
          <div className="col-span-6">
            <p className="partner text-white">
              Begin your journey to becoming an Healthgo Referral partner.
            </p>
            <div className="partner-line mt-10">
              <p className="line-text text-center">
                With Healthgo you can be the best referral partner!
              </p>
            </div>
            <p className="sub-head mt-14 text-white">
              A Healthgo Referral Partner is a business, individual or
              enterprise corporation that earn commissions for each legitimate
              referral that referred to Healthgo. Referrals are one of the best
              ways to make money with us at HealthGo.
            </p>
            <a
              href="https://forms.gle/a7ZVjH6Gt2jG4YJaA"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-8 bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <span className="mr-2">Become a Partner</span>
                <HiArrowNarrowRight />
              </button>
            </a>

            <a href="mailto:partners@healthgotechnologies.com">
              <p className="mt-3 sub-head text-white">
                Mail: partners@healthgotechnologies.com
              </p>
            </a>
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-40 lg:pt-60 "></div>
      <section className="lg:p-20 p-10 lg-screen">
        <div className="grid lg:grid-cols-2 md:grid-cols-2">
          <div>
            <p className="text-primary partner">
              Grow your revenue as a Referral Partner
            </p>
            <div className="partner-text mt-10">
              <p>
                Earn up to 1% commission (of the net revenue) for every referral
                made.
              </p>
              <p className="mt-5">
                Earn recurring commissions when a lead is converted to a paying
                customer on HealthGo.
              </p>
              <p className="mt-5">
                Keep track of all referrals from your HealthGo app and withdraw
                (payout) commissions to preferred bank accounts with ease.
                Commissions will reflect on your HealthGo balance. o.
              </p>
              <p className="mt-5">
                Get access to HealthGO referral partner program and event.{" "}
              </p>
              <p className="mt-5">
                Increase in referral partner loyalty by making sure people or
                startups referred get to be active on the Platform.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 md:mt-0">
            <img src={Img1} alt="Section Design" />
          </div>
        </div>
      </section>
      <div className="waitlist-section pt-36 lg:pt-72"></div>
      <section className="lg:p-20 lg:pb-40 p-10 lg:pt-0 pt-0 bg-primary">
        <p className="benefits text-center text-white">Partner Benefits</p>
        <p className="benefits-sub pt-5 pb-20 text-center text-white">
          Some of the numerous benefits you stand to gain
        </p>
        <div className="lg-screen">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10">
            <div className="partner-card-1 p-10">
              <p className="partner-card-h">
                Partner with Healthgo to accelerate growth
              </p>
              <p className="partner-card-t mt-5">
                With access to our wide network of partners, you can expand your
                reach and gain commission in referring more partners that are
                active.
              </p>
            </div>
            <div className="partner-card-2 p-10">
              <p className="partner-card-h">Increase customer loyalty</p>
              <p className="partner-card-t mt-5">
                Gain increased customer loyalty by becoming associated with
                trusted brands and industry partners.
              </p>
            </div>
            <div className="partner-card-3 p-10">
              <p className="partner-card-h">
                Increase efficiency in crucial business areas
              </p>
              <p className="partner-card-t mt-5">
                The Healthgo Partner Program provides access to resources that
                help you improve the efficiency of operations, increase in
                sales, and create long-term relationships.
              </p>
            </div>
            <div className="partner-card-4 p-10">
              <p className="partner-card-h">
                Earn from the comfort of your home
              </p>
              <p className="partner-card-t mt-5">
                Earn commissions for each valid lead of individuals and startups
                you refer to Healthgo. No other implementation is required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
