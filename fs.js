//import fs => filesystem package

const cfvghbj = require("fs");

cfvghbj.readFile("./welcome.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
});
