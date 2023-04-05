var generator = require("generate-password");

var password = generator.generate({
  length: 3,
  numbers: false,
});

console.log(password);
