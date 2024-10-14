function myServer(myFajax) {
  const fajaxMsg = JSON.parse(myFajax);
  const url = fajaxMsg["url"];
  const requestType = fajaxMsg["typeOfRequest"];
  const content = fajaxMsg["content"];
  const idAction = fajaxMsg["idAction"];

  switch (requestType) {
    case "GET":
      switch (idAction) {
        case "log-in-validation":
          logInValidation(content[0], content[1]);
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
