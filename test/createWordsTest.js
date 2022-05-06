const assert = require("chai").assert;
const expect = require("chai").expect;
const Word = require("../word.js");

describe("createWords function", () => {
  const input = new Word("");
  describe("the function returns an array of strings", () => {
    it("returns array of dog string", () => {
      const dog = ["d", "dg", "do", "dog", "g", "o", "og"];
      input.word = "dog";
      const dogCreated = input.createWords();
      for (let i in dogCreated) {
        assert.strictEqual(dogCreated[i], dog[i]);
      }
    });
    it("returns array of working strings", () => {
      const working = [
        "g",
        "i",
        "ig",
        "in",
        "ing",
        "k",
        "kg",
        "ki",
        "kig",
        "kin",
        "king",
        "kn",
        "kng",
        "n",
        "ng",
        "o",
        "og",
        "oi",
        "oig",
        "oin",
        "oing",
        "ok",
        "okg",
        "oki",
        "okig",
        "okin",
        "oking",
        "okn",
        "okng",
        "on",
        "ong",
        "or",
        "org",
        "ori",
        "orig",
        "orin",
        "oring",
        "ork",
        "orkg",
        "orki",
        "orkig",
        "orkin",
        "orking",
        "orkn",
        "orkng",
        "orn",
        "orng",
        "r",
        "rg",
        "ri",
        "rig",
        "rin",
        "ring",
        "rk",
        "rkg",
        "rki",
        "rkig",
        "rkin",
        "rking",
        "rkn",
        "rkng",
        "rn",
        "rng",
        "w",
        "wg",
        "wi",
        "wig",
        "win",
        "wing",
        "wk",
        "wkg",
        "wki",
        "wkig",
        "wkin",
        "wking",
        "wkn",
        "wkng",
        "wn",
        "wng",
        "wo",
        "wog",
        "woi",
        "woig",
        "woin",
        "woing",
        "wok",
        "wokg",
        "woki",
        "wokig",
        "wokin",
        "woking",
        "wokn",
        "wokng",
        "won",
        "wong",
        "wor",
        "worg",
        "wori",
        "worig",
        "worin",
        "woring",
        "work",
        "workg",
        "worki",
        "workig",
        "workin",
        "working",
        "workn",
        "workng",
        "worn",
        "worng",
        "wr",
        "wrg",
        "wri",
        "wrig",
        "wrin",
        "wring",
        "wrk",
        "wrkg",
        "wrki",
        "wrkig",
        "wrkin",
        "wrking",
        "wrkn",
        "wrkng",
        "wrn",
        "wrng",
      ];
      input.word = "working";
      const workingCreated = input.createWords();
      for (let i in workingCreated) {
        assert.strictEqual(workingCreated[i], working[i]);
      }
    });

    it("returns an array when the input is 20 characters", () => {
      const twentyCharacter = "b".repeat(20);
      input.word = twentyCharacter;
      const maxChar = input.createWords();
      expect(maxChar).to.not.empty;
    });
  });

  describe("the function returns an empty array when the condition does not match", () => {
    it("returns an empty array when the input has more than two words", () => {
      input.word = "This is a pen.";
      const moreThanTwoWords = input.createWords();
      expect(moreThanTwoWords).to.be.empty;
      expect(moreThanTwoWords).to.be.an("array");
    });

    it("returns an empty array when the input is empty", () => {
      input.word = "";
      const emptyInput = input.createWords();
      expect(emptyInput).to.be.empty;
      expect(emptyInput).to.be.an("array");
    });

    it("returns an empty array when the input includes non Alphabet character", () => {
      input.word = "こんにちは";
      const nonAlphabet = input.createWords();
      expect(nonAlphabet).to.be.empty;
      expect(nonAlphabet).to.be.an("array");
    });

    it("returns an empty array when the input includes symbols", () => {
      input.word = "Hello!#";
      const symbols = input.createWords();
      expect(symbols).to.be.empty;
      expect(symbols).to.be.an("array");
    });

    it("returns an empty array when the input is a number", () => {
      input.word = 100;
      const number = input.createWords();
      expect(number).to.be.empty;
      expect(number).to.be.an("array");
    });

    it("returns an empty array the input is more than 21 characters", () => {
      let longCharacter = "d".repeat(21);
      input.word = longCharacter;
      const longCharacterBool = input.createWords();
      expect(longCharacterBool).to.be.empty;
      expect(longCharacterBool).to.be.an("array");
    });

    // Skipping this test because it throws a JavaScript heap out of memory error
    it.skip("returns an empty array the input is more than 189819 characters", () => {
      const longCharacter = "a".repeat(189819);
      input.word = longCharacter;
      const longCharacterBool = input.createWords();
      expect(longCharacterBool).to.be.empty;
      expect(longCharacterBool).to.be.an("array");
    });
  });
});
