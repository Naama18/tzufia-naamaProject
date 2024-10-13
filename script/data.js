allContent = {
  password: "1234567",
  content: { shahar: "0506479121" },
};
const stringifyContent = JSON.stringify(allContent);
localStorage.setItem("Naama", stringifyContent);
localStorage.setItem("Current user", "");
