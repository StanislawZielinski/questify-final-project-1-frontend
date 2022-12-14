import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import GeneralDescription from "../../components/GeneralDescription/GeneralDescription";
import { ReactComponent as Rectangle } from "../../images/Rectangle.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <GeneralDescription />
        <LoginForm />
        <Rectangle className="rectangle" />
      </div>
    </div>
  );
};

export default Home;
