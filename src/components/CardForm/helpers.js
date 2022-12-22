const switchLevelForm = () => {
  const form = document.querySelector("#form");
  const level = form.querySelector("#levelBtn");
  const levelDot = form.querySelector("#levelDot");
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

const switchGroupForm = () => {
  const form = document.querySelector("#form");
  const group = form.querySelector("#groupBtn");
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

const switchLevelEdit = () => {
  const edit = document.querySelector("#cardEdit");
  const level = edit.querySelector("#levelBtn");
  const levelDot = edit.querySelector("#levelDot");
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

const switchGroupEdit = () => {
  const edit = document.querySelector("#cardEdit");
  const group = edit.querySelector("#groupBtn");
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

export { switchLevelForm, switchGroupForm, switchLevelEdit, switchGroupEdit };
