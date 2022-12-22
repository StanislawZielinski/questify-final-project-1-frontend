import React from "react";
import styles from "./CompleteModal.module.css";
import { CompleteSvg } from "./CompleteSvg";

const subString = (str) => {
  if (str.length < 18) {
    return str;
  } else {
    return str.slice(0, 17) + "...";
  }
};

const CompleteModal = ({
  children,
  shownCompleteModal,
  closeCompleteModal,
  tasks,
}) => {
  const { name } = tasks;
  const title = name;

  return shownCompleteModal ? (
    <div className={styles.modalBackdrop}>
      <div className={styles.completeModal}>
        <p className={styles.info}>
          COMPLETED: <span className={styles.name}>{subString(title)}</span>
        </p>

        <CompleteSvg />

        <p className={styles.continue} onClick={closeCompleteModal}>
          Continue
          <span className={styles.continueArrow}>
            <svg
              width="7"
              height="5"
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.71372 4.9248C4.61836 5.02507 4.45964 5.02507 4.36094 4.9248C4.26558 4.82793 4.26558 4.6667 4.36094 4.57005L6.14973 2.75291H0.246967C0.109368 2.75269 0 2.64159 0 2.50181C0 2.36203 0.109368 2.24731 0.246967 2.24731H6.14973L4.36094 0.433565C4.26558 0.333303 4.26558 0.171845 4.36094 0.0751963C4.45964 -0.0250659 4.61858 -0.0250659 4.71372 0.0751963L6.92598 2.32251C7.02467 2.41938 7.02467 2.58062 6.92598 2.67726L4.71372 4.9248Z"
                fill="#00D7FF"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  ) : null;
};

export { CompleteModal };
