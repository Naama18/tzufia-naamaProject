class Fajax {
  constructor() {
    this._url;
    this._content;
    this._typeOfRequest;
    this._idAction = "";
    this._onload;
    this._response = undefined;
  }
  openFajax(typeOfRequst, url, content, idAction) {
    this._url = url;
    this._content = content;
    this._typeOfRequest = typeOfRequst;
    this._idAction = idAction;
  }
  sendFajax() {
    myServer(this);
  }

  getResponse() {
    return this._response;
  }
}
