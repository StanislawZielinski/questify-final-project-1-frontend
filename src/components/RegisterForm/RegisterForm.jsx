import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import Notiflix from "notiflix";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import SignupForm from "../Form/SignupForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const canRegister = [name, email, password].every(Boolean);
    const credentials = { name, email, password };
    if (canRegister) {
      try {
        Notiflix.Loading.standard("wait...");
        Notiflix.Loading.remove(2000);
        dispatch(register(credentials));
      } catch (error) {
        alert("error");
        return;
      }
    } else {
      Notify.info("Please, check your email and password");
      return;
    }
    // const form = document.getElementById("form");
    // form.reset();
  };

  return <SignupForm handleSubmit={handleSubmit} />;
};

export default RegisterForm;
