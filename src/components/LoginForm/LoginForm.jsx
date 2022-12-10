import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.formInput}
        type="text"
        id="fname"
        name="fname"
        placeholder="Email"
      />
      <input
        className={styles.formInput}
        type="text"
        id="lname"
        name="lname"
        placeholder="Password"
      />
      <input className={styles.formButton} type="submit" value="go!" />
    </form>
  );
};

export default LoginForm;
