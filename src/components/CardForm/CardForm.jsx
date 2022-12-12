import { useRef } from "react";
import styles from "./CardForm.module.css";
import "./LevelDot.css";

const switchLevel = () => {
  const level = document.querySelector("#levelBtn");
  const levelDot = document.querySelector("#levelDot");
  if (level.value === "Easy") {
    level.value = "Normal";
    level.className = "styles.normal";
    levelDot.className = "normalDot";
  } else if (level.value === "Normal") {
    level.value = "Hard";
    level.className = "styles.hard";
    levelDot.className = "hardDot";
  } else if (level.value === "Hard") {
    level.value = "Easy";
    level.className = "styles.easy";
    levelDot.className = "easyDot";
  }
};

const switchGroup = () => {
  const val = document.querySelector("#groupBtn").value;
  if (val === "STUFF") {
    document.querySelector("#groupBtn").value = "FAMILY";
  } else if (val === "FAMILY") {
    document.querySelector("#groupBtn").value = "HEALTH";
  } else if (val === "HEALTH") {
    document.querySelector("#groupBtn").value = "LEARNING";
  } else if (val === "LEARNING") {
    document.querySelector("#groupBtn").value = "LEISURE";
  } else if (val === "LEISURE") {
    document.querySelector("#groupBtn").value = "WORK";
  } else if (val === "WORK") {
    document.querySelector("#groupBtn").value = "STUFF";
  }
};

const CardForm = () => {
  const levelRef = useRef();
  const groupRef = useRef();
  const progressRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      level: levelRef.current.value,
      group: groupRef.current.value,
      progress: progressRef.current.checked,
      name: nameRef.current.value,
      date: dateRef.current.value,
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <div className={styles.formTop}>
        <div className="levelBox">
          <div id="levelDot" className="easyDot"></div>
          <input
            className={styles.easy}
            id="levelBtn"
            type="button"
            onClick={switchLevel}
            value="Easy"
            ref={levelRef}
          />
        </div>
        <input className={styles.checkbox} type="checkbox" ref={progressRef} />
      </div>

      <div className={styles.formMiddle}>
        <p className={styles.info}>CREATE NEW QUEST</p>
        <input className={styles.name} type="text" ref={nameRef} />
        <input lassName={styles.date} type="datetime-local" ref={dateRef} />
      </div>

      <div className={styles.formBottom}>
        <input
          className={styles.groupBtn}
          type="button"
          id="groupBtn"
          onClick={switchGroup}
          value="STUFF"
          ref={groupRef}
        />
        <div className={styles.options}>
          <button className={styles.cancel}>❌</button>
          <span className={styles.span}>|</span>
          <button className={styles.submit} type="submit">
            START
          </button>
        </div>
      </div>
    </form>
  );
};

export { CardForm };
