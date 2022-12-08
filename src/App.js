import "./App.css";
import { Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { PublicRoute } from "./PublicRoute";
// import { PrivateRoute } from "./PrivateRoute";
import { lazy } from "react";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const SharedLayout = lazy(() => import("./pages/SharedLayout/SharedLayout"));
// const Contacts = lazy(() => import("../pages/Contacts"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
};
