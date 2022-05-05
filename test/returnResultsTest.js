const assert = require("chai").assert;
const word = require("../word");

describe("returnResults", () => {
  describe("the function returns an array of English words", () => {
    it("the function returns any English words in working string", () => {
      const working = "working";
      const workingArray = word.returnResults(working);
      let workingArrayFromcreatehWords = word.createWords(working);
      workingArrayFromfindEnglishWords = word.findEnglishWords(
        workingArrayFromcreatehWords
      );
      assert.notStrictEqual(workingArray, workingArrayFromfindEnglishWords);
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
      const input = word.returnResults("");
      assert.equal(input, errorMessage);
    });

    it("returns an error message when the input has more than two words", () => {
      let moreThanTwoWords = word.returnResults("This is a pen.");
      assert.equal(moreThanTwoWords, errorMessage);
    });

    it("returns an error message when the input includes non Alphabet character", () => {
      let nonAlphabet = word.returnResults("안녕하세요");
      assert.equal(nonAlphabet, errorMessage);
    });

    it("returns an error message when the input includes symbols", () => {
      let symbols = word.returnResults("Good.Night@@");
      assert.equal(symbols, errorMessage);
    });

    it("returns an error message when the input is a number", () => {
      let number = word.returnResults(999999);
      assert.equal(number, errorMessage);
    });

    it("returns an error message when the input doesn't contain any English words", () => {
      let words = word.returnResults("lll");
      assert.equal(words, noEnglishContainsMessage);
    });
  });
});
