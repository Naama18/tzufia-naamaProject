function myServer(myFajax) {
  console.log("Im at the server");
  const url = myFajax["_url"];
  const requestType = myFajax["_typeOfRequest"];
  const content = myFajax["_content"];
  const idAction = myFajax["_idAction"];
  switch (requestType) {
    case "GET":
      switch (idAction) {
        case "log-in-validation":
          myFajax["_response"] = logInValidation(content[0], content[1]);
          break;
      }

    case "POST":
      switch (idAction) {
        case "add-to-contacts":
          AddToContacts(content[0], content[1]);
          break;
        case "insert-register":
          insertRegisterValidation(content[0], content[1]);
          break;
      }
  }
}
