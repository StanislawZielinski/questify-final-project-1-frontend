import styles from "./AddButton.module.css";

export const AddButton = ({ createNewQuest }) => {
  return (
    <button
      className={styles.createNewTask}
      type="button"
      onClick={() => createNewQuest()}
    >+</button>
  );
};
