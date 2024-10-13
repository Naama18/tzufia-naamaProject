function insertRegisterValidation() {
  //   let allData = JSON.parse(localStorage.getItem("allContent"));
  //   alert(allData);

  let name = document.getElementById("pName").value;
  let password = document.getElementById("password").value;
  let nameIsExist = localStorage.getItem(name);
  console.log("nameIsExist: ", nameIsExist);
  if (nameIsExist === null) {
    const userData = {
      password: password,
      content: {},
    };
    // allData[name] = JSON.stringify(userData);
    localStorage.setItem(name, JSON.stringify(userData));
  } else {
    alert("userName already exist");
  }
}

function logInValidation() {
  let name = document.getElementById("pName").value;
  let password = document.getElementById("password").value;
  const storedUserData = localStorage.getItem(name);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (userData["password"] === password) {
      alert("sign in succefully!");
      localStorage.setItem("Current user", name);
      showContentContacts();
      displayContacts();
    }
  } else {
    alert("name or password invalid");
  }
}

function AddToContacts() {
  let nameToAdd = document.getElementById("name").value;
  let phoneNumber = document.getElementById("phonetoadd").value;
  let currentUser = localStorage.getItem("Current user");
  let getFromLocal = JSON.parse(localStorage.getItem(currentUser));
  console.log(getFromLocal.content);
  getFromLocal.content[nameToAdd] = phoneNumber;
  console.log(getFromLocal.content);
  console.log(JSON.stringify(getFromLocal));
  localStorage.setItem(currentUser, JSON.stringify(getFromLocal));
  //   localStorage.setItem(currentUser, JSON.stringify(newContant));
  /*
  alert(userToUpdate["content"][nameToAdd] === null);
  if (userToUpdate["content"][nameToAdd] === null) {
    alert("im here");
  } else {
    alert("this name is already exist");
  }
    */
}
function displayContacts() {
  let tbl = document.getElementById("main-table");
  let currentUser = localStorage.getItem("Current user");
  let getFromLocal = JSON.parse(localStorage.getItem(currentUser));
  let userContacts = getFromLocal.content;
  let keys = Object.keys(getFromLocal.content);

  for (let i = 0; i < keys.length; i++) {
    const newRow = document.createElement("tr");
    const nameKey = document.createElement("td");
    nameKey.textContent = keys[i]; // Example name
    newRow.appendChild(nameKey);

    const phoneVal = document.createElement("td");
    phoneVal.textContent = userContacts[keys[i]]; // Example age
    newRow.appendChild(phoneVal);
    tbl.appendChild(newRow);
  }
}
