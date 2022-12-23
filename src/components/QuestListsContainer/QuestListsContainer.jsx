import styles from "./QuestListsContainer.module.css";
import React, { useEffect, useState } from "react";
import { CardForm } from "../CardForm/CardForm";
import { AddButton } from "../AddButton/AddButton";

const QuestListsContainer = () => {
  const [isCreateNew, setIsisCreateNew] = useState(false);
  const [newQuest, setNewQuest] = useState([]);
  const [todayQuest, setTodayQuest] = useState([]);
  const [tomorrowQuest, setTomorrowQuest] = useState([]);
  const [completedQuest, setCompletedQuest] = useState([]);
  const [showDoneComponent, toggleDoneComponent] = useState(false);
  const [paragraphValue, setParagraphValue] = useState(" ");
  const [storage, setStorage] = useState(() => {
    return JSON.parse(localStorage.getItem("quest")) || [];
  });
  // const isToday=Date.now()
  const handleClick = () => {
    setIsisCreateNew(true);
    setNewQuest([...newQuest]);
    setParagraphValue("CREATE NEW QUEST");
  };
  useEffect(() => {
    clearPrevious();
  }, []);
  useEffect(() => {
    const json = JSON.stringify(storage);
    localStorage.setItem("quest", json);
    renderToday();
    renderTomorrow();
    renderDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);
  const tasksSubmit = (values) => {
    setStorage([values, ...storage]);
    setIsisCreateNew(false);
  };
  const tasksUpdate = (values) => {
    const updatedTask = storage.map((task) =>
      task.id === values.id ? values : task
    );
    setStorage(updatedTask);
  };
  const taskDelete = (id) => {
    const newStorage = storage.filter((task) => task.id !== id);
    setStorage(newStorage);
  };
  const renderTomorrow = () => {
    const tomorrowTasks = storage.filter((task) => {
      const today = new Date();
      const date = task.date.split("T")[0].split("-");
      return (
        task.progress === false &&
        Number(date[0]) === today.getFullYear() &&
        Number(date[1]) === today.getMonth() + 1 &&
        Number(date[2]) === today.getDate() + 1 &&
        task
      );
    });
    setTomorrowQuest(tomorrowTasks);
  };
  const renderToday = () => {
    const todayTasks = storage.filter((task) => {
      const today = new Date();
      const date = task.date.split("T")[0].split("-");
      return (
        task.progress === false &&
        Number(date[0]) === today.getFullYear() &&
        Number(date[1]) === today.getMonth() + 1 &&
        Number(date[2]) === today.getDate() &&
        task
      );
    });
    setTodayQuest(todayTasks);
  };
  const renderDone = () => {
    const doneTask = storage.filter((task) => task.progress === true && task);
    setCompletedQuest(doneTask);
  };
  const clearPrevious = () => {
    const previousTasks = storage.filter((task) => {
      const today = new Date();
      const date = task.date.split("T")[0].split("-");
      return (
        Number(date[0]) >= today.getFullYear() ||
        Number(date[1]) >= today.getMonth() + 1 ||
        (Number(date[2]) >= today.getDate() && task)
      );
    });
    setStorage(previousTasks);
  };
  return (
    <div className={styles.questListsContainer}>
      <h2 className={styles.today}>TODAY</h2>
      <div className={styles.cards}>
        {/* create new quest onClick */}
        {isCreateNew && (
          <CardForm
            tasks={newQuest}
            paragraphValue={paragraphValue}
            closeCard={() => setIsisCreateNew(false)}
            onSubmit={tasksSubmit}
          />
        )}
        {/* render today quests from storage */}
        {todayQuest?.map((task) => (
          <CardForm
            key={task.id}
            tasks={task}
            onSubmit={tasksUpdate}
            handleDelete={taskDelete}
            renderDone={renderDone}
          />
        ))}
      </div>
      <h2 className={styles.today}>TOMORROW</h2>
      {/* render tomorrow quests from storage */}
      {tomorrowQuest?.map((task) => (
        <CardForm
          key={task.id}
          tasks={task}
          onSubmit={tasksUpdate}
          handleDelete={taskDelete}
          renderDone={renderDone}
        />
      ))}
      {/* render done quests from storage */}
      {completedQuest.length > 0 && (
        <h2
          className={styles.today}
          onClick={() =>
            !showDoneComponent
              ? toggleDoneComponent(true)
              : toggleDoneComponent(false)
          }
        >
          DONE
        </h2>
      )}
      {showDoneComponent &&
        completedQuest?.map((task) => (
          <CardForm
            key={task.id}
            tasks={task}
            onSubmit={tasksUpdate}
            handleDelete={taskDelete}
          />
        ))}
      <AddButton createNewQuest={handleClick} />
    </div>
  );
};

export { QuestListsContainer };
