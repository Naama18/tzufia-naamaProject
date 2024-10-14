class Fajax {
  constructor() {
    this._url;
    this._content;
    this._typeOfRequest;
    this._ready = false;
  }
  openFajax(typeOfRequst, url, content) {
    this._url = url;
    this._content = content;
    this._typeOfRequest = typeOfRequst;
  }
  sendFajax() {
    this._ready = true;
    return {
      url: this._url,
      typeOfRequest: this._typeOfRequest,
      content: this._content,
    };
  }
  onloadFajax() {}
}
