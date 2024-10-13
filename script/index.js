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
    console.log('temp: ', temp);
    item = temp.content.querySelector("div");
    console.log('item: ', item);
    a = document.importNode(item, true);
    console.log('a: ', a);
    document.getElementById("shown").appendChild(a);
  }