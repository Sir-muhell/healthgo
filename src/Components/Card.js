import React from "react";
import Logo from "../Assets/image15.svg";

const Card = ({ Image, Head, SubHead }) => {
  return (
    <div className="product-card relative">
      <img src={Image} alt="" className="card-img" />
      <p className="pt-20 card-head text-primary">{Head}</p>
      <p className="pt-10 text-blackk card-text">{SubHead}</p>
      <img src={Logo} alt="" className="card-logo" />
    </div>
  );
};

export default Card;
