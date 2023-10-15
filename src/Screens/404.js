import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Assets/404.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const error = () => {
  return (
    <section className="bg-secondary text-center _404-page lg:p-20 p-10">
      <img src={img} alt="404" className="pt-8 _404" />
      <p className="text-primary oops">Oops!</p>
      <p className="oops-text">
        This Page took a wellness break. We'll get you on track soon!
      </p>
      <NavLink to="/">
        <button className="mt-6 bg-primary hover:bg-white hover:text-primary text-white py-3 px-6 rounded inline-flex items-center">
          <span className="mr-2">Let's go home then</span>
          <HiArrowNarrowRight />
        </button>
      </NavLink>
    </section>
  );
};

export default error;
