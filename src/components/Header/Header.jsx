import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as LogoutImg } from "../../images/logout.svg";
// import { useSelector } from "react-redux";

const Header = () => {
  //   const isLogged = useSelector((state) => state.isLogged.isLogged);
  return (
    <nav className="header">
      <div className="header-title">Questify</div>
      <div className="header-nav">
        <p className="header-nav-email">J</p>
        <p className="header-nav-description">John's Quest Log</p>
      </div>
      <NavLink to="/">
        <LogoutImg />
      </NavLink>

      {/* {!isLogged && <NavLink to="/">Home</NavLink>}
      {!isLogged ? <NavLink to="/Login">Login</NavLink> : <Email />}
      {!isLogged ? <NavLink to="/Register">Register</NavLink> : <LogOut />} */}
    </nav>
  );
};

export default Header;
