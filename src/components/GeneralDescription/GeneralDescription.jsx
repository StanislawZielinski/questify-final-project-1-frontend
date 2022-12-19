import React from "react";
import { Link } from "react-router-dom";
import "./GeneralDescription.scss";
const GeneralDescription = () => {
  return (
    <>
      <h3 className="title">Questify</h3>
      <p className="description">
        Questify will turn your life into a thrilling game full of amazing
        quests and exciting challenges.
      </p>
      <p className="login-info">
        Choose your name to{" "}
        <Link to="/signup" className="login-info-signup">
          sign up
        </Link>{" "}
        or log in
      </p>
    </>
  );
};
export default GeneralDescription;
