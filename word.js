const createWords = (word) => {
  word = word.toString();
  checkWord = word.split(" ");
  if (checkWord.length !== 1 || checkWord[0] === "") {
    return false;
  }

  const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const alphabet = /[a-zA-Z]/;
  if (symbols.test(word) || !alphabet.test(word)) {
    return false;
  }

  if (word.length > 189819) {
    return false;
  }

  let result = [];
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    let tempArray = [char];
    for (let x in result) {
      result.push(result[x] + char);
    }
    result = result.concat(tempArray).sort();
  }
  return result;
};

const findEnglishWords = (words) => {
  const fs = require("fs");
  const wordListPath = require("word-list");
  const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");
  const englishWords = [];
  for (let w in words) {
    if (wordArray.includes(words[w].toString())) {
      englishWords.push(words[w]);
    }
  }
  if (englishWords.length === 0) {
    return false;
  } else {
    const nonDuplicate = [];
    englishWords.forEach((word) => {
      if (!nonDuplicate.includes(word)) {
        nonDuplicate.push(word);
      }
    });
    return nonDuplicate.sort();
  }
};

const returnResults = (sentence) => {
  if (createWords(sentence) !== false) {
    sentence = createWords(sentence);
    if (
      findEnglishWords(sentence).length === 0 ||
      !findEnglishWords(sentence)
    ) {
      return "Your input doesn't contain any English words.";
    } else {
      return findEnglishWords(sentence);
    }
  } else {
    return "Error! Incorrect input.";
  }
};

module.exports = { createWords, findEnglishWords, returnResults };

// The code below is for displaying input and output in terminal.
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a string: ", (word) => {
  console.log(returnResults(word));
  reader.close();
});
