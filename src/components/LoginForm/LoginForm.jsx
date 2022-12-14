import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import Notiflix from "notiflix";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import Form from "../Form/Form";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = "Stachu";
    const canRegister = [email, password].every(Boolean);
    const credentials = { name, email, password };
    if (canRegister) {
      try {
        Notiflix.Loading.standard("wait...");
        Notiflix.Loading.remove(2000);
        dispatch(login(credentials));
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

  return <Form handleSubmit={handleSubmit} />;
};

export default LoginForm;
