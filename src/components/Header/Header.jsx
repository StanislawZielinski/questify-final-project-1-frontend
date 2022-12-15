import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as LogoutImg } from "../../images/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import HeaderEmailLogo from "./HeaderEmailLogo";
import HeaderEmailDescription from "./HeaderEmailDescription";

const Header = () => {
  const dispatch = useDispatch();
  const logoutFn = () => {
    dispatch(logout());
  };
  return (
    <nav className="header">
      <div className="header-title">Questify</div>
      <div className="header-nav">
        <HeaderEmailLogo />
        <HeaderEmailDescription />
      </div>
      <NavLink to="/">
        <button className="header-button-logout" onClick={logoutFn}>
          <LogoutImg />
        </button>
      </NavLink>

      {/* {!isLogged && <NavLink to="/">Home</NavLink>}
      {!isLogged ? <NavLink to="/Login">Login</NavLink> : <Email />}
      {!isLogged ? <NavLink to="/Register">Register</NavLink> : <LogOut />} */}
    </nav>
  );
};

export default Header;
