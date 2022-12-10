import React from "react";
import styles from "./LoginForm.module.css";
// import { useDispatch } from "react-redux";
// import { useAddNewUserMutation } from "redux/apiSlice";
import Notiflix from "notiflix";
// import { addToken } from "../../redux/tokenSlice";
// import { logIn } from "../../redux/isLoggedSlice";
// import { addUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // START ********************
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [addNewUser] = useAddNewUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("object");

    const emailDOM = document.getElementById("email");
    const passwordDOM = document.getElementById("password");
    const email = emailDOM.value;
    const password = passwordDOM.value;

    console.log(typeof email, typeof password);
    console.log(email, password);
    const canRegister = [email, password].every(Boolean);
    console.log(canRegister);
    // const credentials = { email, password };
    if (canRegister) {
      try {
        Notiflix.Loading.standard("wait...");
        Notiflix.Loading.remove(2000);
        // await addNewUser(credentials)
        //   .unwrap()
        //   .then(({ token }) => {
        //     if (token !== undefined) {
        //       dispatch(addToken(token));
        //       dispatch(logIn(true));
        //       dispatch(addUser(email, password));
        //     } else {
        //       Notiflix.Notify.failure(`Something went wrong. Pleasw try again`);
        //       return;
        //     }
        //   });
      } catch (error) {
        alert("error");
        return;
      }
    }

    const form = document.getElementById("form");
    form.reset();

    await navigate("/dashboard", { replace: true });
  };
  // END *********

  return (
    <form onSubmit={handleSubmit} className={styles.form} id="form">
      <input
        id="email"
        className={styles.formInput}
        type="text"
        name="fname"
        placeholder="Email"
      />
      <input
        className={styles.formInput}
        type="text"
        id="password"
        name="lname"
        placeholder="Password"
      />
      <button className={styles.formButton} type="submit">
        go!
      </button>
    </form>
  );
};

export default LoginForm;
