import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";

const HeaderEmailLogo = () => {
  const email = useSelector(selectUserName);
  const firstLetterOfEmail = email.charAt(0).toUpperCase();

  return (
    <>
      <p className="header-nav-email">{firstLetterOfEmail}</p>
    </>
  );
};

export default HeaderEmailLogo;