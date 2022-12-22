import styles from "./QuestListsContainer.module.css";
import React, { useEffect, useState } from "react";
import { CardForm } from "../CardForm/CardForm";
import { AddButton } from "../AddButton/AddButton";
import { fetchCards, addCard, deleteCard } from "../../redux/cards/operations";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../redux/cards/selectors";
import Notiflix from "notiflix";

const QuestListsContainer = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const [isCreateNew, setIsisCreateNew] = useState(false);
  const [newQuest, setNewQuest] = useState([]);
  const [paragraphValue, setParagraphValue] = useState(" ");
  // const [storage, setStorage] = useState(() => {
  //   return JSON.parse(localStorage.getItem("quest")) || [];
  // });

  const handleClick = () => {
    setIsisCreateNew(true);
    setNewQuest([...newQuest]);
    setParagraphValue("CREATE NEW QUEST");
  };

  // useEffect(() => {
  //   const json = JSON.stringify(storage);
  //   localStorage.setItem("quest", json);
  // }, [storage]);
  function refreshPage() {
    window.location.reload(false);
  }
  const tasksSubmit = (values) => {
    console.log("newTask");
    dispatch(addCard(values));
    Notiflix.Loading.standard("wait...");
    Notiflix.Loading.remove(3000);
    setIsisCreateNew(false);
    // refreshPage();
    // setStorage([values, ...storage]);
  };

  const tasksUpdate = (values) => {
    // console.log("click");
    const updatedTask = tasks.map((task) =>
      task._id === values.id ? values : task
    );
    // send to api
    // console.log(updatedTask);
    // dispatch(editCard(task._id));
    // to storage
    // setStorage(updatedTask);
    // console.log(storage);
  };
  const deleteQuest = (id) => {
    console.log("deleteQuest");
    console.log(id);
    dispatch(deleteCard(id));
    Notiflix.Loading.standard("wait...");
    Notiflix.Loading.remove(2000);
    setIsisCreateNew(false);
    // refreshPage();
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
            onClick={() => setIsisCreateNew(false)}
            onSubmitCreate={tasksSubmit}
          />
        )}
        {/* render quests from storage */}
        {tasks?.map((task) => (
          <CardForm
            key={task._id}
            tasks={task}
            onSubmitUpdate={tasksUpdate}
            id={task._id}
            deleteQuest={() => deleteQuest(task._id)}
          />
        ))}
      </div>
      <h2 className={styles.today}>TOMORROW</h2>
      <AddButton createNewQuest={handleClick} />
    </div>
  );
};

export { QuestListsContainer };
