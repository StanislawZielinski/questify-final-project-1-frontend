import React from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";

const HeaderEmailDescription = () => {
  const { name } = useSelector(selectUserName);
  return (
    <>
      <p className="header-nav-description">{name}'s Quest Log</p>
    </>
  );
};

export default HeaderEmailDescription;
