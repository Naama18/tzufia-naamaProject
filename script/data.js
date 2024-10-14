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
  } else {
    alert("userName already exist");
  }
}

function logInValidation(name, password) {
  const storedUserData = localStorage.getItem(name);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (userData["password"] === password) {
      alert("sign in succefully!");
      localStorage.setItem("Current user", name);
      // showContentContacts();
      // displayContacts();
    } else {
      alert("name or password invalid");
    }
  }
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
  }
  if (valInarray(phoneNumber, Object.values(getFromLocal.content))) {
    alert("You already have this contact");
  } else {
    getFromLocal.content[nameToAdd] = phoneNumber;
    console.log(getFromLocal.content);
    console.log(JSON.stringify(getFromLocal));
    localStorage.setItem(currentUser, JSON.stringify(getFromLocal));
    showContentContacts();
    displayContacts();
  }
}
// function displayContacts() {
//   let tbl = document.getElementById("main-table");
//   let currentUser = localStorage.getItem("Current user");
//   let getFromLocal = JSON.parse(localStorage.getItem(currentUser));
//   let userContacts = getFromLocal.content;
//   let keys = Object.keys(getFromLocal.content);

//   for (let i = 0; i < keys.length; i++) {
//     const newRow = document.createElement("tr");
//     const nameKey = document.createElement("td");
//     nameKey.textContent = keys[i]; //
//     newRow.appendChild(nameKey);

//     const phoneVal = document.createElement("td");
//     phoneVal.textContent = userContacts[keys[i]]; //
//     newRow.appendChild(phoneVal);
//     tbl.appendChild(newRow);
//   }
// }
