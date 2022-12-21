import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";

const HeaderEmailLogo = () => {
  const { name } = useSelector(selectUserName);
  const firstLetterOfEmail = name?.charAt(0).toUpperCase();

  return <>{<p className="header-nav-email">{firstLetterOfEmail}</p>}</>;
};

export default HeaderEmailLogo;
