import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as LogoutImg } from "../../images/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const logoutFn = () => {
    dispatch(logout());
  };
  return (
    <nav className="header">
      <div className="header-title">Questify</div>
      <div className="header-nav">
        <p className="header-nav-email">J</p>
        <p className="header-nav-description">John's Quest Log</p>
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
