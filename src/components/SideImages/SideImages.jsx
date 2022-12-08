import React from "react";
import pic1 from "../../images/pic1.png";
import "./SideImages.scss";

const SideImages = () => {
  return (
    <div className="container">
      <img src={pic1} alt="pic1" className="pic1" />
    </div>
  );
};

export default SideImages;
