const Word = require("./word.js");

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a string: ", (word) => {
  word = new Word(word);
  console.log(word.returnResults(word));
  reader.close();
});
