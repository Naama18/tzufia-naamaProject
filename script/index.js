function showContentlog() {
    document.getElementById("shown").innerHTML=" ";
    let temp, item, a, i;
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("div");
    a = document.importNode(item, true);
    document.getElementById("shown").appendChild(a);
  }


  function showContentreg() {
    document.getElementById("shown").innerHTML=" ";
    let temp, item, a, i;
    temp = document.getElementsByTagName("template")[1];
    item = temp.content.querySelector("div");
    a = document.importNode(item, true);
    document.getElementById("shown").appendChild(a);
  }

  function showContentContacts() {
    document.getElementById("shown").innerHTML=" ";
    let temp, item, a, i;
    temp = document.getElementsByTagName("template")[2];
    item = temp.content.querySelector("div");
    a = document.importNode(item, true);
    document.getElementById("shown").appendChild(a);
  }

//   function showContentAddContacts() {
//     document.getElementById("shown").innerHTML=" ";
//     let temp, item, a, i;
//     temp = document.getElementsByTagName("template")[3];
//     item = temp.content.querySelector("div");
//     a = document.importNode(item, true);
//     document.getElementById("shown").appendChild(a);
//   }