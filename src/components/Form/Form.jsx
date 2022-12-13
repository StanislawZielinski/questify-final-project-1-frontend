import React from "react";
import styles from "./Form.module.css";

const Form = ({ handleSubmit }) => {
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

export default Form;
