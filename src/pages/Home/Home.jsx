import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { ReactComponent as Rectangle } from "../../images/Rectangle.svg";
import "./Home.scss";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCards } from "../services/api";
const Home = () => {
  // const cardsState = useSelector((state) => state.cards);
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.loading);
  // const isError = useSelector((state) => state.error);

  // useEffect(() => {
  //   dispatch(fetchCards());
  // }, [dispatch]);
  return (
    <div className="home">
      {/* {isError && <p>error.message</p>} */}
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
