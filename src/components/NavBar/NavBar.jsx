import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { ReactComponent as LogoutImg } from "../../images/logout.svg";
// import { useSelector } from "react-redux";
// import Email from "components/UserMenu/Email";
// import LogOut from "components/UserMenu/LogOut";

const NavBar = () => {
  //   const isLogged = useSelector((state) => state.isLogged.isLogged);
  return (
    <nav className="header">
      <div className="header-title">Questify</div>

      <div className="nav-name">
        <p className="circle">J</p>
        <p className="nav-description">John's Quest Log</p>
      </div>
      <NavLink to="/Landing">
        <LogoutImg />
      </NavLink>

      {/* {!isLogged && <NavLink to="/">Home</NavLink>}
      {!isLogged ? <NavLink to="/Login">Login</NavLink> : <Email />}
      {!isLogged ? <NavLink to="/Register">Register</NavLink> : <LogOut />} */}
    </nav>
  );
};

export default NavBar;
