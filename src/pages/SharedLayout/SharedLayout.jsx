import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import "./SharedLayout.css";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
