import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        id="fname"
        name="fname"
        placeholder="Email"
      />
      <input
        className="form-input"
        type="text"
        id="lname"
        name="lname"
        placeholder="Password"
      />
      <input className="form-button" type="submit" value="go!" />
    </form>
  );
};

export default LoginForm;
