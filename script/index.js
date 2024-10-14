function showContentlog() {
  document.getElementById("shown").innerHTML = " ";
  let temp, item, a, i;
  temp = document.getElementsByTagName("template")[0];
  item = temp.content.querySelector("div");
  a = document.importNode(item, true);
  document.getElementById("shown").appendChild(a);
  location.hash = "#logInPage";
}

function showContentreg() {
  document.getElementById("shown").innerHTML = " ";
  let temp, item, a, i;
  temp = document.getElementsByTagName("template")[1];
  item = temp.content.querySelector("div");
  a = document.importNode(item, true);
  document.getElementById("shown").appendChild(a);
  location.hash = "#signUpPage";
}

function showContentContacts() {
  document.getElementById("shown").innerHTML = " ";
  let temp, item, a, i;
  temp = document.getElementsByTagName("template")[2];
  item = temp.content.querySelector("div");
  a = document.importNode(item, true);
  document.getElementById("shown").appendChild(a);
  location.hash = "#contacts";
}

function showContactsFormAdd() {
  document.getElementById("shown").innerHTML = " ";
  let temp, item, a, i;
  temp = document.getElementsByTagName("template")[3];
  item = temp.content.querySelector("div");
  a = document.importNode(item, true);
  document.getElementById("shown").appendChild(a);
  location.hash = "#addContact";
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
    nameKey.textContent = keys[i]; //
    newRow.appendChild(nameKey);

    const phoneVal = document.createElement("td");
    phoneVal.textContent = userContacts[keys[i]]; //
    newRow.appendChild(phoneVal);
    tbl.appendChild(newRow);
  }
}
function openObjFajax(typeOfRequst, url, content, idAction, functions = []) {
  const fajaxttp = new Fajax();

  fajaxttp.openFajax(typeOfRequst, url, content, idAction);
  fajaxttp.sendFajax();
  setTimeout(
    (fajaxttp._onload = (function () {
      for (let i = 0; i < functions.length; i++) {
        functions[i]();
      }
    })()),
    1000
  );
}
