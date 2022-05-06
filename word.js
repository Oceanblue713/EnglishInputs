class Word {
  constructor(word) {
    this.word = word;
  }

  createWords = () => {
    let word = this.word.toString();
    let result = [];
    const checkWord = word.split(" ");
    if (checkWord.length !== 1 || checkWord[0] === "") {
      return result;
    }

    const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const alphabet = /[a-zA-Z]/;
    if (symbols.test(word) || !alphabet.test(word)) {
      return result;
    }

    if (word.length > 20) {
      return result;
    }

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

  findEnglishWords = (words) => {
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
      return englishWords;
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

  returnResults = () => {
    if (this.createWords().length !== 0) {
      const sentence = this.createWords(this.word);
      if (
        this.findEnglishWords(sentence).length === 0 ||
        !this.findEnglishWords(sentence)
      ) {
        return "Your input doesn't contain any English words.";
      } else {
        return this.findEnglishWords(sentence);
      }
    } else {
      return "Error! Incorrect input.";
    }
  };
}

module.exports = Word;
