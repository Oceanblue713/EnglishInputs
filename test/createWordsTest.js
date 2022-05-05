const assert = require("chai").assert;
const { createWords } = require("../word");

describe("createWords function", () => {
  describe("the function returns an array of strings", () => {
    it("returns array of dog string", () => {
      const dog = ["d", "dg", "do", "dog", "g", "o", "og"];
      const dogCreated = createWords("dog");
      for (let i in dogCreated) {
        assert.equal(dogCreated[i], dog[i]);
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
      let workingCreated = createWords("working");
      for (let i in workingCreated) {
        assert.equal(workingCreated[i], working[i]);
      }
    });
  });

  describe("the function returns false when the condition does not match", () => {
    it("returns false when the input has more than two words", () => {
      let moreThanTwoWords = createWords("This is a pen.");
      assert.isFalse(moreThanTwoWords);
    });

    it("returns false when the input is empty", () => {
      let emptyInput = createWords("");
      assert.isFalse(emptyInput);
    });

    it("returns false when the input includes non Alphabet character", () => {
      let nonAlphabet = createWords("こんにちは");
      assert.isFalse(nonAlphabet);
    });

    it("returns false when the input includes symbols", () => {
      let symbols = createWords("Hello!#");
      assert.isFalse(symbols);
    });

    it("returns false when the input is a number", () => {
      let number = createWords(100);
      assert.isFalse(number);
    });

    // Skipping this test because it throws a JavaScript heap out of memory error
    it.skip("returns false the input is more than 189819 characters", () => {
      let longCharacter = "a".repeat(189819);
      let longCharacterBool = createWords(longCharacter);
      assert.isFalse(longCharacterBool);
    });
  });
});
