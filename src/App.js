import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "../src/components/Routes/PublicRoute";
import { PrivateRoute } from "../src/components/Routes/PrivateRoute";
import { lazy } from "react";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
const Home = lazy(() => import("./pages/Home/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/"
            element={<PublicRoute redirectTo="/" component={<Home />} />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/dashboard" component={<Dashboard />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
