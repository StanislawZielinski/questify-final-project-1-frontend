import styles from "./QuestListsContainer.module.css";
import React, { useEffect, useState } from "react";
import { CardForm } from "../CardForm/CardForm";
import { AddButton } from "../AddButton/AddButton";
import { fetchCards } from "../../redux/cards/operations";
import { editCard } from "../../redux/cards/operations";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../redux/cards/selectors";

const QuestListsContainer = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

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

  // useEffect(() => {
  //   const json = JSON.stringify(storage);
  //   localStorage.setItem("quest", json);
  // }, [storage]);

  const tasksSubmit = (values) => {
    console.log("newTask");
    setStorage([values, ...storage]);
    setIsisCreateNew(false);
  };

  const tasksUpdate = (values) => {
    console.log("click");
    const updatedTask = tasks.map((task) =>
      task.id === values.id ? values : task
    );
    // send to api
    dispatch(editCard(updatedTask));
    // to storage
    // setStorage(updatedTask);
    console.log(storage);
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
      {/* {storage?.map((task) => (
        <CardForm key={task.id} tasks={task} onSubmit={tasksUpdate} />
      ))} */}
      {tasks?.map((task) => (
        <CardForm
          key={task._id}
          tasks={task}
          onSubmit={tasksUpdate}
          id={task._id}
        />
      ))}
      <h2 className={styles.today}>TOMORROW</h2>
      <AddButton createNewQuest={handleClick} />
    </div>
  );
};

export { QuestListsContainer };
