import React from "react";
import styles from "./QuestListsContainer.module.css";
import { CardForm } from "../CardForm/CardForm";

const QuestListsContainer = () => {
  return (
    <div className={styles.questListsContainer}>
      <h2 className={styles.today}>TODAY</h2>
      <CardForm />
    </div>
  );
};

export { QuestListsContainer };
