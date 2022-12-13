import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import Notiflix from "notiflix";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "../Form/Form";

const LoginForm = () => {
  // START ********************
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const navigateToDashboard = async (token) => {
    if (token) {
      const form = document.getElementById("form");
      form.reset();
      // await navigate("/dashboard", { replace: true });
    } else {
      Notify.failure("Please, check your email and password");
      return;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = "Stachu";
    console.log(typeof email, typeof password);
    console.log(name, password);
    const canRegister = [email, password].every(Boolean);
    console.log(canRegister);
    const credentials = { name, email, password };
    console.log(canRegister);

    if (canRegister) {
      try {
        Notiflix.Loading.standard("wait...");
        Notiflix.Loading.remove(2000);
        dispatch(login(credentials));
        // console.log(token);

        // if (token) {
        //   const form = document.getElementById("form");
        //   form.reset();
        // } else {
        //   Notify.failure("Please, check your email and password");
        //   return;
        // }

        // const form = document.getElementById("form");
        // form.reset();
        // await navigate("/dashboard", { replace: true });
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
  // END *********

  return <Form handleSubmit={handleSubmit} />;
};

export default LoginForm;
