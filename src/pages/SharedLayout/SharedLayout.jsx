import Header from "../../components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import "./SharedLayout.css";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import Notiflix from "notiflix";

const SharedLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Header />}
      <Suspense
        fallback={
          <div>
            {Notiflix.Loading.standard("wait...")}
            {Notiflix.Loading.remove(1000)}
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
