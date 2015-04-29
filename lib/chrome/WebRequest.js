var Event = require('../Event');
module.exports = WebRequest;

function WebRequest(chrome) {
  this.chrome = chrome;
  this.onAuthRequired = new Event();
  this.onHeadersReceived = new Event();
}
