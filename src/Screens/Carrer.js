import { HiArrowNarrowRight } from "react-icons/hi";
import Img from "../Assets/image26.svg";
import Connect from "../Components/Connect";

const Carrer = () => {
  return (
    <section className="container-box bg-secondary ">
      <div className="lg:grid grid-cols-7 lg:p-20 p-10">
        <div className="col-span-4 lg:mr-20 lg:mt-20 align-center career-box">
          <p className="text-primary career-head">
            There are no open roles currently...
          </p>
          <p className="career- mt-10">
            Kindly join our wait list to be informed as soon as there’s any open
            role at HealthGO.
          </p>
          <button class="mt-8 bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded inline-flex items-center">
            <span className="mr-2">Join Waitlist</span> <HiArrowNarrowRight />
          </button>
        </div>
        <div className="col-span-3 lg:pt-0 pt-10">
          <img src={Img} alt="" />
        </div>
      </div>
      <Connect />
    </section>
  );
};

export default Carrer;
