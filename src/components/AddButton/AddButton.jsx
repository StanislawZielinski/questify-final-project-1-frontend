import "./AddButton.scss";

export const AddButton = ({ createNewQuest }) => {
  return (
    <button
      className="button--create-new-task"
      type="button"
      onClick={() => createNewQuest()}
    ></button>
  );
};
