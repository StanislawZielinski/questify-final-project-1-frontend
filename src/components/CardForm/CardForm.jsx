import { useRef, useState } from "react";
import {
  switchLevelForm,
  switchGroupForm,
  switchLevelEdit,
  switchGroupEdit,
} from "./helpers";
import { CancelModal } from "../CancelModal/CancelModal";
import { CompleteModal } from "../CompleteModal/CompleteModal";
import styles from "./CardForm.module.css";
import "./LevelDot.css";

const CardForm = ({
  tasks,
  paragraphValue,
  closeCard,
  onSubmit,
  handleDelete,
  challange,
}) => {
  const [cancelModalShown, toggleCancelModal] = useState(false);
  const [completeModalShown, toggleCompleteModal] = useState(false);

  const levelRef = useRef();
  const groupRef = useRef();
  const progressRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const { name, date, level, group, progress, id, type } = tasks;
  const [isActive, setIsActive] = useState(false);
  const isCreateNew = paragraphValue === "CREATE NEW QUEST";
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      level: levelRef.current.value,
      group: groupRef.current.value,
      progress: progressRef.current.checked,
      name: nameRef.current.value,
      date: dateRef.current.value,
      type: "quest",
    };
    onSubmit(data);
    console.clear();
    setIsActive(false);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if (id) {
      const data = {
        id,
        level: levelRef.current.value,
        group: groupRef.current.value,
        progress: progressRef.current.checked,
        name: nameRef.current.value,
        date: dateRef.current.value,
        type,
      };
      onSubmit(data);
    }
    setIsActive(false);
  };
  const handleClick = () => {
    !isActive ? setIsActive(true) : setIsActive(false);
  };
  return (
    <>
      {/* EDIT */}
      {!isCreateNew && isActive && (
        <div className={styles.editMode}>
          <form
            id="cardEdit"
            className={challange ? styles.challange : styles.cardEdit}
            onSubmit={handleUpdate}
          >
            <div className={styles.formTop}>
              <div>
                <div id="levelDot" className="easyDot" />
                <input
                  className={styles.easy}
                  id="levelBtn"
                  type="button"
                  onClick={switchLevelEdit}
                  defaultValue={level || "Easy"}
                  ref={levelRef}
                />
              </div>
              <label>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  ref={progressRef}
                />
                {challange ? (
                  <svg
                    className={styles.checkmark}
                    id="icon-trophy"
                    viewBox="0 0 32 32"
                    onClick={() => {
                      toggleCompleteModal(!completeModalShown);
                    }}
                  >
                    <path
                      fill="#00d7ff"
                      d="M25.585 1.47h-2.613c0.009-0.289 0.015-0.581 0.015-0.873 0-0.33-0.267-0.597-0.596-0.597h-12.78c-0.33 0-0.597 0.267-0.597 0.597 0 0.293 0.005 0.584 0.015 0.873h-2.613c-0.33 0-0.597 0.267-0.597 0.597 0 2.673 0.699 5.195 1.967 7.102 1.254 1.885 2.924 2.966 4.728 3.071 0.409 0.445 0.842 0.808 1.292 1.085v2.652h-1.001c-1.21 0-2.194 0.984-2.194 2.194v1.001h-0.042c-0.329 0-0.597 0.267-0.597 0.596s0.267 0.597 0.597 0.597h10.863c0.33 0 0.597-0.267 0.597-0.597s-0.267-0.596-0.597-0.596h-0.042v-1.001c0-1.21-0.984-2.194-2.194-2.194h-1.001v-2.652c0.45-0.277 0.883-0.64 1.292-1.085 1.804-0.105 3.475-1.186 4.729-3.071 1.268-1.906 1.967-4.428 1.967-7.102 0-0.329-0.267-0.597-0.597-0.597zM8.779 8.507c-1.046-1.573-1.661-3.629-1.755-5.844h2.071c0.215 2.723 0.854 5.24 1.853 7.238 0.159 0.318 0.325 0.619 0.498 0.902-0.992-0.375-1.911-1.158-2.667-2.295zM23.221 8.507c-0.757 1.137-1.675 1.921-2.667 2.295 0.173-0.283 0.339-0.584 0.498-0.902 0.999-1.998 1.638-4.515 1.853-7.238h2.071c-0.094 2.215-0.708 4.272-1.755 5.844z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    onClick={() => {
                      toggleCompleteModal(!completeModalShown);
                    }}
                    className={styles.checkmark}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.1733 6.62854L12.941 6.13379C12.6112 6.10381 12.3262 5.89391 12.1914 5.57907L10.3173 1.03634C10.0174 0.286715 8.95281 0.286715 8.65296 1.03634L6.79388 5.57907C6.67393 5.89391 6.37408 6.10381 6.04424 6.13379L0.81182 6.62854C0.0322038 6.70351 -0.282641 7.67802 0.302071 8.20276L4.24513 11.666C4.50001 11.8909 4.60495 12.2207 4.52999 12.5506L3.34557 17.408C3.16566 18.1728 3.99026 18.8023 4.67992 18.3977L9.04277 15.8338C9.32763 15.6689 9.67246 15.6689 9.95732 15.8338L14.3203 18.3977C15.01 18.8023 15.8346 18.1878 15.6545 17.408L14.4851 12.5506C14.4101 12.2207 14.5151 11.8909 14.7699 11.666L18.713 8.20276C19.2827 7.67802 18.9529 6.70351 18.1733 6.62854Z" />
                  </svg>
                )}
              </label>
            </div>
            <div className={styles.formMiddle}>
              <p className={styles.info}>
                {challange ? "EDIT CHALLENGE" : "EDIT QUEST"}
              </p>
              <input
                className={styles.name}
                type="text"
                ref={nameRef}
                defaultValue={name}
              />
              <input
                className={styles.date}
                type="datetime-local"
                ref={dateRef}
                defaultValue={date}
              />
            </div>
            <div className={styles.formBottom}>
              <input
                className={styles.groupBtn}
                type="button"
                id="groupBtn"
                onClick={switchGroupEdit}
                ref={groupRef}
                defaultValue={group || "STUFF"}
              />
              <div className={styles.options}>
                <button
                  type="button"
                  className={styles.cancel}
                  onClick={() => toggleCancelModal(true)}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
                      fill="#DB0837"
                    />
                  </svg>
                </button>
                <span className={styles.span}>|</span>
                <button className={styles.submit} type="submit">
                  <svg width="14" height="10" viewBox="0 0 45 32" fill="none">
                    <path
                      fill="#24d40c"
                      d="M14.255 25.313l-10.691-10.030-3.564 3.343 14.255 13.373 30.545-28.657-3.564-3.343-26.982 25.313z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <CompleteModal
              shownCompleteModal={completeModalShown}
              tasks={tasks}
              closeCompleteModal={() => toggleCompleteModal(false)}
            />
            {cancelModalShown && (
              <CancelModal
                closeCancelModal={() =>
                  toggleCancelModal(false) & setIsActive(false)
                }
                handleDelete={handleDelete}
                tasks={tasks}
              />
            )}
          </form>
        </div>
      )}
      {/* FIXED CARDS */}
      {!isCreateNew && !isActive && (
        <div
          key={id}
          id={id}
          className={
            challange || type === "challange"
              ? styles.challange
              : styles.newCard
          }
        >
          <form className={styles.card} onClick={handleClick}>
            <div className={styles.formTop}>
              <div>
                <div id="levelDot" className={level.toLowerCase() + "Dot"} />
                <p className={styles.easy} id="levelBtn" value={level}>
                  {level}
                </p>
              </div>
              <label>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  ref={progressRef}
                  name={progress}
                />
                {challange || type === "challange" ? (
                  <svg
                    className={styles.checkmark}
                    id="icon-trophy"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#00d7ff"
                      d="M25.585 1.47h-2.613c0.009-0.289 0.015-0.581 0.015-0.873 0-0.33-0.267-0.597-0.596-0.597h-12.78c-0.33 0-0.597 0.267-0.597 0.597 0 0.293 0.005 0.584 0.015 0.873h-2.613c-0.33 0-0.597 0.267-0.597 0.597 0 2.673 0.699 5.195 1.967 7.102 1.254 1.885 2.924 2.966 4.728 3.071 0.409 0.445 0.842 0.808 1.292 1.085v2.652h-1.001c-1.21 0-2.194 0.984-2.194 2.194v1.001h-0.042c-0.329 0-0.597 0.267-0.597 0.596s0.267 0.597 0.597 0.597h10.863c0.33 0 0.597-0.267 0.597-0.597s-0.267-0.596-0.597-0.596h-0.042v-1.001c0-1.21-0.984-2.194-2.194-2.194h-1.001v-2.652c0.45-0.277 0.883-0.64 1.292-1.085 1.804-0.105 3.475-1.186 4.729-3.071 1.268-1.906 1.967-4.428 1.967-7.102 0-0.329-0.267-0.597-0.597-0.597zM8.779 8.507c-1.046-1.573-1.661-3.629-1.755-5.844h2.071c0.215 2.723 0.854 5.24 1.853 7.238 0.159 0.318 0.325 0.619 0.498 0.902-0.992-0.375-1.911-1.158-2.667-2.295zM23.221 8.507c-0.757 1.137-1.675 1.921-2.667 2.295 0.173-0.283 0.339-0.584 0.498-0.902 0.999-1.998 1.638-4.515 1.853-7.238h2.071c-0.094 2.215-0.708 4.272-1.755 5.844z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className={styles.checkmark}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.1733 6.62854L12.941 6.13379C12.6112 6.10381 12.3262 5.89391 12.1914 5.57907L10.3173 1.03634C10.0174 0.286715 8.95281 0.286715 8.65296 1.03634L6.79388 5.57907C6.67393 5.89391 6.37408 6.10381 6.04424 6.13379L0.81182 6.62854C0.0322038 6.70351 -0.282641 7.67802 0.302071 8.20276L4.24513 11.666C4.50001 11.8909 4.60495 12.2207 4.52999 12.5506L3.34557 17.408C3.16566 18.1728 3.99026 18.8023 4.67992 18.3977L9.04277 15.8338C9.32763 15.6689 9.67246 15.6689 9.95732 15.8338L14.3203 18.3977C15.01 18.8023 15.8346 18.1878 15.6545 17.408L14.4851 12.5506C14.4101 12.2207 14.5151 11.8909 14.7699 11.666L18.713 8.20276C19.2827 7.67802 18.9529 6.70351 18.1733 6.62854Z" />
                  </svg>
                )}
              </label>
            </div>
            <div className={styles.formMiddle}>
              <p className={styles.info}>{challange && "CHALLENGE"}</p>
              <p className={styles.name}>{name}</p>

              <p type="datetime-local" className={styles.date}>
                {date.split("T").join(" ")}
              </p>
            </div>
            <div className={styles.formBottom}>
              <p className={styles.groupBtn} id="groupBtn" value={group}>
                {group}
              </p>
            </div>
          </form>
        </div>
      )}
      {/* CREATE NEW */}
      {isCreateNew && (
        <div id="form" className={styles.form}>
          <form className={styles.cardForm} onSubmit={handleSubmit}>
            <div className={styles.formTop}>
              <div>
                <div id="levelDot" className="easyDot" />
                <input
                  className={styles.easy}
                  id="levelBtn"
                  type="button"
                  onClick={switchLevelForm}
                  value={"Easy"}
                  ref={levelRef}
                />
              </div>
              <label>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  ref={progressRef}
                />
                <svg
                  onClick={() => {
                    toggleCompleteModal(!completeModalShown);
                  }}
                  className={styles.checkmark}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.1733 6.62854L12.941 6.13379C12.6112 6.10381 12.3262 5.89391 12.1914 5.57907L10.3173 1.03634C10.0174 0.286715 8.95281 0.286715 8.65296 1.03634L6.79388 5.57907C6.67393 5.89391 6.37408 6.10381 6.04424 6.13379L0.81182 6.62854C0.0322038 6.70351 -0.282641 7.67802 0.302071 8.20276L4.24513 11.666C4.50001 11.8909 4.60495 12.2207 4.52999 12.5506L3.34557 17.408C3.16566 18.1728 3.99026 18.8023 4.67992 18.3977L9.04277 15.8338C9.32763 15.6689 9.67246 15.6689 9.95732 15.8338L14.3203 18.3977C15.01 18.8023 15.8346 18.1878 15.6545 17.408L14.4851 12.5506C14.4101 12.2207 14.5151 11.8909 14.7699 11.666L18.713 8.20276C19.2827 7.67802 18.9529 6.70351 18.1733 6.62854Z" />
                </svg>
              </label>
            </div>
            <div className={styles.formMiddle}>
              <p className={styles.info}>{paragraphValue}</p>
              <input className={styles.name} type="text" ref={nameRef} />
              <input
                className={styles.date}
                type="datetime-local"
                ref={dateRef}
              />
            </div>
            <div className={styles.formBottom}>
              <input
                className={styles.groupBtn}
                type="button"
                id="groupBtn"
                onClick={switchGroupForm}
                value={"STUFF"}
                ref={groupRef}
              />
              <div className={styles.options}>
                <button
                  className={styles.cancel}
                  onClick={() => {
                    closeCard();
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
                      fill="#DB0837"
                    />
                  </svg>
                </button>
                <span className={styles.span}>|</span>
                <button className={styles.submit} type="submit">
                  CREATE
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export { CardForm };
