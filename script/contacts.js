function showContactsFormAdd() {
  document.getElementById("shown").innerHTML = " ";
  let temp, item, a, i;
  temp = document.getElementsByTagName("template")[3];
  item = temp.content.querySelector("div");
  a = document.importNode(item, true);
  document.getElementById("shown").appendChild(a);
}
/*
function addToTable(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phonetoadd").value;
    localStorage.setItem("current-contact",{name:name })
    let table = document.getElementById("main-table");
    console.log(table)
    table.insertRow("name")
}
    */
