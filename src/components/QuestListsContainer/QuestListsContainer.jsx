import styles from "./QuestListsContainer.module.css";
import React, { useEffect, useState } from "react";
import { CardForm } from "../CardForm/CardForm";
import { AddButton } from "../AddButton/AddButton";
import { fetchCards } from "../../redux/cards/operations";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../redux/cards/selectors";

const QuestListsContainer = () => {
  const [isCreateNew, setIsisCreateNew] = useState(false);
  const [quests, setQuests] = useState([]);
  const [paragraphValue, setParagraphValue] = useState(" ");
  // const storage = JSON.parse(localStorage.getItem("quest"));
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  const handleClick = () => {
    setIsisCreateNew(true);
    setQuests([...quests]);
    setParagraphValue("CREATE NEW QUEST");
  };
  return (
    <div className={styles.questListsContainer}>
      <h2 className={styles.today}>TODAY</h2>
      {/* create new quest onClick */}
      {isCreateNew && (
        <CardForm
          tasks={quests}
          paragraphValue={paragraphValue}
          onClick={() => setIsisCreateNew(false)}
        />
      )}
      {/* render quests from storage should be from API*/}
      {/* {tasks?.map(({_id}) => {
        console.log(task);
        return <CardForm key={_id} tasks={tasks} />;
      })} */}
      <h2 className={styles.today}>TOMORROW</h2>
      <AddButton createNewQuest={handleClick} />
    </div>
  );
};

export { QuestListsContainer };
