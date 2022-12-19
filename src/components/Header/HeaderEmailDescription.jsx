import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";

const HeaderEmailDescription = () => {
  const email = useSelector(selectUserName);
  const emailName =
    email[0] === undefined ? "?" : email[0].substring(0, email.indexOf("@"));
  return (
    <>
      <p className="header-nav-description">{emailName}'s Quest Log</p>
    </>
  );
};

export default HeaderEmailDescription;
