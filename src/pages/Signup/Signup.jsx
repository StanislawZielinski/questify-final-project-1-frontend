import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import GeneralDescriptionRegistration from "../../components/GeneralDescription/GeneralDescriptionRegistration";
import { ReactComponent as Rectangle } from "../../images/Rectangle.svg";
import "../Home/Home.scss";

const Signup = () => {
  return (
    <div className="home">
      <div className="container">
        <GeneralDescriptionRegistration />
        <RegisterForm />
        <Rectangle className="rectangle" />
      </div>
    </div>
  );
};

export default Signup;
