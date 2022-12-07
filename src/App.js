import Home from "./pages/Home";
// import SharedLayout from "../pages/SharedLayout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { PublicRoute } from "./PublicRoute";
// import { PrivateRoute } from "./PrivateRoute";
// import { lazy } from "react";

// const Login = lazy(() => import("../pages/Login"));
// const Register = lazy(() => import("../pages/Register"));
// const Contacts = lazy(() => import("../pages/Contacts"));

export const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}> */}
        <Route index element={<Home />} />

        {/* </Route> */}
      </Routes>
    </div>
  );
};
