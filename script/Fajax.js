class Fajax {
  constructor() {
    this._url;
    this._content;
    this._typeOfRequest;
    this._ready = false;
    this._idAction = "";
    this._onload;
    this._response = 200;
  }
  openFajax(typeOfRequst, url, content, idAction) {
    this._url = url;
    this._content = content;
    this._typeOfRequest = typeOfRequst;
    this._idAction = idAction;
  }
  sendFajax() {
    this._ready = true;
    myServer(
      JSON.stringify({
        url: this._url,
        typeOfRequest: this._typeOfRequest,
        content: this._content,
        idAction: this._idAction,
        response: this._response,
      })
    );
  }
}
