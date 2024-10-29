import { HiArrowNarrowRight } from "react-icons/hi";
import Img from "../Assets/image26.svg";
import Connect from "../Components/Connect";

const Carrer = () => {
  return (
    <section className="container-box bg-secondary ">
      <div className="lg:grid grid-cols-7 lg:p-20 p-10">
        <div className="col-span-4 lg:mr-20 lg:mt-20 align-center career-box">
          <p className="text-primary career-head">
            We are hiring sales representatives
          </p>
          <p className="sub-head mt-10">
            Contact us to submit your application.
          </p>
          <a
            href="mailto:emmanuel@healthgotechnologies.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-8 bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded inline-flex items-center">
              <span className="mr-2">Send your CV</span> <HiArrowNarrowRight />
            </button>
          </a>
        </div>
        <div className="col-span-3 lg:pt-0 pt-10">
          <img src={Img} alt="Vacancy" />
        </div>
      </div>
      <div className="waitlist-section pt-20 lg:pt-60"></div>
      <div className="lg:p-20 lg:pt-0 p-10 grid lg:grid-cols-2 gap-10 bg-primary">
        <p className="text-secondary career-head">
          Are you an healthcare provider?
        </p>
        <div>
          <p className="sub-head text-white lg:mt-5">
            Are you a provider aiming at providing your services on the HealthGo
            app?
          </p>
          <a
            href="https://forms.gle/m1pfY2sNSqHSkR1N6"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-10 bg-white hover:bg-secondary text-primary font-bold py-3 px-6 rounded inline-flex items-center">
              <span className="mr-2">Join Us</span> <HiArrowNarrowRight />
            </button>
          </a>
        </div>
      </div>
      <div className="waitlist-section-down pt-20 lg:pt-48 "></div>
      <Connect />
    </section>
  );
};

export default Carrer;
