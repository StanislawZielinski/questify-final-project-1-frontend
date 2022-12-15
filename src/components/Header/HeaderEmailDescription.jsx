import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";

const HeaderEmailDescription = () => {
  const email = useSelector(selectUserName);
  const emailName = email.substring(0, email.indexOf("@"));
  console.log(emailName);
  return (
    <>
      <p className="header-nav-description">{emailName}'s Quest Log</p>
    </>
  );
};

export default HeaderEmailDescription;
