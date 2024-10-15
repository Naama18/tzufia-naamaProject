allContent = {
  password: "1234567",
  content: { shahar: "0506479121" },
};
const stringifyContent = JSON.stringify(allContent);
localStorage.setItem("Naama", stringifyContent);
localStorage.setItem("Current user", "");

function insertRegisterValidation(name, password) {
  let nameIsExist = localStorage.getItem(name);
  if (nameIsExist === null) {
    const userData = {
      password: password,
      content: {},
    };
    localStorage.setItem(name, JSON.stringify(userData));
    return 200;
  } else {
    alert("userName already exist");
    return 404;
  }
}
function usernameExist(name, password) {
  const storedUserData = localStorage.getItem(name);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (userData["password"] === password) {
      return true;
    }
  }
  return false;
}
function logInValidation(name, password) {
  const storedUserData = localStorage.getItem(name);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (userData["password"] === password) {
      alert("sign in succefully!");
      localStorage.setItem("Current user", name);
      return 200;
    } else {
      alert("name or password invalid");
      return 404;
    }
  }
  alert("name or password invalid");
  return 404;
}
function valInarray(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}

function AddToContacts(nameToAdd, phoneNumber) {
  let currentUser = localStorage.getItem("Current user");
  let getFromLocal = JSON.parse(localStorage.getItem(currentUser));
  console.log(getFromLocal.content);
  if (phoneNumber.trim() === "" || nameToAdd.trim() === "") {
    alert("Invalid content");
    return 404;
  }
  if (valInarray(phoneNumber, Object.values(getFromLocal.content))) {
    alert("You already have this contact");
    return 404;
  } else {
    getFromLocal.content[nameToAdd] = phoneNumber;
    console.log(getFromLocal.content);
    console.log(JSON.stringify(getFromLocal));
    localStorage.setItem(currentUser, JSON.stringify(getFromLocal));
    showContentContacts();
    displayContacts();
    return 200;
  }
  return 404;
}
