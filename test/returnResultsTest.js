const assert = require("chai").assert;
const Word = require("../word.js");

describe("returnResults", () => {
  const input = new Word("");
  describe("the function returns an array of English words", () => {
    it("the function returns any English words in working string", () => {
      input.word = "working";
      const workingArray = input.returnResults();
      let workingArrayFromcreatehWords = input.createWords();
      workingArrayFromfindEnglishWords = input.findEnglishWords(
        workingArrayFromcreatehWords
      );
      for (let i in workingArrayFromfindEnglishWords) {
        assert.strictEqual(
          workingArray[i],
          workingArrayFromfindEnglishWords[i]
        );
      }
    });
  });

  describe("the function returns an error message when an unexpected input is entered", () => {
    let errorMessage;
    let noEnglishContainsMessage;

    before(() => {
      errorMessage = "Error! Incorrect input.";
      noEnglishContainsMessage =
        "Your input doesn't contain any English words.";
    });
    it("returns an error message when the input is empty", () => {
      input.word = "";
      const message = input.returnResults();
      assert.equal(message, errorMessage);
    });

    it("returns an error message when the input has more than two words", () => {
      input.word = "Hello World!";
      let moreThanTwoWords = input.returnResults();
      assert.strictEqual(moreThanTwoWords, errorMessage);
    });

    it("returns an error message when the input includes non Alphabet character", () => {
      input.word = "안녕하세요";
      let nonAlphabet = input.returnResults();
      assert.strictEqual(nonAlphabet, errorMessage);
    });

    it("returns an error message when the input includes symbols", () => {
      input.word = "Good.Night@@";
      let symbols = input.returnResults();
      assert.strictEqual(symbols, errorMessage);
    });

    it("returns an error message when the input is a number", () => {
      input.word = 999999;
      let number = input.returnResults();
      assert.strictEqual(number, errorMessage);
    });

    it("returns an error message when the input doesn't contain any English words", () => {
      input.word = "lll";
      let words = input.returnResults();
      assert.strictEqual(words, noEnglishContainsMessage);
    });
  });
});
