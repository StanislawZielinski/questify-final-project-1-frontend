// import "./Home.css"
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

  // LOGIN PAGE - REDUX 😊
  // const initialState = {
  //   email: '',
  //   password: '',
  // // };
  // const [state, setState] = useState(initialState);
  // const { email, password } = state;
  // const dispatch = useDispatch();
  // handlesuBmit -> dispatch(login(state)); (import from redux/auth/operations)

  return (
    <div>
      <p> HOME</p>
      {/* {isError && <p>error.message</p>} */}
    </div>
  );
};

export default Home;
