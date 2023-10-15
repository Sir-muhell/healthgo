import Connect from "../Components/Connect";
import Partner from "../Components/Partner";
import Img from "../Assets/image10.svg";
import Img2 from "../Assets/image11.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const Eve = () => {
  return (
    <div className="container-box bg-secondary">
      <section className="lg:p-20 p-10 lg:grid grid-cols-7 lg-screen">
        <div className="col-span-4 lg:mr-20">
          <p className="text-primary home-head">
            There's no event happening soon...
          </p>
          <p className="sub-head mt-10">
            You'd be informed as soon as there's an event coming up. For now,
            kindly check out pictures and videos from past events
          </p>
          <a
            href="https://youtu.be/De8rzpBmmIc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-8 bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded inline-flex items-center">
              <span className="mr-2">Check Past Events</span>
              <HiArrowNarrowRight />
            </button>
          </a>
        </div>
        <div className="col-span-3">
          <img src={Img} alt="Past events" />
        </div>
      </section>
      <div className="waitlist-section pt-20 lg:pt-72"></div>
      <section className="pb-10 bg-primary">
        <div className="lg:p-20 p-10 lg:grid grid-cols-7 lg-screen">
          <div className="col-span-4 mr-10">
            <p className="waitlist-head text-white">
              Health Finance BlockChain 2022
            </p>
            <p className="text-white pt-10">
              If you are an IOS user, Kindly Join the waitlist to get updated
              right in your inbox when the HealthGO mobile app is availble on
              Apple Store.
            </p>
            <a
              href="https://youtu.be/De8rzpBmmIc"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-10 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center">
                <span className="mr-2">See images & Videos</span>
                <HiArrowNarrowRight />
              </button>
            </a>
          </div>
          <div className="col-span-3 pt-20 lg:pt-0">
            <img src={Img2} alt="Events" />
          </div>
        </div>
      </section>
      <div className="waitlist-section-down pt-20 lg:pt-48 "></div>
      <section className="about-section lg-screen">
        <div className="lg:p-20 lg:pt-20 p-10 ">
          <p className="h-about-header  text-primary text-center">
            Other Events
          </p>
          <div className="lg:grid grid-cols-7">
            <div className="col-span-4 lg:mr-20">
              <p className="text-primary home-head lg:mt-20">
                There's no event happening soon...
              </p>
              <p className="sub-head mt-10">
                You'd be informed as soon as there's an event coming up. For
                now, kindly check out pictures and videos from past events
              </p>
              {/* <a href="./">
                <button className="mt-8 bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded inline-flex items-center">
                  <span className="mr-2">Check Past Events</span>
                  <HiArrowNarrowRight />
                </button>
              </a> */}
            </div>
            <div className="col-span-3">
              <img src={Img} alt="Coming_events" />
            </div>
          </div>
        </div>
      </section>
      <Partner
        Question="Are you planning an event?"
        Offer="At HealthGO, we are eager to partner with various organizations for Tech events with agreements that will be loved by both parties."
      />
      <Connect />
    </div>
  );
};

export default Eve;
