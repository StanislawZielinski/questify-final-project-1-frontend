import Header from "../../components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import "./SharedLayout.css";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
