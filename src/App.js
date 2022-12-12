import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { PublicRoute } from "./PublicRoute";
// import { PrivateRoute } from "./PrivateRoute";
import { lazy } from "react";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
const Home = lazy(() => import("./pages/Home/Home"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
