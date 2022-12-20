import { useRef, useState } from "react";
import styles from "./CardForm.module.css";
import "./LevelDot.css";

const switchLevel = () => {
  const level = document.querySelector("#levelBtn");
  const levelDot = document.querySelector("#levelDot");
  if (level.value === "Easy") {
    level.value = "Normal";
    levelDot.className = "normalDot";
  } else if (level.value === "Normal") {
    level.value = "Hard";
    levelDot.className = "hardDot";
  } else if (level.value === "Hard") {
    level.value = "Easy";
    levelDot.className = "easyDot";
  }
};
const switchGroup = () => {
  const group = document.querySelector("#groupBtn");
  if (group.value === "STUFF") {
    group.value = "FAMILY";
  } else if (group.value === "FAMILY") {
    group.value = "HEALTH";
  } else if (group.value === "HEALTH") {
    group.value = "LEARNING";
  } else if (group.value === "LEARNING") {
    group.value = "LEISURE";
  } else if (group.value === "LEISURE") {
    group.value = "WORK";
  } else if (group.value === "WORK") {
    group.value = "STUFF";
  }
};
const CardForm = ({ tasks, paragraphValue, onClick, onSubmit }) => {
  const levelRef = useRef();
  const groupRef = useRef();
  const progressRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const { name, date, level, group, progress, id } = tasks;
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
      {/* form for edit - patch */}
      {!isCreateNew && isActive && (
        <form className={styles.card} onSubmit={handleUpdate}>
          <div className={styles.formTop}>
            <div>
              <div id="levelDot" className="easyDot" />
              <input
                className={styles.easy}
                id="levelBtn"
                type="button"
                onClick={switchLevel}
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
                className={styles.checkmark}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.1733 6.62854L12.941 6.13379C12.6112 6.10381 12.3262 5.89391 12.1914 5.57907L10.3173 1.03634C10.0174 0.286715 8.95281 0.286715 8.65296 1.03634L6.79388 5.57907C6.67393 5.89391 6.37408 6.10381 6.04424 6.13379L0.81182 6.62854C0.0322038 6.70351 -0.282641 7.67802 0.302071 8.20276L4.24513 11.666C4.50001 11.8909 4.60495 12.2207 4.52999 12.5506L3.34557 17.408C3.16566 18.1728 3.99026 18.8023 4.67992 18.3977L9.04277 15.8338C9.32763 15.6689 9.67246 15.6689 9.95732 15.8338L14.3203 18.3977C15.01 18.8023 15.8346 18.1878 15.6545 17.408L14.4851 12.5506C14.4101 12.2207 14.5151 11.8909 14.7699 11.666L18.713 8.20276C19.2827 7.67802 18.9529 6.70351 18.1733 6.62854Z" />
              </svg>
            </label>
          </div>
          <div className={styles.formMiddle}>
            <p className={styles.info}>EDIT QUEST</p>
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
              onClick={switchGroup}
              value={"STUFF"}
              ref={groupRef}
            />
            <div className={styles.options}>
              {/* show modal to cancel or delete */}
              <button className={styles.cancel} onClick={handleClick}>
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
        </form>
      )}
      {/* fixed tags on fetch */}
      {!isCreateNew && !isActive && (
        <form className={styles.card} onClick={handleClick}>
          <div className={styles.formTop}>
            <div>
              <div id="levelDot" className="easyDot" />
              <p className={styles.easy} id="levelBtn">
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
              <svg
                className={styles.checkmark}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.1733 6.62854L12.941 6.13379C12.6112 6.10381 12.3262 5.89391 12.1914 5.57907L10.3173 1.03634C10.0174 0.286715 8.95281 0.286715 8.65296 1.03634L6.79388 5.57907C6.67393 5.89391 6.37408 6.10381 6.04424 6.13379L0.81182 6.62854C0.0322038 6.70351 -0.282641 7.67802 0.302071 8.20276L4.24513 11.666C4.50001 11.8909 4.60495 12.2207 4.52999 12.5506L3.34557 17.408C3.16566 18.1728 3.99026 18.8023 4.67992 18.3977L9.04277 15.8338C9.32763 15.6689 9.67246 15.6689 9.95732 15.8338L14.3203 18.3977C15.01 18.8023 15.8346 18.1878 15.6545 17.408L14.4851 12.5506C14.4101 12.2207 14.5151 11.8909 14.7699 11.666L18.713 8.20276C19.2827 7.67802 18.9529 6.70351 18.1733 6.62854Z" />
              </svg>
            </label>
          </div>
          <div className={styles.formMiddle}>
            <p className={styles.info}> </p>
            <p className={styles.name}>{name}</p>
            <p className={styles.date}>{date}</p>
          </div>
          <div className={styles.formBottom}>
            <p className={styles.groupBtn} id="groupBtn">
              {group}
            </p>
          </div>
        </form>
      )}
      {/* form for createNew */}
      {isCreateNew && (
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.formTop}>
            <div>
              <div id="levelDot" className="easyDot" />
              <input
                className={styles.easy}
                id="levelBtn"
                type="button"
                onClick={switchLevel}
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
              onClick={switchGroup}
              value={"STUFF"}
              ref={groupRef}
            />
            <div className={styles.options}>
              <button className={styles.cancel} onClick={onClick}>
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
      )}
    </>
  );
};

export { CardForm };
