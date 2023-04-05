// import package http => import 7aja from 7aja .
const http = require("http");

//create server => listen to 3000
http
  .createServer((request, response) => {
    //response
    response.end("<h1>Hello Node!!!!</h1>");
  })
  .listen(3000);
