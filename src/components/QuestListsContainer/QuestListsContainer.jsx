import React from "react";
import styles from "./QuestListsContainer.module.css";
import { CardForm } from "../CardForm/CardForm";


const QuestListsContainer = () => {
  return (
    <div className={styles.questListsContainer}>
      <CardForm />
    </div>
  );
};

export { QuestListsContainer };
