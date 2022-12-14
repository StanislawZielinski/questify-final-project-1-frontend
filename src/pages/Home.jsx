// import "./Home.css"
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCards } from "../services/api";

import { QuestListsContainer } from "../components/QuestListsContainer/QuestListsContainer"; 

const Home = () => {
  // const cardsState = useSelector((state) => state.cards);
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.loading);
  // const isError = useSelector((state) => state.error);

  // useEffect(() => {
  //   dispatch(fetchCards());
  // }, [dispatch]);

  return (
    <div>
      <p> HOME</p>
      {/* {isError && <p>error.message</p>} */}
      <QuestListsContainer />
    </div>
  );
};

export default Home;
