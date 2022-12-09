import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { ReactComponent as Rectangle } from "../../images/Rectangle.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h3 className="title">Questify</h3>
        <p className="description">
          Questify will turn your life into a thrilling game full of amazing
          quests and exciting challenges.
        </p>
        <p className="login-info">Choose your name to sign up or log in</p>
        <LoginForm />
        <Rectangle className="rectangle" />
      </div>
    </div>
  );
};

export default Home;
