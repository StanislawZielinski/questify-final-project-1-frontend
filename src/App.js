import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "../src/components/Routes/PublicRoute";
import { PrivateRoute } from "../src/components/Routes/PrivateRoute";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Home = lazy(() => import("./pages/Home/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/dashboard" component={<Home />} />
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute redirectTo="/dashboard" component={<Signup />} />
            }
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute redirectTo="/" component={<Dashboard />} />}
          />
          <Route
            path="*"
            element={
              <PublicRoute redirectTo="/dashboard" component={<Home />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
