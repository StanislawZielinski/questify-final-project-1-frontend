import styles from "./QuestListsContainer.module.css";
import React, { useEffect, useState } from "react";
import { CardForm } from "../CardForm/CardForm";
import { AddButton } from "../AddButton/AddButton";

const QuestListsContainer = () => {
  const [isCreateNew, setIsisCreateNew] = useState(false);
  const [newQuest, setNewQuest] = useState([]);
  const [paragraphValue, setParagraphValue] = useState(" ");
  const [storage, setStorage] = useState(() => {
    return JSON.parse(localStorage.getItem("quest")) || [];
  });
  const handleClick = () => {
    setIsisCreateNew(true);
    setNewQuest([...newQuest]);
    setParagraphValue("CREATE NEW QUEST");
  };
  useEffect(() => {
    const json = JSON.stringify(storage);
    localStorage.setItem("quest", json);
  }, [storage]);
  const tasksSubmit = (values) => {
    setStorage([values, ...storage]);
    setIsisCreateNew(false);
  };
  return (
    <div className={styles.questListsContainer}>
      <h2 className={styles.today}>TODAY</h2>
      {/* create new quest onClick */}
      {isCreateNew && (
        <CardForm
          tasks={newQuest}
          paragraphValue={paragraphValue}
          onClick={() => setIsisCreateNew(false)}
          onSubmit={tasksSubmit}
        />
      )}
      {/* render quests from storage */}
      {/* update on Submit */}
      {storage?.map((task) => (
        <CardForm key={task.id} tasks={storage} />
      ))}
      <h2 className={styles.today}>TOMORROW</h2>
      <AddButton createNewQuest={handleClick} />
    </div>
  );
};

export { QuestListsContainer };
